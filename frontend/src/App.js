import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen';
import data from './data';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">amazona</Link>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen/>}></Route>
          <Route path="/" element={<HomeScreen/>}></Route>
          {/* <Route></Route>
          <Route></Route>
          <Route></Route> */}
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
