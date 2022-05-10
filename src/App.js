import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

// Importando páginas
import Home from './pages/home/home.page';
import LoadSends from './pages/loads/client.page';
import LoadStatus from './pages/loads/status.page';
import Sends from './pages/sends/sends.page';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/sends" element={ <LoadSends /> } />
              <Route path="/sends/status" element={ <LoadStatus /> } />
              <Route path="/sends/create" element={ <Sends /> } />
            </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
