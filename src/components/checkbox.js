import React from 'react';


const Checkbox = ({ques, onInputChange}) => {
	return <div className="symptoms-list row">
	
		
	{ques.map( ( que, index ) => {

return <div className= "col-md-offset-4 col-md-4"><input className="ml100 checkbox-size" key={ `que-${ index }` } type="Checkbox" value={`${index}`} onChange = {(event) => onInputChange(`${index}`)}> <span className="checkbox-name">{que}</span></input></div>
})}
		

	</div>;
}

export default Checkbox;
