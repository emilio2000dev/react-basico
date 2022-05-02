import {PropTypes} from 'prop-types';


const Propiedades = function(props){
    console.log(props)
    return(
        <div>
            <h3>Propiedades {props.setProps}</h3>
            <ul>
            {
                props.arr.map((val, i)=><li key={i}>{val}</li>)
            } 
            </ul>
        </div>
    )
};

Propiedades.defaultProps = {
    setProps: "Propiedad Defecto",
    arr: [1,2,3,4,5,6,7,7,8,9,10,11,12,13,14]
}

//Para declarar varibles de manera estricta 
Propiedades.propTypes={
    numero: PropTypes.number
}

export default Propiedades;