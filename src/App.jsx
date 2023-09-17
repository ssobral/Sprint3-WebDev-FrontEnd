import { } from 'react';
import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import Footer from './Footer';
import Armario from './Armario';
import Contato from './Contato';
import Cadastro from './Cadastro';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Armario" element={<Armario/>}/>
      <Route path="/Contato" element={<Contato/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cadastro" element={<Cadastro/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
