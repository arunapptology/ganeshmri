
"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import dynamic from "next/dynamic";
import { useDispatch , useSelector } from 'react-redux';

//import { useGetPackageResultQuery } from '@/app/redux/services/postApis';//

import { useGetPackageResultQuery } from '../../redux/services/postApis';




if (typeof window !== "undefined") {
	window.$ = window.jQuery = require("jquery");
}

import { addcart } from '../../redux/cartSlice';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OwlCarousel2 = dynamic(() => import("react-owl-carousel"), {
	ssr: false,
});



const options = {
	margin: 10,
	responsiveClass: true,

	dots: false,
	autoplay: true,
	smartSpeed: 1000,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		700: {
			items: 3,
		},
		1000: {
			items: 4,

		}
	},
};



const Services = () => {

	const { data: packagesData } = useGetPackageResultQuery(1000);
	
	const dispatch = useDispatch();


	 
	 

	const handleAddCart = (product) => {
		dispatch(addcart(product))
		toast.success(`Add to cart`);
	}

	
		
		const packs = packagesData && packagesData.map((items, i) => {
			return (
	  
				<div className="card item" key={i}>
					<div className="cat-tags">{items.catName}</div>
					<Link  href={`health-packages/${items.txtPageSlug}`}>
						<img
							className="card-img mx-auto d-block"
							src={`${items.imageurl}/${items.txtBnrDsktp}`}
							alt={`${items.txtImageAltTag} `}
						/>
					</Link>
					<div className="card-img d-flex justify-content-end">
						<a href="#" className="card-link text-danger like">
							<i className="fas fa-heart" />
						</a>
					</div>
	
					<div className="card-body">
						<Link className='head-tag' href={`health-packages/${items.txtPageSlug}`}>
							<h5 className="card-title">{items.txtName}</h5>
							<h6 className="card-subtitle mb-2 text-muted">MRP:
							<span className='mrpreal'>&#x20B9;{items.txtDiscountedPrice} </span>
								<del className=' discounted'> &#x20B9; {items.txtMRP} </del> &nbsp; &nbsp;
								
							</h6>
	
						</Link>
	
	
	
	
						<div className="buy d-flex justify-content-between align-items-center">
							<div className="price text-success">
								<h5 className="mt-4 mrpreal"> &#x20B9; {items.txtDiscountedPrice}</h5>
							</div>
							<button  className="btn btn-danger mt-3" onClick={()=>handleAddCart(items)}>
								<i className="fas fa-shopping-cart" /> Add to Cart
							</button>
						</div>
					</div>
	
				</div>
	
	
			)
		})
	
	
	





  return (
    <>
         <ToastContainer />
	<div className="row">
						<OwlCarousel2
							{...options}
						>

							{packs}


						</OwlCarousel2>
					</div>
    </>
  )
}

export default Services