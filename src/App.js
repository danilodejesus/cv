import { useSearchParams } from 'react-router-dom';
import './App.css';
import Home from './core/home/pages/home';

function App() {

  const [search] = useSearchParams();
  const developer = search.get('cook')
  const warehouse = search.get('warehouse')

  return (
    <div className="Aplication">
      <Home isHome={false}></Home>
      {/* <Developer cook={developer}></Developer>
      <WareHouse warehouse={warehouse}></WareHouse> */}
    </div>
  );
}

export default App;
