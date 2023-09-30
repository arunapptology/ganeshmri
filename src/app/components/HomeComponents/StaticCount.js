import React from 'react'

const StaticCount = () => {
  return (
    <>
    
    <div id="statistic-1" className="bg-scroll statistic-section division">
				<div className="container white-color">
					<div className="row">

						<div className="col-md-6 col-lg-3">
							<div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.4s">

								<span className="flaticon-062-cardiogram-3"></span>
								<h5 className="statistic-number">9,<span className="count-element">632</span></h5>
								<p className="txt-400">Happy Patients</p>
							</div>
						</div>

						<div className="col-md-6 col-lg-3">
							<div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.6s">

								<span className="flaticon-137-doctor"></span>

								<h5 className="statistic-number"><span className="count-element">178</span></h5>
								<p className="txt-400">Qualified Doctors</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.8s">

								<span className="flaticon-065-hospital-bed"></span>

								<h5 className="statistic-number"><span className="count-element">864</span></h5>
								<p className="txt-400">Clinic Rooms</p>
							</div>
						</div>

						<div className="col-md-6 col-lg-3">
							<div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="1s">

								<span className="flaticon-040-placeholder"></span>

								<h5 className="statistic-number"><span className="count-element">473</span></h5>
								<p className="txt-400">Local Partners</p>
							</div>
						</div>
					</div>
				</div>
			</div>
    
    </>
  )
}

export default StaticCount