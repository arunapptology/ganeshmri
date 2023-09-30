import React from 'react'

const CategoryTabs = () => {
  return (
    <>
    
    <section id="tabs-1" className="wide-100 tabs-section division">
				<div className="container">
					<div className="row">
						<div className="col-md-12">

							<div id="tabs-nav" className="list-group text-center">
								<ul className="nav nav-pills" id="pills-tab" role="tablist">

									<li className="nav-item icon-xs">
										<a className="nav-link active" id="tab1-list" data-toggle="pill" href="#tab-1"
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

										<div className="col-lg-6">
											<div className="tab-img">
												<img className="img-fluid" src="images/pediatrics_700x700.jpg"
													alt="tab-image" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="txt-block pc-30">

												<h3 className="h3-md steelblue-color">PET Scans </h3>
												<p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum
													blandit
													porta justo integer odio velna vitae auctor integer congue magna at
													pretium
													purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an
													augue
													egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula
													egestas
													magna suscipit
												</p>

												<div className="row">
													<div className="col-xl-6">

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Nemo ipsam egestas volute and turpis dolores
																quaerat</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Magna luctus tempor</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">An enim nullam tempor at pretium purus blandit
															</p>
														</div>
													</div>
													<div className="col-xl-6">

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Magna luctus tempor blandit a vitae suscipit
																mollis</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat
															</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">An enim nullam tempor</p>
														</div>
													</div>
												</div>

												<a href="service-1.html" className="btn btn-blue blue-hover mt-30">View More
													Details</a>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2-list">
									<div className="row d-flex align-items-center">

										<div className="col-lg-6">
											<div className="tab-imgs">
												<img className="img-fluid" src="images/hematology_700x700.jpg"
													alt="tab-image" />
											</div>
										</div>

										<div className="col-lg-6">
											<div className="txt-block pc-30">

												<h3 className="h3-md steelblue-color">CT Scans </h3>

												<p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum
													blandit
													porta justo integer odio velna vitae auctor integer congue magna at
													pretium
													purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an
													augue
													egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula
													egestas
													magna suscipit
												</p>

												<div className="row">
													<div className="col-xl-6">

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Nemo ipsam egestas volute and turpis dolores
																quaerat</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Magna luctus tempor</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">An enim nullam tempor at pretium purus blandit
															</p>
														</div>
													</div>
													<div className="col-xl-6">

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Magna luctus tempor blandit a vitae suscipit
																mollis</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat
															</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">An enim nullam tempor</p>
														</div>
													</div>
												</div>

												<a href="service-2.html" className="btn btn-blue blue-hover mt-30">View More
													Details</a>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab3-list">
									<div className="row d-flex align-items-center">

										<div className="col-lg-6">
											<div className="tab-img">
												<img className="img-fluid" src="images/mri_700x700.jpg" alt="tab-image" />
											</div>
										</div>

										<div className="col-lg-6">
											<div className="txt-block pc-30">

												<h3 className="h3-md steelblue-color">MRI Diagnostic</h3>

												<p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum
													blandit
													porta justo integer odio velna vitae auctor integer congue magna at
													pretium
													purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an
													augue
													egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula
													egestas
													magna suscipit
												</p>

												<div className="row">
													<div className="col-xl-6">

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Nemo ipsam egestas volute and turpis dolores
																quaerat</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Magna luctus tempor</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">An enim nullam tempor at pretium purus blandit
															</p>
														</div>
													</div>
													<div className="col-xl-6">

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Magna luctus tempor blandit a vitae suscipit
																mollis</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat
															</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">An enim nullam tempor</p>
														</div>
													</div>
												</div>

												<a href="service-1.html" className="btn btn-blue blue-hover mt-30">View More
													Details</a>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab4-list">
									<div className="row d-flex align-items-center">

										<div className="col-lg-6">
											<div className="tab-img">
												<img className="img-fluid" src="images/x-ray_700x700.jpg" alt="tab-image" />
											</div>
										</div>

										<div className="col-lg-6">
											<div className="txt-block pc-30">

												<h3 className="h3-md steelblue-color">X-Ray Diagnostic</h3>

												<p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum
													blandit
													porta justo integer odio velna vitae auctor integer congue magna at
													pretium
													purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an
													augue
													egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula
													egestas
													magna suscipit
												</p>

												<div className="row">
													<div className="col-xl-6">

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Nemo ipsam egestas volute and turpis dolores
																quaerat</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Magna luctus tempor</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">An enim nullam tempor at pretium purus blandit
															</p>
														</div>
													</div>
													<div className="col-xl-6">

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Magna luctus tempor blandit a vitae suscipit
																mollis</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat
															</p>
														</div>

														<div className="box-list">
															<div className="box-list-icon blue-color"><i
																className="fas fa-angle-double-right"></i></div>
															<p className="p-sm">An enim nullam tempor</p>
														</div>
													</div>
												</div>

												<a href="service-2.html" className="btn btn-blue blue-hover mt-30">View More
													Details</a>
											</div>
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

export default CategoryTabs