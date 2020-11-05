import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary" >
          <div className="container"></div>
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </Navbar>
        <Menu />

      
    </div>
  );
}

export default App;
