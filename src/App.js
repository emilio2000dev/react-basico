import logo from './logo.svg';
import './App.css';

import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';

function App() {
  let nombre = "Emilio";
  let apellido = "Senguana";
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{nombre} {apellido}</h1>
          <hr/> 
        </section>              
        <section>
          <Componente/>
          <Propiedades apellido={apellido} numero={0} numberUno="1" numberDos="2" numberTres="3" numberCuatro="4"/>
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>       
        </section>
      </header>
      
    </div>
  );
}

export default App;
