import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import ServiceDetail from './pages/ServiceDetails/ServiceDetail';
import NotFound from './pages/Shared/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import Registation from './pages/Login/Registation/Registation';
import CheckOut from './pages/CheckOut/CheckOut';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registation></Registation>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
