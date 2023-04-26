import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom';
import Weather1 from './Weather1';

function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-dark bg-warning">
    <ul className="navbar-nav">    
      <li className="nav-item active">
      <Link to="/Weather1">Weather1</Link>         
      </li> 
      </ul>
    </nav>
    <Routes>

      <Route path="Weather1" element={<Weather1/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
