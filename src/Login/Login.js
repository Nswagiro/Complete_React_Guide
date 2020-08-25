import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Login extends React.Component{
   
    }
    render(){
        return(
            <div className='form'>
                <h3> Login Authentication</h3>
                <div className='logo'>logo</div>
             <div className='log'>
             <TextField 
                variant='outlined'
                color ='primary'
                label='Username'
                />
              
                <br/ >
                   <TextField
                variant='outlined'
                color ='primary'
                label='Password'
              
                /> 
                <br/ >
                
            
              
                <Button variant='contained'
                 color ='secondary'> Login</Button>
                

             </div>
            
             </div>
        )
    }
}
export default Login;