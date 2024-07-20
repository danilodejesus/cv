import './App.css';
import Developer from './core/developer/pages/Developer';
import Home from './core/home/pages/home';

function App(props) {
  
  return (
    <div className="App">
      <Home></Home>
      <Developer></Developer>
    </div>
  );
}

export default App;
