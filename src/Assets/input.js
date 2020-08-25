// import React, { Component } from 'react';
// import './App.css';
// import Attendants from './Attendants/Attendants';
// import Tasks from './Tasks/Tasks';
// import TaskOwner from './TaskManager/TaskOwner';

// class App extends Component {
//   state = {
//     name : '',
//     task : '',
//     Person : [
//       {id:1, name: 'Willy'},
//       {id:2, name: 'Ronnie'},
//       {id:3, name: 'Roger'},
//       {id:4, name: 'Angel'},
//       {id:5, name: 'Henry'}
//     ],
//     showTask : true
//   }

//   showTaskHandler = () => {
//     this.setState({
//       showTask : true
//     })
//   }

//   hideTask = () => {
//     this.setState({
//       showTask : false
//     })
//   }

//   changeEventHandler = (event) => {
//     this.setState ({
//       name : event.target.value
//     })
//   }

//   taskChangedHandler = (event) => {
//     this.setState ({
//       task : event.target.value
//     })
//   }

//   render(){
//     return(
//       <div>
//         <button onClick= {this.showTaskHandler} >TaskOwner</button>
//         <button onClick= {this.hideTask} >Show Tasks</button>
//         <br />
//         {
//           this.state.showTask ?
//           <TaskOwner 
//           name={this.state.name}
//           tasks={this.state.task}
//           change = {this.changeEventHandler}
//           changed = {this.taskChangedHandler}
//         />
//         :
//         <div>
//           <Tasks>
//             <p>{this.state.name}</p>
//             <p>{this.state.task}</p>
//           </Tasks>
//           <div>
//          {
//            this.state.Person.map(P =>{
//              return (
//                <Attendants 
//                  name = {P.name}
//                 />
//              )
//            })
//          }
//        </div>
//         </div>
//         }
//       </div>
//     )
//   }
// }

// export default App;