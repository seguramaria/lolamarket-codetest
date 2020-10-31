import React from 'react';
import"../stylesheets/app.scss"

const FilterByMarket = (props) => {
   
	const handleChange = (ev) => {
		props.handleFilter({
		  key: "market",
		  value: ev.target.value

		});
	  };


	let marketsList = props.markets.map((market) => {

 return (
<option key={market.id} id={market.name}  value={market.id} className="categories__header__select--option">{market.name}</option>
			  )
			
           
		
	});

	return (
		<div>
			<select className="categories__header__select" id="market"
        name="market"
		value={props.companyId}
		onChange={handleChange}
        >
				{marketsList}
			</select>
		</div>
	);
};



export default FilterByMarket;
