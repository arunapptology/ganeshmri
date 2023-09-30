
"use client"
import React, { useEffect, useState } from 'react'

import Link from 'next/link';


const branchesList = () => {

    const [branches, fetchBranches] = useState();

	const fetchbranches = async () => {
		const response = await fetch('https://www.ganeshmri.com/admin/api/branches')
		const data = await response.json();
		fetchBranches(data);
	}

      
	useEffect(() => {
		fetchbranches()
	}, [])

	const regex = /(<([^>]+)>)/gi

  return (
    <div className="row">



	{branches && branches.map((itemBranches, i) => {
					
						return (
				<div className="col-md-6">
					<div className="sbox-7 icon-xs wow fadeInUp" data-wow-delay="0.4s">
						<Link href={`branches/${itemBranches.txtURL}`}>
							<div className="sbox-7-txt">
								<h5 className="h5-sm steelblue-color">{itemBranches.txtName}</h5>
								<p className="p-sm"><b className='text-dark'>Address : </b>  {itemBranches.location}
								</p>
								<br />
								<button className='btn btn-info'>Get Direction</button>
							</div>
						</Link>
					</div>
				</div>
						)
					})}
								</div>
  )
}

export default branchesList