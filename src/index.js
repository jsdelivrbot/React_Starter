import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Checkbox from './components/checkbox';
import MsgBox from './components/msgBox';
import SubmitButton from './components/submitbutton';

const symptoms = ["Head Ache" , "Fever" , "Cold"];
const medicines = ["Crocin","Dolo 650","Cetrigene","Paracetamol","Saridon","Benadryl","Don't use home remedies, go to doc before u die!"];
class App extends Component {

  constructor(props) {
    super(props);
        
        this.state = {
      selectedSymptom: [],
      msg : null
    };
  }

  handleCheck(val) {
    return this.state.selectedSymptom.indexOf(val);
  }

  onInputChange = (selectedValue) => {
    var i = this.handleCheck(symptoms[selectedValue]);
    if(i >= 0 ){
      this.state.selectedSymptom.splice(i,1);
    }else{
      this.state.selectedSymptom.push(symptoms[selectedValue]);
    }
          
  }

  displayMsg = () => {
    if(this.state.selectedSymptom.length > 0){
        if(this.state.selectedSymptom.length == 1){
          for(var i=0;i<=symptoms.length;i++){
            if(this.handleCheck(symptoms[i]) == 0){
               this.setState ({
                  msg : medicines[i]
              });
            }
          }
            
         }else if(this.state.selectedSymptom.length == 2){
          if(this.handleCheck(symptoms[0]) >= 0 && this.handleCheck(symptoms[1]) >= 0){
              this.setState ({
                  msg : medicines[3]
              });
          }else if(this.handleCheck(symptoms[0]) >= 0 && this.handleCheck(symptoms[2]) >= 0){
            this.setState ({
                  msg : medicines[4]
              });
          }else if(this.handleCheck(symptoms[1]) >= 0 && this.handleCheck(symptoms[2]) >= 0){
            this.setState ({
                  msg : medicines[5]
              });
          }
         }else if(this.state.selectedSymptom.length == 3){
          this.setState ({
            msg : medicines[6]
          });
         }
    }else{
         this.setState ({
            msg : "Please tell us your problem!!!"
          })
    }
     
  }   

  
 render() {
    
      return (
      <div>
      <div>
        <h2 className="header-title">Please Tell Your Problem</h2>
      </div>
        <Checkbox ques={symptoms} onInputChange = {this.onInputChange}/>
        <MsgBox msg={this.state.msg}/>
        <SubmitButton displayMsg = {this.displayMsg}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
