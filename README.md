# PRUEBA TÉCNICA DE LOLA MARKET

**Objetivo**: dada una especificación visual y un API, montar un componente de categorías para una tienda concreta de la gama de tiendas de Lola Market.

Se trataría de una **barra de navegación** en la que se mostrarán el conjunto de categorías de la tienda. El árbol de categorías **tendrá dos niveles,** una categoría padre puede tener varias categorías hijas; por ejemplo: 'Bebidas' contiene 'Agua', 'Cervezas', 'Refrescos', etc. La visualización de las categorías hijas deben estar dentro de un **menú colapsable** al tocar la categoría padre.

## Detalles a resaltar de la especificación visual 💄

La **cabecera** del menú debía ser **fija**. Solo tenía que hacer scroll el listado de categorías.

Al principio me costó 😅, había aplicado **position sticky** para dejarla fija y con **top 0** para que permaneciera arriba, no obstante, seguía sin quedarse fija. Lo he arreglado aplicándole al menú de navegación un: **overflow: scroll**.

Al hacer scroll, la cabecera ya sí permanece fija. 🎉

![Vídeo de Scroll del menú](./images/readme/scroll.gif)

El **color de la tienda** y su **icono** vienen en el objeto de cada tienda. Como veremos más adelante, he creado un **filtro** que actualiza la tienda que se muestra según es seleccionada por el usuario.

Por lo que, de manera inicial, **he guardado en el estado de tiendas** el valor de una tienda concreta: _Lidl_. Así cuando arranca la página, la imagen y el color de fondo del menú es concretamente de esta tienda. Más adelante explicaré cómo he implementado los filtros.

En cuanto a la parte visual de las categorías, los iconos también también vienen en el objeto de cada categoría. Para obtener ese objeto necesitamos em **company_id**, como decía, de estado inicial la tienda seleccionada es _Lidl_, por lo que las categorías son las de dicha tienda.

Aquí me di cuenta de que hay categorías que traían un icono **_“undefined”,_** 😩como es el caso de “Mi mascota” en _Lidl_.

Lo he arreglado con un ternario en la fuente de la etiqueta de la imagen para el icono. Si al pasar por props icon es undefined, pondrá un icono por defecto y si no, pondrá el icono del objeto.

## Componentes 📦

He dividido los componentes en varias partes. Como comentaba al principio, al haber añadido **extras**, al final tengo más archivos de los esperados, pero he intentado agruparlos todos con sentido lógico.

Encontraréis en components:
**App**, donde hago el montaje, los estados inciales, las rutas... **Header**, que es el componente que he creado para el Header del navegador, donde incluyo los dos filtros. Y **Categories**, que son los componentes que pintan las categorías, subcategorías y, como extra, los productos.

La estructura de la carpeta de componentes es la siguiente:

     - App.js
     - Header
    	 - Header.js
    	 - Filters
    		 - FilterByMarkets.js
    		 - FilterByPostalCode.js
     - Categories
    	 - CategoriesList.js
    	 - Category.js
    	 - Subcategory.js
    	 - Products
    		 - ProductsSection.js
    		 - Products.js

### App

En app realizo varias acciones:

- Estados
  Guardo los diferentes **estados iniciales**. Como comentaba anteriormente, los he puesto para que directamente se renderice la página con una tienda concreta en un código postal concreto. Otros estados están vacíos, pero les indico qué tipo de elemento estoy esperando a recibir. Por ejemplo, en token he añadido un String vacío.
- Montaje
  Realizo el montaje en el **Use Effect**, para que lo que esté dentro se ejecute siempre que el componente se renderice.
  Aquí he traído los datos de los **fetch** **(se encuentran en la carpeta Services)**. Esta parte ha sido la más problemática para mí, puesto que nunca había trabajado con apis que necesitaran un token o varios datos a la vez. **¡He aprendido muchísimo!** 😄
  En un inicio, me estaba dando problemas porque a veces la página se renderizaba, pero aún no había obtenido el token del fetch y los siguientes enlaces, por tanto, no funcionaban.
  Así que se me ocurrió 💡 añadir dentro del propio Use effect un condicional para que si tenía un token, me actualizara los estados que le indicara y si no era así, que me consiguiera un token.
  Al final del Use effect le añado las dependencias: **[token, postalCode, companyId, categoryId]** porque si no tendríamos **un bucle infinito**. (Me ha pasado 😆)
- Handle events:
  En este componente también podéis encontrar los manejadores que uso para los eventos y que paso luego por props a los componentes que lo necesitan.
  Destacar, por ejemplo,
  handleFilter: Para los filtros que tengo en el Header: uno de **códigos postales** con un input tipo number y otro para **las tiendas** con un select.
  A ambos componentes les paso _handleFilter._ Luego, en el componente _con handleChange_, escucho el evento y guardo el value del que ha sido modificado y lo paso por lifting hacia App.

- Filtro
  El filtro de código postal en principio es bastante sencillo. Cuando escucha el evento, guarda los datos en el estado de código postal.
  **Imagen código**
  El único problemilla es que al introducirun código postal erróneo, la página se rompía💥, ya que no podía hacer los fetch, puesto que **postalCode** es una de las claves que necesitamos para hacer el fetch.
  Así que, de manera provisional😅, se me ha ocurrido poner un alert. Cuando se mete el CP erróneo salta. Para ello, en el use effect le digo que si **markets** existe, me actualice markets y me consiga las categorías y los productos y si no existe, que salte el alert.
  Esto lo he hecho así porque si postalCode es erróneo, lo primero que falla es el fetch de markets y así no habría problema.
  No obstante, sé que no es la manera más elegante, quizás con más tiempo podría corregirlo e implementar un aviso más estético.😂

**\* Insertar imagen del alert de filtro cp**
En cuanto al filtro de markets, me resultó más complejo, ya que se trataba de un array de objetos.
En principio pensé que al escuchar el evento en cada option del select, luego realizaría un **filter()** y un **includes()**, para que si incluía el id de la tienda, me lo sacara y lo guardara en el estado de tienda filtrada.

El problema es que me devolvía un array con un objet dentro y esto me daba problemas. Así que buscando encontre 👉 **find()** que es mucho mejor en este caso. Si el id es igual, me devuelve el primer elemento del array que tenga ese id. Como son ids únicos, consigo el objeto de la tienda que quiero:

\*_IMAGEN FILTRO MARKETS_

Esto se lo paso por props a Los demás componentes.

- Router: En App también realizo el renderizado de la sección de products de los enlaces.

### Header

En Header traemos desde App los siguientes datos:

- postalCode el código postal que aparecerá en el header
- markets parala lista de options del select
- filteredMarketById el objeto en el que vienen los datos de la cabecera, nombre, icono de la tienda que voy a pintar en el header
- handleFilter el manejador de los filtros

En este componente, hay un elemento al que he aplicado un event prevent default. Porque para recubrir los elementos de los filtros (el input y el select) he usado una etiqueta form y para que los datos se enviaran como yo quería, he preferido cancelar la opción de que se envíen en el submit.

Es en el return del Header donde tengo importados los filtros. A destacar, quizás, que en el filtro de markets he tenido que hacer un **map**, ya que era un array de tiendas las que debía pintar en las etiquetas option.

_Header funcionando_

Problema 😵 El header es dinámico, cambian el color, nombre e iconos como decía antes. He encontrado un problema y es que hay tiendas cuyo brackground color es el blanco al igual que las letras del header, esto hace que no se vea qué tienda es.
_Gif mercados_
He pensado que quizás se podría arreglar con un ternario en las letras del header que dijera que si color de fondo es igual al número que corresponde al blanco, entonces las letras son negras y si no, blancas.

### Categories

En categorías tengo tres componentes:

**CategoriesList:** realizo un map a las categorías, para obtener los datos de las categorías y poder pasarlos a una lista.

**Category:** Aquí pinto las categorías con los props que le he pasado tras el mapeo. Realizo otro map para las subcategorías que añado a una lista al final de cada elemento **li** de la lista de categorías padres.

A este nuevo listado le añado un elemento **li** antes, en el que pondré el enlace a **"Ver toda la sección".**

Además, este ul tiene un ternario porque aquí es donde realizo el evento de los colapsables. Cuando es clicada si el id no está en el estado de **collapsible** se actualiza y por tanto, la clase **hidden** que tiene el ul de subcategorías se quita y se muestran todas las subcategorías.

También cambia el icono de la flecha de la categoría, que pasa de hide a show.

**Subcategory**: Aquí pinto la lista de subcategorías.

_gif subcategorías colapsando_

### Rutas

El formato de URL de cada elemento de las subcategorías es /tienda/{{ market  }}/{{ category  }}/{{ sub_category }}

Y cada grupo de subcategorías tiene un "Ver toda la sección" cuyo enlace es la categoría padre.

Para ello, he puesto como ruta exacta “./”

Y como ruta de las secciones:
**IMAGEN RUTA**

Aquí viene otro ✨**extra**✨ Como también tenía los productos, aunque solo se pedía el menú de categorías, me ha parecido divertido pintar los productos que corresponden a cada subcategoría.

Para ello, cuando una categoría es clicada, actualiza el **categoryId** y por lo tanto la lista de productos, que se la paso al componente **Products**.

No tenía mucho tiempo, pero he intentado usar estilos parecidos al que usáis para los productos. Algunos productos (creo que porque son nuevos) aún no tienen imagen, por lo que he usado un ternario en los que son undefined para que muestre el logo de Lola Market.

_Gif productos_

Y, ¡hasta aquí!

Ha sido un puente muy entretenido gracias a la prueba. Me ha gustado mucho.
¡Muchas gracias! 😊
