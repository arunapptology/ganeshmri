"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const cardboard = () => {
    
    const [packages, setPackages] = useState('');


	const fetchPackages = async () => {
		const response = await fetch('https://www.ganeshmri.com/admin/api/packages')
		const data = await response.json();
		setPackages(data);
	}
   

    useEffect(() => {

		fetchPackages()
	

	}, [])


    const packs = packages&&packages.map( (items) => {

        return (

          
            <div className="col-12 col-sm-8 col-md-4 col-lg-3">
            <div className="card item">
               
         
                <div className="cat-tags">{items.catName}</div>
                <Link href={`health-packages/${items.txtPageSlug}`}>
                <img
                    className="card-img mx-auto d-block"
                    src={`${items.imgthumburl}/${items.txtBnrDsktp}`} 
                    alt={`${items.txtImageAltTag} `}
                />
                 </Link>
                <div className="card-img d-flex justify-content-end">
                    <a href="#" className="card-link text-danger like">
                        <i className="fas fa-heart" />
                    </a>
                </div>  
               
                <div className="card-body">
                <Link href={`health-packages/${items.txtPageSlug}`}>
                    <h5 className="card-title">{items.txtName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">MRP:
                     <span className='mrpreal'> &#x20B9; {items.txtMRP} </span> &nbsp; &nbsp;
                     <del className='discounted'>&#x20B9;{items.txtDiscountedPrice} </del>
                     </h6>

                     </Link>

                   
             
              
                    <div className="buy d-flex justify-content-between align-items-center">
                        <div className="price text-success">
                            <h5 className="mt-4 mrpreal"> &#x20B9; 2222</h5>
                        </div>
                        <Link href={`cart-details`} className="btn btn-danger mt-3">
                            <i className="fas fa-shopping-cart" /> Add to Cart
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
        
        )
    })  





  return (
    <div className="row">

    {packs}

    </div>
  )
}

export default cardboard