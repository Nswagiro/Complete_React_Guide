import React from 'react';
  import Persons from './Persons/Persons';
  class Any extends React.Component{
    state={

      persons:[
      {id:'01', name:'Henry', age:12},
      {id:'02', name:'ryan', age:43},
      {id:'03', name:'rayton', age:51}
      ]
    }
    nameChanged=(event, id)=>{
      const personIndex = this.state.persons.findIndex(p=>{
        return p.id===id;
        })
        const y= {...this.state.persons[personIndex]}
        y.name = event.target.value
        const b = [...this.state.persons]
        b [personIndex] = y
        this.setState({
          persons : b 
        })
      }
      buttonHandler=(newName)=>{
        this.setState({
          persons:[
            {id:'01', name:newName, age:12},
            {id:'02', name:'ryan', age:43},
            {id:'03', name:'rayton', age:51}
            ]
        });
      }
      
       render(){
         
      let Button = []
      this.state.persons.map(p =>{
       return(
         !p.name? Button.push('button01'): Button.push('button02')
       )
       })

     return(
          <div>
            
            <button onClick={()=>this.buttonHandler('ronah')
          }
          className={Button.join(' ')}
          >Toggle</button>
             {
            this.state.persons.map(( member , id)=>{
              return(
                <Persons 
                  name={member.name}
                  age={member.age}
                  key={member.id}
                  changed={(event)=>this.nameChanged(event ,member.id)}
                  
                />
                
              )
            })
          }
        </div>
      )
    }
  }
  export default Any;