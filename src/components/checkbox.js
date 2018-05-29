import React from 'react';


const Checkbox = ({ques, onInputChange}) => {
	return <div className="row">
	
		
	{ques.map( ( que, index ) => {

return <div className="col-md-4"><input key={ `que-${ index }` } type="Checkbox" value={`${index}`} onChange = {(event) => onInputChange(`${index}`)}> {que}</input></div>
})}
		

	</div>;
}

export default Checkbox;
