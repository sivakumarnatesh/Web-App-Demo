import './App.css';
import Home from '../src/components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
     <Home />
     <Products />
     <Footer />
    </div>
  );
}

export default App;
