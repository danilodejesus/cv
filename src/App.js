import yo from './yo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='text'>
          HELLO, I AM
          <br/>
          <strong>Danilo Viacava</strong>
          <ul>
            <li>
              <p>
                Frontend Developer
              </p>
            </li>
            <li>
              <p>
              Drone Pilot
              </p>
            </li>
            <li>
              <p>
                New in Denmark
              </p>
            </li>
          </ul>
        </p>
        <img src={yo} width={300}/>
      </header>
    </div>
  );
}

export default App;
