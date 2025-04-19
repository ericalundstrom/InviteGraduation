import logo from './logo.svg';
import { handleYes, handleNo } from './functions.js';
import './App.css';

function App() {
  return (
    <>
      <section id='title'>
        <h2> You're invited to my</h2>
        <h1>GRADUATION <br></br> PARTY </h1>
      </section>

      <section id='info'>
        <div className='infoBox'>
            <h3>When?</h3>
            <p>14th of June 2025</p>
        </div>
        <div className='infoBox'>
            <h3>Where?</h3>
            <p>Vinbergs stationshus</p>
        </div>
      </section>

      <section id='YesOrNo'>
        <h2>Can you make it?</h2>
        <button onClick={handleYes}>Yes of course!</button>
<button onClick={handleNo}>No unfortunately</button>
      </section>
    </>
    
  );
}

export default App;
