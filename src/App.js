import './App.css';
import Home from '../src/components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

function App() {
  return (
    <div>
      <Navbar />
     <Home />
     <Products />
    </div>
  );
}

export default App;
