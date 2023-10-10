"use client"
import React, { useEffect, useState , Suspense  } from 'react'

const aboutdata = () => {
	const [about, fetchAbout] = useState();

	const fetchabout = async () => {
		const response = await fetch('https://admin.ganeshparamedicalcollege.com/api/pages/about-us')
		const data = await response.json();
		fetchAbout(data);
	}

	useEffect(() => {
		fetchabout()
	}, [])

  return (
    <div className="bottom-row">
    <div className="row d-flex align-items-center">


        <div className="col-lg-6">
            <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">

                <span className="section-id blue-color">Highest Quality Care</span>

                <h3 className="h3-md steelblue-color">{about && about.h1}</h3>
            <Suspense fallback={<p>Loading feed...</p>}>
            <div className="mb-30" id='hover' dangerouslySetInnerHTML={{__html: about && about.txtDescription}}></div>
            </Suspense>


            </div>
        </div>



        <div className="col-lg-6">
            <div className="info-4-img text-center wow fadeInUp" data-wow-delay="0.6s">
                <img className="img-fluid" src={`${about && about.imageurl}/${about && about.txtBnrDsktp}`} alt="info-image" />
            </div>
        </div>


    </div>
</div>

  )
}

export default aboutdata