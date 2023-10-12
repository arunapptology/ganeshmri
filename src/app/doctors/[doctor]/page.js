"use client"
import Link from 'next/link'
import React from 'react'

const page = ({params}) => {
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
                  Doctor Page
                </li>
              </ol>
            </nav>

            <h4 className="h4-sm steelblue-color">Doctor Profile</h4>
          </div>
        </div>
      </div>

    </div>

  </div>

  <section
    id="doctor-2-details"
    className="wide-70 doctor-details-section division"
  >
    <div className="container">
      <div className="row">
      
        <div className="col-md-5 col-xl-5">
          <div className="doctor-photo mb-30 text-center">
         
            <img
              className="img-fluid"
              src={`${process.env.BASE_URL}images/ravin.jpg`}
              alt="doctor-foto"
            />
     
 
            <div className="doctor-contacts">
              <h4 className="h4-xs">
                <i className="fas fa-mobile-alt" /> +91-9811067479
              </h4>
              <h4 className="h4-xs blue-color">
                <i className="fas fa-envelope-open-text" />
                <Link href="mailto:info@ganeshdiagnostic.com" className="blue-color">
                info@ganeshdiagnostic.com
                </Link>
              </h4>
            </div>
       
            <Link
              href="https://api.whatsapp.com/send?phone=9811067479&text=ganeshmri"
              className="btn btn-md btn-blue blue-hover"
            >
            Whats App
            </Link>
        
            {/* <a
              href="timetable.html"
              className="btn btn-md btn-tra-grey grey-hover"
            >
              View Timetable
            </a> */}
          </div>
        </div>
     
        <div className="col-md-6 col-xl-6 offset-xl-1">
          <div className="doctor-bio">
      
            <h2 className="h2-sm blue-color">Dr. Ravin Sharma</h2>
            <h5 className="h5-lg blue-color">
            MBBS, MD Senior Consultant Radiologist (Director)
            </h5>
      
            <p>
            Dr. Ravin Sharma is a Consultant Radiologist at Ganesh Diagnostic & Imaging Centre Pvt. Ltd. 
            He started his career as a Consultant Radiologist in 2001 with 
            Safdarjung Hospital and Hindu Rao Hospital, Delhi and incorporated 
            Ganesh Diagnostic & Imaging Centre Pvt. Ltd in 2001 with a small 
            portable ultrasound machine and attended several audits of NABH & NABL , 
            comes with a rich experience of more than 22 years in the field.
            </p>
         
         
        
         
  
          </div>
        </div>

      </div>

    </div>

  </section>

</>
  )
}

export default page