import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
 const navigate=useNavigate();

 const pre=()=>{
  navigate('/Services')
 }
  return (
<div className='row homebg '>
 
    <div className='jumbotron jumbotron-fluid content  bg-transparent text-center mx-auto '>
    <div className= "ms-0 gear d-none d-md-block">
    <img src='./gear1.png' data-aos="zoom-in" data-aos-delay="2500" className='img-fluid img-responsive  gear1 d-none d-md-block'/>
    <img src='./gear2.png' data-aos="fade-right" data-aos-delay="2800" className='img-fluid img-responsive  gear2 d-none d-md-block'/>
    <img src='./gear3.png' data-aos="fade-right" data-aos-delay="3000" className='img-fluid img-responsive  gear3 d-none d-md-block'/>
    </div>
    <img src='./home2.png' data-aos="fade-right" data-aos-delay="3000"  data-aos-duration="1000" className='img-fluid img-responsive home2 d-none d-md-block'/>
   
    <img src='./home4.png'data-aos="fade-left" data-aos-delay="3000"  data-aos-duration="1000" className='img-fluid img-responsive  home4 d-none d-md-block'/>
    
    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto content'>
    
      <p className='display-4 text-center font-weight-bold font mx-auto ' data-aos="zoom-in" data-aos-delay="1650">AUTO REPAIR</p>
      <p className='lead text-center text-white mx-auto' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="1800"
     data-aos-offset="0">Always there for emergency!</p>
     
      <button onClick={pre} className='btn btn-primary text-center my-5 py-3  px-2'data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="1900"
     data-aos-offset="0" >View our gallery</button>
    </div>
  </div>
  </div>
    )
}
