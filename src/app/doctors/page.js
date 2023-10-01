

import React from 'react'

import PersonalCare from '../components/HomeComponents/PersonalCare'
import Link from 'next/link'


const name = 'ravin-sharma-w';

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
										<li className="breadcrumb-item"><a href="index.html">Home</a></li>
										
										<li className="breadcrumb-item active" aria-current="page">Doctor</li>
									</ol>
								</nav>
								<h4 className="h4-sm steelblue-color">Doctors</h4>
							</div>
						</div>
					</div>
				</div>
			</div>


			<section id="doctors-3" className="bg-lightgrey wide-60 doctors-section division">
				<div className="container">
					<div className="row">


						<div className="col-md-6 col-lg-3">


							<Link href={`/doctors/${name}`}>
							<div className="doctor-2">
								<div className="hover-overlay">
									<img className="img-fluid" src="images/doctor-1.jpg" alt="doctor-foto" />
								</div>

								<div className="doctor-meta">

									<h5 className="h5-xs blue-color">Jonathan Barnes D.M.</h5>
									<span>Chief Medical Officer</span>

									<a className="btn btn-sm btn-blue blue-hover mt-15" href="doctor-1.html" title="">View More Info</a>

								</div>

							</div>

							</Link>


						</div>



						<div className="col-md-6 col-lg-3">


<Link href={`/doctors/${name}`}>
<div className="doctor-2">
	<div className="hover-overlay">
		<img className="img-fluid" src="images/doctor-1.jpg" alt="doctor-foto" />
	</div>

	<div className="doctor-meta">

		<h5 className="h5-xs blue-color">Jonathan Barnes D.M.</h5>
		<span>Chief Medical Officer</span>

		<a className="btn btn-sm btn-blue blue-hover mt-15" href="doctor-1.html" title="">View More Info</a>

	</div>

</div>

</Link>


</div>
<div className="col-md-6 col-lg-3">


<Link href={`/doctors/${name}`}>
<div className="doctor-2">
	<div className="hover-overlay">
		<img className="img-fluid" src="images/doctor-1.jpg" alt="doctor-foto" />
	</div>

	<div className="doctor-meta">

		<h5 className="h5-xs blue-color">Jonathan Barnes D.M.</h5>
		<span>Chief Medical Officer</span>

		<a className="btn btn-sm btn-blue blue-hover mt-15" href="doctor-1.html" title="">View More Info</a>

	</div>

</div>

</Link>


</div>

<div className="col-md-6 col-lg-3">


<Link href={`/doctors/${name}`}>
<div className="doctor-2">
	<div className="hover-overlay">
		<img className="img-fluid" src="images/doctor-1.jpg" alt="doctor-foto" />
	</div>

	<div className="doctor-meta">

		<h5 className="h5-xs blue-color">Jonathan Barnes D.M.</h5>
		<span>Chief Medical Officer</span>

		<a className="btn btn-sm btn-blue blue-hover mt-15" href="doctor-1.html" title="">View More Info</a>

	</div>

</div>

</Link>


</div>


					</div>
				</div>
			</section>



			<section id="reviews-2" className="bg-lightgrey wide-100 reviews-section division">
				<div className="container">


					<div className="row">
						<div className="col-lg-10 offset-lg-1 section-title">


							<h3 className="h3-md steelblue-color">What Our Patients Say</h3>


							<p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus,
								blandit posuere ligula varius congue cursus porta feugiat
							</p>

						</div>
					</div>



					<div className="row">
						<div className="col-md-12">
							<div className="owl-carousel owl-theme reviews-holder">


								<div className="review-2">
									<div className="review-txt text-center">


										<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>

										<div className="testimonial-avatar">
											<img src="images/review-author-1.jpg" alt="testimonial-avatar" />
										</div>


										<p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit
											magna undo tempus aliquet porta vitae
										</p>


										<div className="review-author">
											<h5 className="h5-sm">Scott Boxer</h5>
											<span>Programmer</span>
										</div>

									</div>
								</div>



								<div className="review-2">
									<div className="review-txt text-center">


										<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>


										<div className="testimonial-avatar">
											<img src="images/review-author-2.jpg" alt="testimonial-avatar" />
										</div>


										<p>Mauris donec ociis magnisa a sapien etiam sapien congue augue egestas et ultrice
											vitae purus diam integer congue magna ligula egestas
										</p>


										<div className="review-author">
											<h5 className="h5-sm">Penelopa Peterson</h5>
											<span>Project Manager</span>
										</div>

									</div>
								</div>

  

								<div className="review-2">
									<div className="review-txt text-center">


										<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>


										<div className="testimonial-avatar">
											<img src="images/review-author-3.jpg" alt="testimonial-avatar" />
										</div>


										<p>At sagittis congue augue an egestas magna ipsum vitae purus ipsum primis undo cubilia
											laoreet augue
										</p>


										<div className="review-author">
											<h5 className="h5-sm">M.Scanlon</h5>
											<span>Photographer</span>
										</div>

									</div>
								</div>



								<div className="review-2">
									<div className="review-txt text-center">


										<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>


										<div className="testimonial-avatar">
											<img src="images/review-author-4.jpg" alt="testimonial-avatar" />
										</div>


										<p>Mauris donec ociis magnis sapien etiam sapien congue augue pretium ligula
											a lectus aenean magna mauris
										</p>


										<div className="review-author">
											<h5 className="h5-sm">Jeremy Kruse</h5>
											<span>Graphic Designer</span>
										</div>

									</div>
								</div>



								<div className="review-2">
									<div className="review-txt text-center">


										<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>


										<div className="testimonial-avatar">
											<img src="images/review-author-5.jpg" alt="testimonial-avatar" />
										</div>


										<p>An augue in cubilia laoreet magna suscipit egestas magna ipsum at purus ipsum
											primis in augue ulta ligula egestas
										</p>


										<div className="review-author">
											<h5 className="h5-sm">Evelyn Martinez</h5>
											<span>Senior UX/UI Designer</span>
										</div>

									</div>
								</div>



								<div className="review-2">
									<div className="review-txt text-center">

										<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>


										<div className="testimonial-avatar">
											<img src="images/review-author-6.jpg" alt="testimonial-avatar" />
										</div>


										<p>An augue cubilia laoreet undo magna at risus suscipit egestas magna an ipsum ligula
											vitae and purus ipsum primis
										</p>


										<div className="review-author">
											<h5 className="h5-sm">Dan Hodges</h5>
											<span>Internet Surfer</span>
										</div>

									</div>
								</div>

								<div className="review-2">
									<div className="review-txt text-center">
										<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>
										<div className="testimonial-avatar">
											<img src="images/review-author-7.jpg" alt="testimonial-avatar" />
										</div>
										<p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
											and dolor blandit vitae
										</p>
										<div className="review-author">
											<h5 className="h5-sm">Isabel M.</h5>
											<span>SEO Manager</span>
										</div>
									</div>
								</div>


								<div className="review-2">
									<div className="review-txt text-center">
										<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>
										<div className="testimonial-avatar">
											<img src="images/review-author-8.jpg" alt="testimonial-avatar" />
										</div>
										<p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
											and dolor blandit vitae
										</p>
										<div className="review-author">
											<h5 className="h5-sm">Alex Ross</h5>
											<span>Patient</span>
										</div>

									</div>
								</div>


								<div className="review-2">
									<div className="review-txt text-center">
										<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>
										<div className="testimonial-avatar">
											<img src="images/review-author-9.jpg" alt="testimonial-avatar" />
										</div>
										<p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
											magna dolor neque vitae
										</p>
										<div className="review-author">
											<h5 className="h5-sm">Alisa Milano</h5>
											<span>Housewife</span>
										</div>
									</div>
								</div>  

								<div className="review-2">
									<div className="review-txt text-center">
										<div className="quote"><img src="images/quote.png" alt="quote-img" /></div>
										<div className="testimonial-avatar">
											<img src="images/review-author-9.jpg" alt="testimonial-avatar" />
										</div>
										<p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
											magna dolor neque vitae
										</p>
										<div className="review-author">
											<h5 className="h5-sm">Alisa Milano</h5>
											<span>Housewife</span>
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

export const metadata = {
	title: 'Doctors',
  }