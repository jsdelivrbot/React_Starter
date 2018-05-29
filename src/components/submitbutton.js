import React from 'react';

const SubmitButton = ({displayMsg}) => {
	
		return <div>
		<input type="button" value="submit" onClick = {(event) => displayMsg() }/>
		</div>;
	
}
export default SubmitButton;
