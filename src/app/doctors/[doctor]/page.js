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
                <li className="breadcrumb-item">
                  <a href="all-doctors.html">Our Doctors</a>
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
              src="images/doctor-5.jpg"
              alt="doctor-foto"
            />
  
            <p className="mt-30">
              Etiam sapien sem magna at vitae pulvinar congue augue egestas
              pretium neque id viverra suscipit egestas magna porta ratione,
              mollis risus lectus porta rutrum arcu aenean
            </p>
 
            <div className="doctor-contacts">
              <h4 className="h4-xs">
                <i className="fas fa-mobile-alt" /> 1-(800)-569-7890
              </h4>
              <h4 className="h4-xs blue-color">
                <i className="fas fa-envelope-open-text" />
                <a href="mailto:yourdomain@mail.com" className="blue-color">
                  hello@yourdomain.com
                </a>
              </h4>
            </div>
      
            <a
              href="appointment.html"
              className="btn btn-md btn-blue blue-hover"
            >
              Book an Appointment
            </a>
        
            <a
              href="timetable.html"
              className="btn btn-md btn-tra-grey grey-hover"
            >
              View Timetable
            </a>
          </div>
        </div>
     
        <div className="col-md-6 col-xl-6 offset-xl-1">
          <div className="doctor-bio">
      
            <h2 className="h2-sm blue-color">Dr. Robert Peterson</h2>
            <h5 className="h5-lg blue-color">
              Neurologist / Epilepsy Specialist / Cardiologist
            </h5>
      
            <p>
              Etiam sapien sem magna at vitae pulvinar congue augue egestas
              pretium neque id viverra suscipit egestas magna porta ratione,
              mollis risus lectus porta rutrum arcu aenean primis in augue
              luctus neque purus ipsum neque dolor primis suscipit in magna
              dignissim, porttitor hendrerit diam
            </p>
         
            <p>
              In at mauris vel nisl convallis porta at vitae dui. Nam lacus
              ligula, vulputate molestie bibendum quis, aliquet elementum massa.
              Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu cursus est.
              Fusce non nulla vitae massa placerat vulputate vel a purus. Aliqum
              mullam blandit tempor sapien
            </p>
        
            <h5 className="h5-md blue-color">Education + Trainings</h5>
    
            <p>
              Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
              justo. Velna vitae auctor congue magna nihil impedit ligula risus.
              Mauris donec ociis et magnis sapien etiam sapien sem sagittis
              congue tempor gravida
            </p>
           
            <div className="box-list m-top-15">
              <div className="box-list-icon blue-color">
                <i className="fas fa-angle-double-right" />
              </div>
              <p className="p-sm">
                Nemo ipsam egestas volute and turpis dolores quaerat
              </p>
            </div>
          
            <div className="box-list">
              <div className="box-list-icon blue-color">
                <i className="fas fa-angle-double-right" />
              </div>
              <p className="p-sm">
                Magna luctus tempor augue vitae laoreet augue in cubilia risus
                auctor tempus dolor felis lacinia risus auctor id viverra dolor
              </p>
            </div>
        
            <div className="box-list">
              <div className="box-list-icon blue-color">
                <i className="fas fa-angle-double-right" />
              </div>
              <p className="p-sm">
                Ligula risus auctor tempus dolor feugiat, felis lacinia risus
                interdum auctor id viverra dolor iaculis luctus
              </p>
            </div>
          
            <div className="box-list">
              <div className="box-list-icon blue-color">
                <i className="fas fa-angle-double-right" />
              </div>
              <p className="p-sm">
                An enim nullam tempor at pretium purus blandit
              </p>
            </div>
  
          </div>
        </div>

      </div>

    </div>

  </section>

</>
  )
}

export default page