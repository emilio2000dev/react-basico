import React, {Component} from 'react';

function Login(){
    return(
        <div>
            Login
        </div>
    )
}

function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    )
}
export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);

        this.state={
            session:true
        }
    }
    render(){
        return(
            <div>
                Renderizado Condicional
                {
                    this.state.session?<Login/>: <Logout/>
                }
                
               
            </div>
        )
    }
}