"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useGetCategoryDataQuery } from '../redux/services/postApis';
import Loading from '../Loading';

import Contactform from '../components/contactform';

const page = () => {
  const { data, error, isLoading } = useGetCategoryDataQuery('')

  return (
    <>


      <div id="breadcrumb" className="division">
        <div className="container">
       
              <div className=" breadcrumb-holder">


                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Department</li>
                  </ol>
                </nav>


                <h4 className="h4-sm steelblue-color">Departments</h4>

              </div>
            
        </div>
      </div>


      <section id="doctors-1" className=" doctors-section division">


        <div className="container">


          <div className="row">




            <div className="col-lg-10 offset-lg-1 section-title">
              {/* Title 	*/}
              {/* <h3 className="h3-md steelblue-color">Our Medical Specialists</h3>
*/}

            </div>


            <div className="row">
              <div className="col-md-9 text-center">
                <div className='row'>
                  {isLoading ? <Loading /> :
                    data && data.map((items) => (
                      <div className="col-md-6 col-lg-4">
                        <div className="doctor-1">
                          <div className="hover-overlay text-center">
                            <img
                              className="img-fluid"
                              
                              src={`https://www.sanbio.nl/media/catalog/product/placeholder/default/placeholder-image-600p.webp`}
                              alt={items.txtImageAltTag}
                            />
                            <div className="item-overlay" />
                            <div className="profile-link">
                              <Link
                                className="btn btn-sm btn-tra-white black-hover"
                                href={`/department/${items.txtURL}`}
                                title=""
                                scroll={false}
                              >
                                View More Info
                              </Link>
                            </div>
                          </div>
                          <div className="doctor-meta">
                          <Link
                                className="btn btn-sm btn-tra-white black-hover"
                                href={`/department/${items.txtURL}`}
                                title=""
                                scroll={false}
                              >
                            <h5 className="h5-sm steelblue-color">{items.txtName}</h5>
                            <span className="blue-color">{items.txtShortDescription}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className="all-doctors mb-40">
                <a href="all-doctors.html" className="btn btn-blue blue-hover">
                 Show more
                </a>
              </div>

              </div>

              <div className='col-md-3'>

           <Contactform />
              </div>

              
            </div>



          </div>
        </div>
      </section>
    </>

  )
}


  
export default page



