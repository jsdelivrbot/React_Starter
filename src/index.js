import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Checkbox from './components/checkbox';
import MsgBox from './components/msgBox';
import SubmitButton from './components/submitbutton';

const symptoms = ["head ache" , "fever" , "cold"];
const medicines = ["1","2","3","4","5","6","don't use home remedies, go to doc before u die!"];
class App extends Component {

  constructor(props) {
    super(props);
        
        this.state = {
      selectedSymptom: null,
      msg : medicines[6]
    };
  }

  onInputChange = (selectedValue) => {
    console.log("selected", selectedValue);
    
  }

 render() {
    
      return (
      <div>
        <Checkbox ques={symptoms} onInputChange = {this.onInputChange}/>
{this.state.selectedSymptom}
        <MsgBox msg={this.state.msg}/>
        <SubmitButton />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
