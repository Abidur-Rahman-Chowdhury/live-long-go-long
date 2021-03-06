
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SignUp from './Components/Signup/SignUp'
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import CheckOut from './Components/CheckOut/CheckOut';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <CheckOut></CheckOut>
          </RequiredAuth>
        }></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
     <Footer></Footer>
    </div>
  );
}

export default App;
