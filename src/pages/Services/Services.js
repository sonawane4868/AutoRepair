import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './services.css';
import { useNavigate } from 'react-router-dom';
export default function Services() {
  const navigate=useNavigate();

  const directt=(e)=>{
    navigate('/logged')
  }
  return (

    <div className='container-fluid bg-dark py-5'>
      <h1 className='text-white text-center mt-5 mb-3'>SERVICES</h1>
      <div className='row text-center mx-auto'>
      <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='bg-dark border  rounded-2 '>
        <Card.Title className='text-white cardtitle my-4'>1st Service</Card.Title>
        <Card.Text className='text-white w-auto cardtext my-4'>
          1st service includes the complete checkup of vechile and oil 
          change fliter change if required and give complete assurance of vechile.  
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4 ' onClick={directt}>RS.250</Button>
      </Card.Body>
    </Card>
        </div>
        
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='bg-dark border  rounded-2 '>
        <Card.Title className='text-white cardtitle my-4'>2nd Service</Card.Title>
        <Card.Text className='text-white w-auto cardtext my-4'>
        2nd service includes the complete checkup of vechile and oil 
          change fliter change if required and give complete assurance of vechile.
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4' onClick={directt}>RS.550</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='bg-dark border  rounded-2 '>
        <Card.Title className='text-white cardtitle my-4'>3rd Service</Card.Title>
        <Card.Text className='text-white w-auto cardtext my-4'>
        3rd service includes the complete checkup of vechile and oil 
          change fliter change if required and give complete assurance of vechile.
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4' onClick={directt}>RS.800</Button>
      </Card.Body>
    </Card>
        </div>
        </div>
        <div className='row text-center mx-auto'>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='bg-dark border  rounded-2 '>
        <Card.Title className='text-white cardtitle my-4'>Full Service</Card.Title>
        <Card.Text className='text-white w-auto cardtext my-4'>
        Full service includes the complete checkup of vechile,free washing and oil 
          change fliter change if required and give complete assurance of vechile.
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4' onClick={directt}>RS.1200</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='bg-dark border  rounded-2 '>
        <Card.Title className='text-white cardtitle my-4'>Washing</Card.Title>
        <Card.Text className='text-white w-auto cardtext my-4'>
          washing includes the complete cleaning of interior and exterior of vechile
          detail washing is main for interior and we give a complete assurance of washing service of us.
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4' onClick={directt}>RS.300</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='bg-dark border  rounded-2 '>
        <Card.Title className='text-white cardtitle my-4'>Denting</Card.Title>
        <Card.Text className='text-white w-auto cardtext my-4'>
        Denting includes the complete wear and taer of vechile repairing the dent on the body of car.
        with proper tools and care has been taken ,we give complete assurance of denting service of us.
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4' onClick={directt}>RS.800</Button>
      </Card.Body>
    </Card>
        </div>
        </div>
        <div className='row text-center mx-auto'>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='bg-dark border  rounded-2 '>
        <Card.Title className='text-white cardtitle my-4'>Coloring</Card.Title>
        <Card.Text className='text-white w-auto cardtext my-4'>
        Coloring includes the complete finished  and set color on car body.
        with proper tools and care has been taken ,we give complete assurance of coloring service of us.
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4' onClick={directt}>RS.3000</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='bg-dark border  rounded-2 '>
        <Card.Title className='text-white cardtitle my-4'>PFF</Card.Title>
        <Card.Text className='text-white w-auto cardtextmy-4'>
        PPF includes the complete finished  and set ppf material  on car body.
        with proper tools and care has been taken ,we give complete assurance of PPF service of us.
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4' onClick={directt}>RS.3500</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='bg-dark border  rounded-2 '>
        <Card.Title className='text-white cardtitle my-4'>Custom</Card.Title>
        <Card.Text className='text-white w-auto cardtext my-4'>
          Custom includes the complete repair of vechile with proper care and in these service we repair all the 
          vechile with full type of service of us.
        </Card.Text>
        <Button variant="primary" className='w-50  mt-4' onClick={directt}>RS.500</Button>
      </Card.Body>
    </Card>
        </div>
        </div>
        <div className='row text-center mx-auto'>
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='bg-dark border  rounded-2 '>
        <Card.Title className='text-white cardtitle my-4'>Other</Card.Title>
        <Card.Text className='text-white w-auto cardtext my-4'>
         Other includes all types of service and implement the service which customer choose and all the repair
        is done with the care and we assure the service which we provides to you. 
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4' onClick={directt}>RS.500</Button>
      </Card.Body>
    </Card>
        </div>
        </div>

      </div>
    
  )
}
