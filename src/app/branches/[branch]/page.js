"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {

  const slug = params.branch;


  const [branchDetail, setBranchDetails] = useState(null);

  const [othersBranches, setOthersBranches] = useState(null);

  const id = 2;

  const fetchBranch = async () => {
    const response = await fetch(`https://www.ganeshmri.com/admin/api/branchesdetails/${slug}`)
    const data = await response.json();
    setBranchDetails(data);
  }




  // var imageGallery = Object.assign([{}], branchDetail && branchDetail.imageGallery.split(','));



  // const imageGallery1 = imageGallery.map((item) => {

  //   return (
  //     <div className="col-lg-4 col-sm-6">
  //       <div>
  //         <img className="img-fluid img-thumbnail"
  //           src={`${branchDetail && branchDetail.imggallerUrl}/${item}`} />
  //       </div>
  //     </div>
  //   )

  // })






  const fetchBranchByCategory = async () => {
    const res = await fetch(`https://www.ganeshmri.com/admin/api/branchAreabyId/${id}`)
    const data1 = await res.json();
    setOthersBranches(data1);
  }

  useEffect(() => {
    fetchBranch();
    fetchBranchByCategory();
  }, [])


  // catName

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
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="departments.html">Branches</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {branchDetail && branchDetail.txtName}
                    </li>
                  </ol>
                </nav>

                <h4 className="h4-sm steelblue-color">{branchDetail && branchDetail.txtName}</h4>
              </div>
            </div>
          </div>

        </div>

      </div>



      <div
        id="department-page"
        className="wide-60 department-page-section division"
      >
        <div className="container">
          <div className="row">

            <div className="col-lg-8">



              <div className="txt-block pr-30">



                <div className="blog-post-img mb-40">
                  <img className="img-fluid"
                    src={`${branchDetail && branchDetail.imageurl}/${branchDetail && branchDetail.txtBnrDsktp}`}
                    alt="blog-post-image" />
                </div>

                <div className="content-block mb-40">


                  <div dangerouslySetInnerHTML={{ __html: branchDetail && branchDetail.txtDescription }}></div>

                </div>


                <div id="pricing-2" className="pricing-section division">
                  <div className="row pricing-row">

                    {/* <div className="col-md-12">
                  
                  <h5 className="h5-md steelblue-color">Treatments</h5>


                  <div className="pricing-table mb-40">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Service</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>X-Ray</td>
                          <td>
                            From <span>$325.00</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Magnetic Resonance Imaging</td>
                          <td>
                            From <span>$435.00</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Computer Tomography</td>
                          <td>
                            From <span>$315.00</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Laboratory Tests</td>
                          <td>
                            From <span>$90.00</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Ultrasound Imaging</td>
                          <td>
                            From <span>$285.00</span>
                          </td>
                        </tr>
                        <tr className="last-tr">
                          <th scope="row">6</th>
                          <td>Pregnancy Care Service</td>
                          <td>
                            From <span>$530.00</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}

{/* 
                    <div className="col-md-12">
                      <h5 className="h5-md steelblue-color">Gallery</h5>

                      <div className="pricing-table mb-40">
                        <div className="row">




                        </div>

                      </div>




                    </div> */}

                  </div>

                </div>

              </div>
            </div>

            <aside id="sidebar" className="col-lg-4">

              <div id="txt-widget" className="sidebar-div mb-50">

                <h5 className="h5-sm steelblue-color">Location </h5>
                <div className="txt-widget-unit mb-15 clearfix d-flex align-items-center">
                  <div className=''>

                    <div className='con-md-12'>  <div className='text'><b>Address : </b>{branchDetail && branchDetail.location}</div></div>
                    <div className='con-md-12'>


                      <div dangerouslySetInnerHTML={{ __html: branchDetail && branchDetail.latLong }}></div>


                    </div>
                  </div>




                </div>


              </div>


              <div className="sidebar-table blue-table sidebar-div mb-50">

                <h5 className="h5-md">Working Time</h5>

                <p className="p-sm">
                  Porta semper lacus cursus, feugiat primis ultrice ligula risus
                  auctor at tempus feugiat dolor lacinia cursus nulla vitae massa
                </p>

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

                <h5 className="h5-xs">Need a personal health plan?</h5>

                <p className="p-sm">
                  Porta semper lacus cursus, and feugiat primis ultrice ligula at
                  risus auctor
                </p>
              </div>

              <div className="sidebar-timetable sidebar-div mb-50">

                <h5 className="h5-md mb-20">Others locations in   {branchDetail && branchDetail.txtName} location </h5>

                <ul>
                  {othersBranches && othersBranches.map((itemss) => {
                    return (
                      <li>
                        <Link href={``}>{itemss.catName} in {branchDetail && branchDetail.txtName}</Link>
                      </li>
                    )

                  })}

                </ul>

              </div>



            </aside>

          </div>

        </div>

      </div>




    </>

  )
} 

export default page
