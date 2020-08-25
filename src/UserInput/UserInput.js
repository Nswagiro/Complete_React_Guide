import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input 
                type="text" 
                onChange={props.change}
                value={props.User}
                style={{
                    padding: '15px',
                    border: '1px solid black',
                    borderRadius: '7px',
                    fontWeight: 'bolder',
                    fontSize: 'large'
                }}
            />
        </div>
    )
}
export default UserInput;