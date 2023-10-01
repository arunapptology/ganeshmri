import dynamic from 'next/dynamic'
import Loading from '../Loading';

   
const DynamicAboutData = dynamic(() => import('./aboutdata'), {
	ssr: false,
	loading: () => <Loading />,
  })


  const DynamicBranches = dynamic(() => import('../components/branchesList'), {
	ssr: false,
	loading: () => <Loading />,
  })



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
										<li className="breadcrumb-item active" aria-current="page">About Us</li>
									</ol>
								</nav>


								<h4 className="h4-sm steelblue-color">About Us</h4>

							</div>
						</div>
					</div>
				</div>
			</div>


			<section id="info-4" className="wide-custom info-section division">
				<div className="container">



			{/*  */}

	
			<DynamicAboutData />
		



				</div>
			</section>

			<section id="about-3" className="about-section division"><div className="container">
				<div className="abox-3-holder custom-strap">
					<div className="row d-flex align-items-center">
						<div className="container"><div className="row">
							<div className="col-sm-6 col-lg-3">
								<div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="0.4s">
									<span className="flaticon-137-doctor blue-color">
									</span>
									<h5 className="h5-sm steelblue-color">Locate Centres</h5><
										p>Porta semper lacus cursus,</p></div></div><div className="col-sm-6 col-lg-3"><div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="0.6s"><span className="flaticon-076-microscope blue-color"></span><h5 className="h5-sm steelblue-color">Find a Test</h5>
											<p>Porta semper lacus cursus,</p></div></div><div className="col-sm-6 col-lg-3">
								<div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="0.8s"><span className="flaticon-008-ambulance-6 blue-color"></span><h5 className="h5-sm steelblue-color">Health Packages</h5><p>Porta semper lacus cursus,</p></div>
							</div><div className="col-sm-6 col-lg-3"><div className="sbox-1 icon-md wow fadeInUp" data-wow-delay="1s"><span className="flaticon-083-stethoscope blue-color"></span><h5 className="h5-sm steelblue-color">Upload Prescription</h5><p>Porta semper lacus cursus,</p></div></div></div></div></div></div></div></section>


			<section id="services-7" className="bg-lightgrey wide-70 servicess-section">
				<div className="container">
					<h3 className="h3-md steelblue-color p-20">Our branches</h3>
					<div className="row">

				

							<div className="col-lg-8">


							{/*  */}
							<DynamicBranches />
							</div>
						


						<div className="col-lg-4">
							<div className="services-7-table blue-table mb-30 wow fadeInUp" data-wow-delay="0.6s">


								<h4 className="h4-xs">Opening Hours:</h4>


							

								<table className="table">
									<tbody>
										<tr>
											<td>Mon – Wed</td>
											<td> - </td>
											<td className="text-right">9:00 AM - 7:00 PM</td>
										</tr>
										<tr>
											<td>Thursday</td>
											<td> - </td>
											<td className="text-right">9:00 AM - 6:30 PM</td>
										</tr>
										<tr>
											<td>Friday</td>
											<td> - </td>
											<td className="text-right">9:00 AM - 6:00 PM</td>
										</tr>
										<tr className="last-tr">
											<td>Sun - Sun</td>
											<td>-</td>
											<td className="text-right">CLOSED</td>
										</tr>
									</tbody>
								</table>

								<h5 className="h5-sm">Need a personal health plan?</h5>


								
							</div>
						</div>


					</div>
				</div>
			</section>



		</>
	)
}

export default page