import React from 'react';

const Char =(props)=>{
    const styl = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }
    return(
        <div style={styl} onClick={props.clicked}>
           {props.character}
        </div>
    )
}
export default Char;