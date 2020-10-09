import React from "react";
import {Button} from "react-bootstrap";

class Chrono extends React.Component{
  
    state={
        seconde:0,
        minute:0,
        heure:0
    }
 

    render(){
 
       const {seconde}=this.state;
        const {minute}=this.state;
        const {heure}=this.state;
        return (
            <div>
            <h1> Chrnonomère </h1>
            <Button variant="secondary">Start</Button>
             <h3> heure :{heure}  </h3>
             <h3> Minute : {minute}</h3>
             <h3> Seconde :{seconde} </h3>

            <Button variant="secondary">Reset </Button>
            </div>

        )
    }
     incrementer=()=>{
    this.timeS=setInterval(()=>this.setState({seconde:this.state.seconde+1}),1000);
}
    
    
}
export default Chrono;