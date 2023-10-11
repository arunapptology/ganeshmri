"use client"
import React, { useState , useEffect } from 'react'
import { useParams } from 'next/navigation'

const page = () => {

  const params = useParams()

  const param =  params.packages; 

  
  const [packSingle, setPackSingle] = useState(null);

  const fetchPackage = async () => {
    const response = await fetch(`https://admin.ganeshparamedicalcollege.com/api/packagesSingle/${param}`)
    const data = await response.json();
    setPackSingle(data);
  }


  useEffect(()=>{
    fetchPackage();
  },[])

  console.log(packSingle);
  
    return (

        <>
            <div id="breadcrumb" className="division">
                <div className="container">
                  
                            <div className=" breadcrumb-holder">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                       
                                        <li className="breadcrumb-item active" aria-current="page">Health Package</li>
                                    </ol>
                                </nav>


                                <h4 className="h4-sm steelblue-color"> {packSingle&&packSingle.txtName}</h4>

                            </div>
                        
                </div>
            </div>


<div className='container'>
            <div className="step-div cart-sec row">
  <div className="col-md-7 col-sm-7 col-xs-12">
    <h1 id="product_name">
      {packSingle&&packSingle.txtName}
    </h1>
 
    <p className="parameterinc">
      Parameter Included: <b>1</b>
    </p>
 
  </div>
  <div className="col-md-5 col-sm-5 col-xs-12 text-right hpriceright">
    <div className="price">
       Price: <span className="rupeesign">₹</span>
      <strike>{packSingle&&packSingle.txtDiscountedPrice}/-</strike>
    </div>
    <h2 className="ltoffer">
      Offer price: <span className="rupeesign">₹</span>
      {packSingle&&packSingle.txtMRP}/- 
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



<section
  id="doctor-2-details"
  className="wide-custom doctor-details-section division"
>
  <div className="container">
    <div className="row">
      {/* DOCTOR PHOTO */}
      <div className="col-md-4 col-xl-4">
        <div className="doctor-photo mb-30 text-center">
          {/* Photo */}
          <img
            className="img-fluid"
            src={`${packSingle&&packSingle.imageurl}/${packSingle&&packSingle.txtBnrDsktp}`}
            alt="doctor-foto"
          />
          {/* Text */}
          <div class="doctor-bio">
          <br/>
            <h4 class="text-right"><span>{packSingle&&packSingle.txtName}</span></h4>
          
            <ul class="price-btn-right">
             
             <li><button class="btn custom-btn blue-hover">Add to cart</button></li>
             <li><button class="btn  btn-blue blue-hover font-bold">Buy Now</button></li>
             </ul>
            <span class="font-bold text-right text-danger">₹ 4500  </span>
            <span class="font-bold text-right"><s>₹ 9000   </s></span>
            <br/>
            <br/>
            <hr />
           
              
              
              </div>
       
        
        </div>
      </div>{" "}
      {/* END DOCTOR PHOTO */}
      {/* DOCTOR'S BIO */}
      <div className="col-md-8 col-xl-8">
        <div className="doctor-bio">
        
        <div dangerouslySetInnerHTML={{ __html: packSingle && packSingle.txtDescription }}></div>
          
        
        </div>
      </div>{" "}
      {/* END DOCTOR BIO */}
    </div>{" "}
    {/* End row */}
  </div>{" "}
  {/* End container */}
</section>

  
        </>
    )
}  

export default page