import React from "react";
import {Button} from "react-bootstrap";



class Chrono extends React.Component{
  
    state={
        seconde:0,
        minute:0,
        heure:0,
        etat:false
    }
    styleChrono={
        position:"absolute",  
        left: "480px",
        top:" 350px",
        color:"white"
    }

 

    render(){
      if(this.state.seconde>=60){
          this.setState({minute:this.state.minute+1});
          this.setState({seconde:0})
      }
      if(this.state.minute>=60){
          this.setState({heure:this.state.heure+1});
          this.setState({minute:0});
      }
    
        return (
            <div style={this.styleChrono}>
            <h2> Mon Chronomètre </h2>
            <h3> {(this.state.heure<9)?(`0${this.state.heure}`):(this.state.heure) }:{(this.state.minute<9)?(`0${this.state.minute}`):(this.state.minute) }:{(this.state.seconde<9)?(`0${this.state.seconde}`):(this.state.seconde) } </h3>
          
            {(!this.state.etat)?<Button style={{marginRight:"10px"}} variant="success" onClick={this.incrementer}>Start</Button>:<Button style={{marginRight:"10px"}} variant="danger" onClick={this.arreter}>Stop </Button>  }   

                
               
            
            
            <Button variant="secondary" onClick={this.reset}>Reset </Button>
            </div>

        )
    }
     incrementer=()=>{
    this.id=setInterval(()=>this.setState({seconde:this.state.seconde+1}),1000);
    this.setState({etat:true});
     
}
arreter=()=>{
    clearInterval(this.id);
    this.setState({etat:false});
}
reset=()=>{
    this.setState({seconde:0});
    this.setState({minute:0});
    this.setState({heure:0});
}


    
    
}
export default Chrono;