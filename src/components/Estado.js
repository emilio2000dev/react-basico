
import React, {Component} from 'react';

function EstadoHijo(props){
    return(
        <div>
            <h5>{props.contador}</h5>
        </div>
    )   
}

export default class Estado extends Component{
    constructor(props){
        super(props);

        this.state={
            contador:0
        }

        setInterval(()=>{
            this.setState({
                contador: this.state.contador+1
            })
        },1000)
    }

    render(){
        return(

            <div>
                <h4>{this.state.contador}</h4>
                <EstadoHijo contador={this.state.contador}/>
            </div>
        );
    }

}