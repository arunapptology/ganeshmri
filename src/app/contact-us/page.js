import React from 'react'
import dynamic from 'next/dynamic'
import Loading from '../Loading';
import Contactform from '../components/contactform'
import Link from 'next/link';


const DynamicBranches = dynamic(() => import('../components/branchesList'), {
	ssr: false,
	loading: () => <Loading />,
  })


const page = () => {
  return (
    <>

<div id="breadcrumb" className="division">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className=" breadcrumb-holder">

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
              <Link href="/">Home</Link>

            
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
   
          <h4 className="h4-sm steelblue-color">Contact Us</h4>
        </div>
      </div>
    </div>

  </div>

</div>


<section id="contacts-2" className="wide-custom contacts-section division">
  <div className="container">
    <div className="row">

      <div className="col-lg-8">
      
        <h4 className="h4-md steelblue-color">
          Have a Question? We Review and Accept Patients Requests on 24/7 Basis.
        </h4>
       
        <p className="contact-notice">
          Give us a call or send an email. If you are traveling to our clinic
          for an appointment, confirm the correct street address with your
          appointment staff ahead of time to avoid frustration. For more help
          with specific addresses see below.
        </p>
     
   
        <h4 className="h4-md steelblue-color">
          Google Map
        </h4>
        
<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d111987.4330209816!2d77.04130159563456!3d28.70139203993343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d03aeed6a6a09%3A0x6a5894628e7ffd25!2sCS%2FOCF-7%2C%20Pocket%207%2C%20Sector%208B%2C%20Sector%208%2C%20Rohini%2C%20New%20Delhi%2C%20Delhi%2C%20110085!3m2!1d28.701417!2d77.12370299999999!5e0!3m2!1sen!2sin!4v1694764662218!5m2!1sen!2sin" 
width="800" height="450" allowfullscreen="" 
loading="lazy" 
referrerpolicy="no-referrer-when-downgrade">

</iframe>


<h4 className="h4-md steelblue-color">
          Our Other Branches
        </h4>

        <DynamicBranches />
    
      </div>

      <div className="col-lg-4">
    
    <div className='contact-detail'>

      <div id="txt-widget" className="sidebar-div mb-50"><h5 className="h5-sm steelblue-color">Location </h5>
      <div className="txt-widget-unit mb-15 clearfix d-flex align-items-center"><div className="">
        <div className="con-md-12"> 
         <div className="text">
          
          <p><b>Address : </b>109, Pocket A-1, Near Deepali Chowk, Sector 08, Rohini, New Delhi 110085</p>

          <p><b>Telephone : </b>011-47-444-444</p>

          <p><b>Telephone : </b>011-47-333-333</p>

          <p><b>Mobile : </b>+91-9811067479</p>
          <p><b>Mobile : </b>+91-9810183948</p>


          <p><b>Email : </b>info@ganeshdiagnostic.com</p>

          
          </div>
          </div>
          

         
         </div>
         </div>
         </div>

         </div>

    
<br />
    <Contactform/>
      </div>

    </div>

  </div>

</section>
<section className="bg-fixed banner-section division">
</section>

    </>
  )
}

export default page