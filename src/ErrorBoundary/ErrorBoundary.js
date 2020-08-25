import React, { Component } from 'react';

class ErrorBoundary extends Component{
    state={
        errors : true,
        errorMessage:' '
    }
    componentDidCatch(error, errorInfo){
        this.setState({
            errors:error,
            errorMessage:errorInfo
        })
    }
    render(){
        if(this.state.errors){
            return (
                <h1>{this.state.errorMessage}</h1>
            )
         } else {
             return this.state.errorMessage
        }
    }
}
export default ErrorBoundary;