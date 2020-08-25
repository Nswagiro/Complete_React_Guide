import React from 'react';

const TaskOwner = (props) =>{
    const styles ={
        color: 'white'
    }
    return (
        <div className="task">
         <h4 style={styles}>
             I am the task Owner
         </h4>
         <input type="text" value={ props.name1 } onChange={props.change}  />
         <input type="text" value={props.tasks} onChange={props.changed}  />
        </div>
      
    )
}

export default TaskOwner; 