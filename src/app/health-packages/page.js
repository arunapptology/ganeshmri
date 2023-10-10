"use client"
import { Suspense } from 'react';
import Loading from '../Loading';

import { useSelector , useDispatch } from "react-redux";



import dynamic from 'next/dynamic'
import Link from 'next/link';
const Cardboard = dynamic(() => import('./cardboard'), {
    ssr: false,
})

const page = () => {
  
      

    return (
        <>

{/*  */}
            <title>Health Packages</title>
            <meta name="description" content="Health Packages" />
            <link rel="canonical" href="Health Packages" ></link>


            <div id="breadcrumb" className="division">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className=" breadcrumb-holder">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>

                                            </li>
                                        
                                        <li className="breadcrumb-item active" aria-current="page">Health Packages</li>
                                    </ol>
                                </nav>


                                <h4 className="h4-sm steelblue-color">Health Packages list</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



<section className='wide-60  division'>
<div className='packages'>

            <div className="container">
            <div class="mb-5 text-center">

<h2>Our Health Checkup Packages</h2>

<p class="">Looking for a health package in Delhi, Noida, Gurgaon, NCR? You are at the right place. Ganesh
    Diagnostic &amp; Imaging Centre Presents the most personalized in-depth health checkups. To ensure you and
    your family remain reassured and live happy.</p>

<p class="mri-detai-content">Our health check-up packages are designed in a way that provides an overall
    health picture. These packages are for everyone without distinction of gender, age, type of job at an
    affordable cost. You get your health check-up's reports online within 24 hours. Book the health package
    online now!</p>

</div>

<Suspense fallback={<Loading/>}>

           <Cardboard /> 

           </Suspense>


            </div>

            </div>

            </section>


        </>



    )
}

export default page