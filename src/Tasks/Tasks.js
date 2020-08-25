import React from 'react';


const Tasks = (props) => {
    return (
        <div>
            <input type="text" />
            {props.children}
        </div>
    )
}

export default Tasks;