import React from 'react';

const SubmitButton = ({displayMsg}) => {
	
		return <div className="text-center">
		<input className="submit-btn text-center" submit-btntype="button" value="submit" onClick = {(event) => displayMsg() }/>
		</div>;
	
}
export default SubmitButton;
