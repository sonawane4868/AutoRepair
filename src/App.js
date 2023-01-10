import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Mynavbar from './pages/Mynavbar/Mynavbar';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Logged from './pages/Logged/Logged';
import Payment from './pages/Payment/Payment';
import Thankyou from './pages/thankyou/Thankyou';
function App() {
  return (
    
   <BrowserRouter>
   <Mynavbar/>
   
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Footer' element={<Footer/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Signin' element={<Signin/>}/>
    <Route path='Signup' element={<Signup/>}/>
    <Route path='/logged' element={<Logged/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/thankyou' element={<Thankyou/>}/>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
