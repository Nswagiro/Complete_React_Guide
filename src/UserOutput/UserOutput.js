import React from 'react';


const UserOutput = (props) => {
    return (
        <div>
            <p>Hey thea!</p>
            <p>What can I do for you !</p>
            <span 
                onClick={props.click}>
                <strong>
                    UserName : {props.UserName}
                </strong>
            </span>

        </div>
    )
}
export default UserOutput;