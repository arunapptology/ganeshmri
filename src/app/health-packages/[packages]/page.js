import React from 'react'

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
                                        <li className="breadcrumb-item"><a href="all-doctors.html">Our Doctors</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Doctor Page</li>
                                    </ol>
                                </nav>


                                <h4 className="h4-sm steelblue-color">Health Packages list</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


<div className='container'>
            <div className="step-div cart-sec row">
  <div className="col-md-7 col-sm-7 col-xs-12">
    <h1 id="product_name">
      Malaria Parasite Detection By Smear Examination in Gurgaon
    </h1>
    <h2 className="also_known_as">Smear Examination for MP</h2>
    <p className="parameterinc">
      Parameter Included: <b>1</b>
    </p>
 
  </div>
  <div className="col-md-5 col-sm-5 col-xs-12 text-right hpriceright">
    <div className="price">
       Price: <span className="rupeesign">₹</span>
      <strike>498/-</strike>
    </div>
    <h2 className="ltoffer">
      Offer price: <span className="rupeesign">₹</span>
      398/- 
    </h2>
    <div className="bookexclusive">
      <a
        className="btn btn-danger books booknow-package ga_booknow_malaria-parasite-detection-by-smear-examination"
        data-testid="parameter_1718"
        href="javascript:void(0);"
        onclick="pushGaEvent('parameter', 'Clicked on Book Now', 'Bottom book - Malaria Parasite Detection By Smear Examination')"
      >
        Book Now{" "}
        <img
          src=""
          className="images"
        />
      </a>
    </div>
    <div className="clearfix" />
  </div>
  <div className="clearfix" />
</div>

</div>

        </>
    )
}

export default page