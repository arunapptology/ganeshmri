"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
const footers = () => {

	const [branches, fetchBranches] = useState();



	const fetchbranches = async () => {
		const response = await fetch('https://admin.ganeshparamedicalcollege.com/api/branches')
		const data = await response.json();
		fetchBranches(data);
	}


	useEffect(() => {
		fetchbranches()
	}, [])
	const branchName = branches&&branches.map( (items , i)=> {

		  return (
  
			<Link key={i} href={`/branches/${items.txtURL}`}>
			<p>{items.txtName}</p>
			</Link>
		  )

	})

	
	return (
		<>
			<footer id="footer-3" className="wide-40 footer division">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="footer-info mb-40">
								<img src={`${process.env.BASE_URL}images/footer-logo.png`} width="180" height="60"
									alt="footer-logo" />

								<p className="p-sm mt-20">
								At Ganesh MRI , we provide quality care to your
patients, which is monitored and also improved over time, based our visitor
feedback system.
The quality of our healthcare is reflected by our accurate, reliable, along with
timely results of diagnostic tests. This enables the clinicians and the patients to
get to the correct diagnosis and initiate an appropriate treatment plan.
							
								</p>

								<div className="footer-socials-links mt-20">
									<ul className="foo-socials text-center clearfix">
										<li><a href="#" className="ico-facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
										<li><a href="#" className="ico-twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
										<li><a href="#" className="ico-google-plus"><FontAwesomeIcon icon={faLinkedin} /></a>
										</li>
										<li><a href="#" className="ico-tumblr"><FontAwesomeIcon icon={faInstagram} /></a></li>
										<li><a href="#" className="ico-tumblr"><FontAwesomeIcon icon={faYoutube} /></a></li>

										{/* <li><a href="#" className="ico-behance"><i className="fab fa-behance"></i></a></li>
						<li><a href="#" className="ico-dribbble"><i className="fab fa-dribbble"></i></a></li>
						<li><a href="#" className="ico-instagram"><i className="fab fa-instagram"></i></a></li>
						<li><a href="#" className="ico-linkedin"><i className="fab fa-linkedin-in"></i></a></li>
						<li><a href="#" className="ico-pinterest"><i className="fab fa-pinterest-p"></i></a></li>
						<li><a href="#" className="ico-youtube"><i className="fab fa-youtube"></i></a></li>
						<li><a href="#" className="ico-vk"><i className="fab fa-vk"></i></a></li>
						<li><a href="#" className="ico-yelp"><i className="fab fa-yelp"></i></a></li>
						<li><a href="#" className="ico-yahoo"><i className="fab fa-yahoo"></i></a></li>
						*/}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 offset-lg-1">
							<div className="footer-box mb-40">

								<h5 className="h5-xs">Our Location</h5>
								<p>Rohini, Delhi</p>
								{branchName}


								
							</div>
						</div>

						<div className="col-md-6 col-lg-2">
							<div className="footer-links mb-40">

								<h5 className="h5-xs">Quick Links</h5>

								<ul className="foo-links clearfix">
								<li><Link href="/blogs"> Blogs </Link> </li>
                <li><Link href="/about"> About us </Link> </li>
                <li><Link href="/contact-us"> Contact us </Link> </li>
                <li><Link href="/health-packages"> health package </Link> </li>
                <li><a href="http://182.75.60.195/Download/PatientLogin.aspx"> Online Report </a> </li>
                <li><Link href="/doctors"> Talk to doctors </Link> </li>
								</ul>
							</div>
						</div>

						<div className="col-md-6 col-lg-2">
							<div className="footer-links mb-40">

								<h5 className="h5-xs">Discover</h5>

								<ul className="clearfix">
									{/* <li><a href="#">Help Center</a></li>
									<li><a href="#">Life Chatting</a></li> */}
									<li><a href="#">Terms & Privacy</a></li>
									<li><a href="#">FAQs</a></li>
									<li><a href="#">Site Map</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="bottom-footer">
						<div className="row">
							<div className="col-md-12">
								<p className="footer-copyright">&copy; 2023 <span>Ganesh MRI</span>. All Rights Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</footer>



			<div className='hide-in-desktop'>

				<div className='footer-mobile'>
					<ul>
						<li>	<Link href={`https://www.google.com/maps/dir//CS%2FOCF-7,+Pocket+3,+Sector+8,+Rohini,+New+Delhi,+Delhi,+110085/@28.7011754,77.0406494,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d03aeed6a6a09:0x6a5894628e7ffd25!2m2!1d77.1230508!2d28.7012004?entry=ttu`}>
											<div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="0.6s">
												<div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="0.4s">

										
												<span><img src={`${process.env.BASE_URL}images/direction.png`}/></span>


												

												<p className='small-tag'> <small>Locate us
											</small></p>
												</div>
											</div>
										</Link></li>
						<li><Link href={`/department/`}>
											<div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="0.6s">

												<span className="flaticon-076-microscope blue-color"></span>

												

												<p className='small-tag'> <small>What's App
											</small></p>
											</div>
										</Link></li>
					 
	<li><Link 

	href={`https://api.whatsapp.com/send?phone=8800846066&text=What is Beta-HCG Test in Pregnancy: Uses, Preparation, Procedure And Cost`}  target="_blank"><div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="1s">

	<span><img src={`${process.env.BASE_URL}images/whatsapp.png`}/></span>

<p className='small-tag'> <small>Whats App
</small>
</p>
</div>
</Link></li>


<li><Link tel href={`tel:+8800846066`} >
											<div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="0.8s">

												
												<span><img src={`${process.env.BASE_URL}images/phone.png`}/></span>


												
												<p className='small-tag'> <small>Call us
											</small></p>
											</div>
										</Link></li>
					</ul>
				</div>

			</div>

		</>
	)
}
export default footers