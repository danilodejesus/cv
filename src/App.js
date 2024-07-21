import { useSearchParams } from 'react-router-dom';
import './App.css';
import Developer from './core/developer/pages/Developer';
import Home from './core/home/pages/home';

function App() {

  const [search] = useSearchParams();
  const developer = search.get('cook')

  return (
    <div className="Aplication">
      <Home isHome={developer}></Home>
      <Developer cook={developer}></Developer>
    </div>
  );
}

export default App;
