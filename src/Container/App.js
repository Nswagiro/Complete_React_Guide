import React, {Component} from 'react';
// import Persons from '../Persons/Persons'
// import Any from '../sideWork';
import Click from '../Exe'
import Clock from '../UserOutput/Anop';
// import Wap from '../NewAssesment/Assesment';
// import Header from '../UserOutput/Trial';

class App extends Component{
  // state={
  //   counter :0
  // }
  //  counterHandler =()=>{
  //    this.setState({
  //      counter :this.state.counter+ 1
  //    })
  // }
  render(){
    return(
      <div>
        {/*   */}
        <Click />
        <Clock />
        {/* <Persons 
         clicked ={this.state.counter} */}
        {/* /> */}
        {/* <Any /> */}
      </div>
    )
  }
}
export default App;                   