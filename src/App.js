import { useSearchParams } from 'react-router-dom';
import './App.css';
import Developer from './core/developer/pages/Developer';
import Home from './core/home/pages/home';
import WareHouse from './core/warehouse/pages/Warehouse';

function App() {

  const [search] = useSearchParams();
  const developer = search.get('cook')
  const warehouse = search.get('warehouse')

  return (
    <div className="Aplication">
      <Home isHome={false}></Home>
      <Developer cook={developer}></Developer>
      <WareHouse warehouse={warehouse}></WareHouse>
    </div>
  );
}

export default App;
