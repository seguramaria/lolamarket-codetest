import React from 'react';
import"../stylesheets/app.scss"

const FilterByName = (props) => {
    // console.log(props.markets);
	let marketsList = props.length > 0
		&& props.markets.map((item, i) => {
           
            // console.log(item.id);
		return (
			<option key={i.id} value={item.name}>{item.name}</option>
           
		)
	});

	return (
		<div>
			<select className="categories__header__select">
				{marketsList}
			</select>
		</div>
	);
};



export default FilterByName;
