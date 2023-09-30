"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useGetCategoryDataQuery } from '../redux/services/postApis';
import Loading from '../Loading';

const page = () => {
  const { data, error, isLoading } = useGetCategoryDataQuery('')

  const [username, setUsername] = useState('');
	const [mobile, setMobile] = useState('');
	const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');




  	// =====--contact api form --==== //
	const handleContactrForm = async (e) => {
		e.preventDefault()
		const res = await fetch('https://www.ganeshmri.com/admin/api/contactusform', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, mobile, comment }),
		})

		const data = await res.json()
		if (data) {
			setMessage("Data Submitted successfully");
		}
	}




  return (
    <>


      <div id="breadcrumb" className="division">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className=" breadcrumb-holder">


                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Our Blogs & Latest News</li>
                  </ol>
                </nav>


                <h4 className="h4-sm steelblue-color">Our Blogs & Latest News waefwqef</h4>

              </div>
            </div>
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
                            <h5 className="h5-sm steelblue-color">{items.txtName}</h5>
                            <span className="blue-color">Chief Medical Officer</span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className="all-doctors mb-40">
                <a href="all-doctors.html" className="btn btn-blue blue-hover">
                  Meet All Doctors
                </a>
              </div>

              </div>

              <div className='col-md-3'>

              <div id="hero-section-form" className="text-center  bg-white ">
								<div className="col-md-12 custom-form">
									<h4 className="h4-xs">Request a call back</h4>
								</div>

								<div method='post'
									className="mb-40 hero-form"


								>
									<div id="input-name" className="col-lg-12">
										<input type="text"
											onChange={(e) => setUsername(e.target.value)}
											name="name"
											className="form-control name"
											placeholder="Enter Your Name*" required="" />
									</div>



									<div id="input-phone" className="col-lg-12">
										<input type="tel" name="phone"
											onChange={(e) => setMobile(e.target.value)}
											className="form-control phone"
											placeholder="Enter Your Phone Number*" required="" />
									</div>


									<div id="input-comment" className="col-lg-12">
										<textarea type="tel" name="comment"
											onChange={(e) => setComment(e.target.value)}
											className="form-control comment"
											placeholder="Enter Your comment*" required="" />
									</div>



									<div className="col-lg-12 form-btn">
										<button
											onClick={handleContactrForm}
											className="btn custom-btn tra-white-hover ">
											Send Your Message
										</button>
									</div>

									<div className="col-lg-12 hero-form-msg text-center">
										<div className="sending-msg"><span className="loading">{message && message}</span></div>
									</div>

								</div>
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



