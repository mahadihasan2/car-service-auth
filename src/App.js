import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import ServiceDetail from './pages/ServiceDetails/ServiceDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
