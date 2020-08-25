// state = {
  //   showNameHandler : false,
  //   Person :
  //   [
  //     { id : 'row1', name : 'Wilson', age : 24 },
  //     { id : 'row2', name : 'Ronnie', age : 20 },
  //     { id : 'row3', name : 'Roger', age : 20 },
  //     { id : 'row4', name : 'Henry', age : 23 },
  //     { id : 'row5', name : 'Angel', age : 25 },
  //   ],
  // }
  // nameChanged = () => {
  //   this.setState({
  //     showNameHandler : !this.state.showNameHandler
  //   })
  // }
  // nameChangedHandler = (event, id) => {
  //  const z = this.state.Person.findIndex(q => {
  //   return q.id === id;
  //  })
  //  const P = {
  //    ...this.state.Person[z]
  //  }
  //  P.name = event.target.value;
  //  const y = [...this.state.Person]
  //  y[z] = P;

  //  this.setState({Person : y})

  // }
  // deletePersonHandler = (personIndex) =>{
  //   const member = [...this.state.Person]
  //   member.pop ()
  //   this.setState({
  //     Person : member
  //   })
  // }
  //  render() {
  //    const totalAge = this.state.Person.reduce((total, sum) => total + sum.age ,0)
  //    let personalDetails = null;
  //    if (this.state.showNameHandler) {
  //      personalDetails= <div>
  //         {
  //           this.state.Person.map(persons => {
  //             return (
  //              <Person
  //                name = {persons.name}
  //                age = {persons.age}
  //                change = {(event) => this.nameChangedHandler(event, persons.id)}
  //                click = {(event)=>this.deletePersonHandler(event, persons.id)}
  //                addedAge ={this.totalAge}
  //                key = {this.id}
  //             >
  //               Hey I can also render
  //             </Person>
  //            )
  //           })
  //         }
  //        </div>
  //     }else{
  //        personalDetails = <span> 
  //        {
  //          totalAge
  //        }
  //       </span>
  //      }

  //    return(
  //      <div className="App">
  //        <button onClick = {this.nameChanged}>Change Names</button>
  //        {personalDetails}
  //       
  //       </div>
  //    )
  //  }



  // The other pat starts here

//   import './App.css';
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
//     showTask : true,
//     showPerson : true
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

//   showAttendantsHandler = () => {
//     this.setState({
//       showPerson: !this.state.Person
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
//       <div className="form">
//         <button onClick= {this.showTaskHandler} >TaskOwner</button>
//         <button onClick= {this.hideTask} >Show Tasks</button>
//         <button onClick={this.showAttendantsHandler}>Show Attendants</button>
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
//         <button onClick={this.hideTask}>Submit</button>
//       </div>
//     )
//   }
// }

// export default App;

// </head>
// <body>
// <div id="root">
// </div>
// <script type="text/es2015">
// function MyFunction() {
//   var myStr = "tutorialsplane";
//   var result = myStr.length;
//   return (
//     <p>Length of string "{myStr}" = {result}</p>
//   );
// }

// ReactDOM.render(
//   <MyFunction />,
//   document.getElementById('root')
// );
// </script>
// </body>
// </html>

// class LongText extends Component { 
//   state = { showAll: false }
//   showMore = () => this.setState({showAll: true}); 
//   showLess = () => this.setState({showAll: false});
//   render() {
//       const {content, limit} = this.props;
//       const {showAll} = this.state;
//       if(content.length<=limit) {
//           // there is nothing more to show
//           return <div>{content}<div>
//       }
//       if(showAll) {
//           // We show the extended text and a link to reduce it
//           return <div>
//               {content}
//               <a onClick={this.showLess}>Read less</a>
//           </div>
//       }
//       // In the final case, we show a text with ellipsis and a `Read more` button
//       const toShow = content.substring(0,limit)+"...";
//       return <div>
//           {toShow}
//           <span onClick={this.showMore}>Read more</a>
//       </div>
//   }
// }