import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />}></Route>
              <Route path="/" element={<HomeScreen />}></Route>
              {/* <Route></Route>
          <Route></Route>
          <Route></Route> */}
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All right reserved.</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
