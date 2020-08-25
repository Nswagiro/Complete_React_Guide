import React from 'react';
import TextField from '@material-ui/core/TextField'
import './Persons.css';

import { purple } from '@material-ui/core/colors';

const Person=(props)=>{
     return(
         <div>
            <p style={{
                color: 'blue',
                fontWeight: 'bolder',
                fontSize: 'larger'
            }}>You clicked {props.clicked} times</p>
         </div>
      )
}
export default Person;