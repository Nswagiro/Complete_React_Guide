import React from 'react';

const   Validation =(props)=>{
    return(
        <div>
            {
                props.textLength < 5 ?
                <p>Text too short</p>
                :
                <div>
                    <p>Text too long</p>
                </div>
            }
        </div>
    )
}
export default Validation;