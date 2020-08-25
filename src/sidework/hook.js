import React, { useState } from 'react';
import Persons from './Persons/Persons';
import Button from '@material-ui/core/Button';
//import Example from './work';
import './App.css'
import Any from './sideWork';

    
    const App = () => {
      let [name, stateChanged]= useState(['Roger', 'Willy', 'Ronnie'])
      const [nameShow , nameHandler] = useState(false)

      const nameChangedHandler=(event, index)=>{
        const nameChanged = [...name];
        nameChanged[index] = event.target.value;
        stateChanged(nameChanged)
      }

      const newName = (p,x,y)=>{
        let z = [p,x,y]
        stateChanged(z)
      }

      const Butt = [];
     
          !name? Butt.push('button-01') : Butt.push('button-02')

      

    return(
      <div className='App'>
        <Button  
          className = {Butt.join(' ')} 
          onClick = {()=> newName('Joshua','Babra','Mary')}>
            Hide Names
        </Button>
        <Button 
           color='secondary'
          className = {Butt.join(' ')} 
          onClick = {()=>nameHandler(!nameShow)}>
            Show Names
        </Button>
        {nameShow && name.map((p, id)=> {
          return (
            <Persons
            className = {Butt.join(' ')}
            key = {id}
            changed={(event)=>nameChangedHandler(event, id)} 
            name = {p}
          />
          )
        }) 
      }
         {/* <Example/> */}
         <Any />
      </div>
    )
    }
  export default App;