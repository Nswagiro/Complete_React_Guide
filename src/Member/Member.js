import React from 'react';
import Persons from '../Persons/Persons'

const Member =(props)=>{
    return(
        <div>
            {
            props.Member.map(p =>{
                    return(
                      <Persons
                       name = {p.name}
                       age = {p.age}
                       key ={p.id}
                       change={(event)=>props.changed(event, p.id)}
                       click = {()=>props.clicked()}
                      /> 
                    )
                  })
            }
        </div>
    )
}
export default Member;