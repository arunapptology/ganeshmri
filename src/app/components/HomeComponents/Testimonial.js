 "use client"
import React , {useEffect , useState} from 'react'
import axios from 'axios';

const Testimonial = async () => {

	const [Datas, setDatas] = useState([]);
	useEffect(() => {
		axios.get('https://www.ganeshmri.com/api/admin/testimonial').then(function(response) {
			setDatas(response.data);
		
		}).catch(function(error) {

		});
	}, [])


  return (
    <>

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

							
									<p>At sagittis congue augue an egestas magna ipsum vitae purus ipsum primis undo
										cubilia
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


						</div>
					</div>
				</div> 


			</div> 
		</section> 

    
    </>
  )
}

export default Testimonial