"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux';

import Popup from './popup';

import Link from 'next/link';


import dynamic from "next/dynamic";

import Loading from '../Loading';

import  { getBlogData } from '../redux/blogSlice';

import Contactform from './contactform';


const Services = dynamic(() => import('./HomeComponents/Services'), {
	ssr: false,
	loading: () => <Loading />,
});






if (typeof window !== "undefined") {
	window.$ = window.jQuery = require("jquery");

}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
	ssr: false,
});





const body = () => {



	const blogdata = useSelector((state)=>{
		return state.blog.blogs;
	   });


	
	const dispatch = useDispatch();

	const [testimonial, setTestimonial] = useState(null);
	const [banner, setBanner] = useState(null);




	const fetchTestimonial = async () => {
		const response = await fetch('https://www.ganeshmri.com/admin/api/testimonial')
		const data = await response.json();
		setTestimonial(data);
	}


	const fetchBanner = async () => {
		const response = await fetch('https://www.ganeshmri.com/admin/api/banner')
		const data = await response.json();
		setBanner(data);
	}


	const handleBlog = () =>{

		dispatch(getBlogData())
	
	}



 


	useEffect(() => {

		fetchTestimonial()
		fetchBanner()
		handleBlog()

	}, [])



	const options = {
		margin: 10,
		responsiveClass: true,

		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			700: {
				items: 3,
			},
			1000: {
				items: 4,

			}
		},
	};



    const regex = /(<([^>]+)>)/gi


	return (
		<>
 
 
  
			<title>Ganesh MRI</title>
			<meta name="description" content="ewgfweg,ew gkjw we mgweg" />
			<link rel="canonical" href="wiqhfiowqhfewf" ></link>







			<section id="hero-4" className="bg-fixed hero-section division" style={{ height: "450px" }}>
				<div className="container">
					<div className="row d-flex align-items-center home-banner-sec">
						<div className="col-lg-8 col-xl-8">
							<div className="hero-txt mb-250">


								<h2 className="steelblue-color">Making Healthcare Facilities accessible to all, at reasonable rates</h2>


							</div>
						</div>


						<div className="col-lg-4 col-xl-4 banner-right-sec">


<Contactform />

						</div>


					</div>
				</div>
			</section>

			<section id="about-3" className="about-section division" >
				<div className="container" >
					<div className="abox-3-holder custom-strap" style={{ backgroundColor: "#f8f9fb" }}>
						<div className="row d-flex align-items-center" >




							<div className="container">


								<div className="row">

									<div className="col-sm-6 col-lg-3">

										<Link href={`https://www.google.com/maps/dir//CS%2FOCF-7,+Pocket+3,+Sector+8,+Rohini,+New+Delhi,+Delhi,+110085/@28.7011754,77.0406494,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d03aeed6a6a09:0x6a5894628e7ffd25!2m2!1d77.1230508!2d28.7012004?entry=ttu`}>
										<div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="0.6s">
										<div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="0.4s">

											<span className="flaticon-137-doctor blue-color"></span>

											<h5 className="h5-sm steelblue-color">Locate Centres</h5>

											{/* <p>Porta semper lacus cursus,
											</p> */}
										</div>
										</div>
									</Link>

									</div>
									<div className="col-sm-6 col-lg-3">

										<Link href={`/department/`}>
										<div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="0.6s">

											<span className="flaticon-076-microscope blue-color"></span>

											<h5 className="h5-sm steelblue-color">Find a Test</h5>

											{/* <p>Porta semper lacus cursus,
											</p> */}
										</div>
										</Link>
									</div>

									<div className="col-sm-6 col-lg-3">

										<Link href={`/health-packages`} >
										<div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="0.8s">

											<span className="flaticon-008-ambulance-6 blue-color"></span>

											<h5 className="h5-sm steelblue-color">Health Packages</h5>

											{/* <p>Porta semper lacus cursus,
											</p> */}
										</div>
										</Link>


									</div>

									<div className="col-sm-6 col-lg-3">
										<Link href={`/doctors`}><div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="1s">

											<span className="flaticon-083-stethoscope blue-color"></span>

											<h5 className="h5-sm steelblue-color">Talk to doctors</h5>

											{/* <p>Porta semper lacus cursus,
											</p> */}
										</div>
										</Link>
									</div>
								</div>
							</div>





						</div>
					</div>
				</div>
			</section>





 <Popup />



			<section id="video-1" className="wide-60 video-section division">
				<div className="container">
					<div className="row d-flex align-items-center">


						<div className="col-lg-7">
							<div className="txt-block pc-30 mb-40 wow fadeInUp" data-wow-delay="0.4s">


								<span className="section-id blue-color">Highest Quality Care</span>


								<h3 className="h3-md steelblue-color">Solving Healthcare Needs for All at Accessible Cost</h3>

								<div className="box-list">
									<div className="box-list-icon"><i className="fas fa-genderless"></i></div>
									<p>Ganesh MRI has been widely known for providing
										exceptional service and catering to the needs of patients since 2001, at the
										lowest price with FLAT 50% OFF on many tests.
									</p>
								</div>


								<div className="box-list">
									<div className="box-list-icon"><i className="fas fa-genderless"></i></div>
									<p>Not only have we set a satisfactory record for our patients, but also back our
										excellence by NABH and NABL Accreditations, by setting national and
										international standards of our equipments with high-tech and latest
										technology put into use.
									</p>
								</div>

								<div className="box-list">
									<div className="box-list-icon"><i className="fas fa-genderless"></i></div>
									<p>We also provide ease and comfort to our patients. By proposing 24*7*365
										Free Consultation (Talk to Doctor) service, making Patient Reports
										available on Digital Platform, Free Home Sample Collection and Free
										Ambulance Pick Up &amp; Drop Service.
									</p>
								</div>





								<div className="box-list">
									<div className="box-list-icon"><i className="fas fa-genderless"></i></div>
									<p>We are spread across Delhi NCR Region to incorporate healthcare needs of
										the society in totality in the regions:
									</p>
								</div>



								<div className="box-list">
									<div className="box-list-icon"><i className="fas fa-genderless"></i></div>
									<b>Yamuna Vihar, Mangol Puri, Budh Vihar, Model Town, Hari Nagar, Nagloi
										and Rohini
									</b>
								</div>

							</div>
						</div>



						<div className="col-lg-5">
							<div className="video-preview mb-40 text-center wow fadeInUp" data-wow-delay="0.6s">


								<a className="video-popup1" href="https://www.youtube.com/embed/SZEflIVnhH8">


									<div className="video-btn play-icon-blue">
										<div className="video-block-wrapper">
											<i className="fas fa-play"></i>
										</div>
									</div>


									<img className="img-fluid" src="images/video-1.png" alt="video-photo" />

								</a>

							</div>
						</div>


					</div>
				</div>
			</section>





			<section id="services-1"
				className="wide-30 services-section division custom-stripe "
			>
				<div className="container">


					<h3 className="h3-md steelblue-color">Health Packages</h3>

				{/*  */}
				<Services />

				</div>
			</section>





			<section id="banner-7" className="bg-fixed banner-section division">
				<div className="container white-color">
					<div className="row d-flex align-items-center">



						<div className="col-md-8 col-lg-6 col-xl-5">
							<div className="banner-txt wow fadeInUp" data-wow-delay="0.4s">


								<h2 className="h2-xs">High Precision and Accuracy in Diagnosis</h2>


								<p>At Ganesh MRI , we provide quality care to your
									patients, which is monitored and also improved over time, based our visitor
									feedback system.
									The quality of our healthcare is reflected by our accurate, reliable, along with
									timely results of diagnostic tests. This enables the clinicians and the patients to
									get to the correct diagnosis and initiate an appropriate treatment plan.
								</p>


								{/* <a href="#" className="btn btn-blue tra-white-hover mt-20">Free Consultation</a> */}

							</div>
						</div>


					</div>
				</div>
			</section>






			<section id="tabs-1" className="wide-100 tabs-section division">
				<div className="container">
					<div className="row">
						<div className="col-md-12">

							<div id="tabs-nav" className="list-group text-center">
								<ul className="nav nav-pills" id="pills-tab" role="tablist">

									<li className="nav-item icon-xs">
										<a className="nav-link active " id="tab1-list" data-toggle="pill" href="#tab-1"
											role="tab" aria-controls="tab-1" aria-selected="true">
											<span className="flaticon-083-stethoscope"></span> PET Scans
										</a>
									</li>

									<li className="nav-item icon-xs">
										<a className="nav-link" id="tab2-list" data-toggle="pill" href="#tab-2" role="tab"
											aria-controls="tab-2" aria-selected="false">
											<span className="flaticon-005-blood-donation-3"></span> CT Scans
										</a>
									</li>

									<li className="nav-item icon-xs">
										<a className="nav-link" id="tab3-list" data-toggle="pill" href="#tab-3" role="tab"
											aria-controls="tab-3" aria-selected="false">
											<span className="flaticon-031-scanner"></span> MRI
										</a>
									</li>

									<li className="nav-item icon-xs">
										<a className="nav-link" id="tab4-list" data-toggle="pill" href="#tab-4" role="tab"
											aria-controls="tab-4" aria-selected="false">
											<span className="flaticon-048-lungs"></span> X-Ray Diagnostics
										</a>
									</li>
								</ul>
							</div>

							<div className="tab-content" id="pills-tabContent">

								<div className="tab-pane fade show active" id="tab-1" role="tabpanel"
									aria-labelledby="tab1-list">
									<div className="row d-flex align-items-center">

										<div className="col-lg-4">
											<div className="tab-img">
												<img className="img-fluid"
													src={`${process.env.BASE_URL}/images/PET-Scan.webp`}
													alt="tab-image" />
											</div>
										</div>
										<div className="col-lg-8">
											<div className="txt-block pc-30">

												<h3 className="h3-md steelblue-color">PET Scans </h3>
												<p className="mb-30">Positron emission tomography (PET) is said to be a functional imaging technique
that will use radioactive substances called radiotracers to visualize and detect any
changes in the metabolic processes.
												</p>

												<p className="mb-30">Monitors body’s physiological activity that includes the following: Blood Flow,
Regional Chemical Composition, and Absorption. The different tracers will be
used for different imaging purposes; this also depends on the target process
within the body.</p>
												<p className="mb-30">Our Machine is the Gemini TF whole-body scanner which is the first commercially
available fully 3-dimensional PET scanner. It possesses TOF capability along with
conventional imaging capability.</p>


												{/* <a href="service-1.html" className="btn btn-blue blue-hover mt-30">View More
													Details</a> */}
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2-list">
									<div className="row d-flex align-items-center">

										<div className="col-lg-4">
											<div className="tab-imgs">
												<img className="img-fluid" src={`${process.env.BASE_URL}/images/ct-scan.webp`}
													alt="tab-image" />
											</div>
										</div>

										<div className="col-lg-8">
											<div className="txt-block pc-30">

												<h3 className="h3-md steelblue-color">CT Scans </h3>

												<p className="mb-30">

												Computerized tomography (CT) scan uses a combination/series of the X-ray
images from different angles of the body to create cross-sectional images (slices)
of your bones, the blood vessels and the soft tissues of the body.
</p>
<p>
Using our 128-slice CT scan machine which has 128 detectors, will allows to even
acquire multiple images in one rotation itself in a 3D format.
												</p>

												<div className="row">
													<div className="col-xl-6">

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-s">Conditions like- Cancer, Heart disease, Internal Injuries, Lung nodules and Liver
Masses can be diagnosed and effectiveness of their treatment can be monitored.</p>
														</div>  

													
													</div>
													<div className="col-xl-6">

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-s">Our machine also stands apart mainly for its usefulness in its application of CCTA
(Coronary computed tomography angiography)</p>
														</div>

														
													</div>
												</div>

												{/* <a href="service-2.html" className="btn btn-blue blue-hover mt-30">View More
													Details</a> */}
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab3-list">
									<div className="row d-flex align-items-center">

										<div className="col-lg-4">
											<div className="tab-img">
												<img className="img-fluid"
													src={`${process.env.BASE_URL}/images/mri-scanner.webp`}
													alt="tab-image" />
											</div>
										</div>

										<div className="col-lg-8">
											<div className="txt-block pc-30">

												<h3 className="h3-md steelblue-color">MRI Diagnostic</h3>

												<p className="mb-30">Magnetic resonance imaging (MRI) uses magnetic and radio waves to produce
3D images of structures of your body. This helps to detect any underlying
anomaly and pathology using our latest and tech machines (1.5T and 3T).
Conditions like- Stroke, Tumor, and Breast cancer, Joint disorders etc. can be
detected.
</p>
<p>
The 3T scanners are ideal for the brain, the vascular, the musculoskeletal and
the small bone imaging. Our 1.5 T and 3T MRI machines provide an
extremely clear picture and vivid images.
												</p>

												

												<a href="service-1.html" className="btn btn-blue blue-hover mt-30">View More
													Details</a>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab4-list">
									<div className="row d-flex align-items-center">

										<div className="col-lg-4">
											<div className="tab-img">
												<img className="img-fluid"
													src={`${process.env.BASE_URL}/images/x-ray.webp`}
													alt="tab-image" />
											</div>
										</div>

										<div className="col-lg-8">
											<div className="txt-block pc-30">

												<h3 className="h3-md steelblue-color">X-Ray Diagnostic</h3>

												<p className="mb-30">The X-Rays are defined as a form of the electromagnetic radiation.
												</p>



												<p className="mb-30">Most of them possess a shorter wavelength which ranges from 0.01 to 10
nanometers; this corresponds to the frequencies in the range of 3 × 1019 Hz to
3×1016 Hz.
												</p>



												<p className="mb-30">The structures are studied by the radiologist from the X-ray of different body
parts as per the density of the image and underlying pathologies are as follows-
												</p>




												<p className="mb-30">Pneumonia, Tuberculosis (Tb), Heart Failure, Cancer, Fluid around the Heart,
Kidney Disease etc
												</p>


												<p className="mb-30">Our Dr. F-X ray Machine gives an access to about a low dose radiation to all
patients of patients. For example- for chest X-ray around 5mAs
												</p>

												<p className="mb-30">It gives the patients a newer approach along with a better picture of their health.
It also produces the clear images of any difficult anatomies which includes the
lateral spine, lateral C spine etc.
												</p>

												{/* <a href="service-2.html" className="btn btn-blue blue-hover mt-30">View More
													Details</a> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>














			{/* ===testimonial== */}

			<section id="reviews-" className="bg-lightgrey ">
				<div className="container">

					<div className="row">
						<div className="col-lg-10 offset-lg-1">
							<h3 className="h3-md steelblue-color">What Our Patients Say </h3>

							
						</div>
					</div>


					<div className="row">
						{/* <div className="col-md-12">
							<OwlCarousel
								className="owl-theme"
								loop
								margin={10}
								autoplay
							>
								{


									testimonial && testimonial.map((itetmnl , i) => {

										return (

											<div key={i} className="item">
												<div className="review-2">
													<div className="review-txt text-center">
														<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>
														<div className="testimonial-avatar">
															<img src={itetmnl.imageurl + '/' + itetmnl.txtUserImage} alt="testimonial-avatar" />
														</div>
														<p>{itetmnl.txtDescription}
														</p>
														<div className="review-author">
															<h5 className="h5-sm">{itetmnl.txtUserName}</h5>

														</div>
													</div>
												</div>
											</div>
										)

									})

								}
							</OwlCarousel>



						</div> */}
					</div>


				</div>
			</section>



			<section id="blog-1" className="wide-60 blog-section division">
				<div className="container">



					<div className="row">
						<div className="col-lg-10 offset-lg-1 section-title">


							<h3 className="h3-md steelblue-color">Our Stories, Tips & Latest News</h3>


						</div>
					</div>



					<div className="row">

					{
  
  blogdata&&blogdata.map((items , i)=>{

	return (

<div key={i} className="col-lg-4">
							<div className="blog-post wow fadeInUp" data-wow-delay="0.4s">


								<div className="blog-post-img">
								<img className="img-fluid" 
                            src={items.imageurl + '/' + items.txtBnrDsktp}
                            alt={items.txtImageAltTag} />
								</div>


								<div className="blog-post-txt">
                                                    <h5 className="h5-xl steelblue-color"><Link href={`blogs/${items.txtURL}`}>{items.txtName.slice(0, 50)}</Link></h5>
                                                    <span>
                                                        {new Date(items.created_at).toDateString()}
                                                    </span>
                                                    <span> <b>Dr.Ravin Sharma</b></span>
                                                    <p>  {items.txtDescription.slice(0, 200).replace(regex, "")} ...
                                                    </p>
                                                </div>




							</div>
						</div>

	)
})
					}
						

					
  
					</div>


				</div>
			</section>

		</>
	)
}
export default body


