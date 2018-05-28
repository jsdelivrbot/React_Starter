import React from 'react';


const Checkbox = ({ques, onInputChange}) => {
	return <div>
	
		
	{ques.map( ( que, index ) => {

return <input key={ `que-${ index }` } type="Checkbox" value={`${index}`} onChange = {(event) => onInputChange(`${index}`)}> {que}</input>
})}
		

	</div>;
}

export default Checkbox;
