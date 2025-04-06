import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './assets/Home';
import About from './assets/About';
import Gallery from './assets/Gallery';
import Services from './assets/Services';
import Contactus from './assets/Contactus';
import Footer from './assets/Footer';
import Cart from './assets/Cart';

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
      <Route path='/Cart' element={<Cart/>}/>


    </Routes>
    <Footer/>
    </>
  )
}

export default App
