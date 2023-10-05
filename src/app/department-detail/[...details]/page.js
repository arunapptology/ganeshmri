"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import allProjects from '../../projectData';


import Contactform from '../../components/contactform';



import { useGetDepartmentDetailsQuery } from '../../redux/services/postApis';

    
import $ from 'jquery';

const page = ({ props }) => {


    const params = useParams()

    const param = params.details;

    const { data: departmentData, isLoading } = useGetDepartmentDetailsQuery(param)



    return (
        <>

            <div id="breadcrumb" className="division">
                <div className="container">


                    <div className=" breadcrumb-holder">

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="all-doctors.html">Department</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">

                                </li>
                            </ol>
                        </nav>

                        <h4 className="h4-sm steelblue-color">
                            {departmentData && departmentData[0].txtName}
                        </h4>
                    </div>


                </div>

            </div>

            <section
                id="doctor-2-details"
                className="wide-custom doctor-details-section division"
            >
                <div className="container">
                    <div className="row">

                        <div className="col-md-8 col-xl-8">
                            <div className="doctor-photo mb-30">

                                <div className='price-bar'>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <h3>{departmentData && departmentData[0].txtName}</h3>
                                            <h5> {departmentData && departmentData[0].mainCat}</h5>
                                        </div>
                                        <div className='col-md-4 price-right'>

                                            <ul>
                                                <li>
                                                    <h5 className='text-danger'>&#x20B9; {departmentData && departmentData[0].price}   </h5>
                                                    <h6><s>&#x20B9; {departmentData && departmentData[0].discountedPrice}   </s></h6>
                                                </li>

                                                <li>

                                                    <button className='btn btn-blue blue-hover'>Buy Now</button>



                                                    <button
                                                        type="button"
                                                        className="btn custom-btn"
                                                        onClick={() => $('#exampleModal').modal('show')}
                                                    >
                                                        Add to cart
                                                    </button>


                                                </li>
                                            </ul>




                                        </div>


                                    </div>
                                </div>

                                <img
                                    className="img-fluid"
                                    src={`${process.env.BASE_URL}images/no-image.jpg`}
                                    alt="doctor-foto"
                                />

                                <br />
                                <br />


                                <div dangerouslySetInnerHTML={{ __html: departmentData && departmentData[0].txtDescription }}></div>




                                {/*                             
            <div id="tabs-2" className="tabs-section division">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4">
                            <div id="tabs-nav" className="list-group text-center clearfix">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">

                                    <li className="nav-item icon-xs">
                                        <a
                                            className="nav-link"
                                            id="tab11-list"
                                            data-toggle="pill"
                                            href="#tab-11"
                                            role="tab"
                                            aria-controls="tab-11"
                                            aria-selected="false"
                                        >
                                            Routine Medical Care
                                        </a>
                                    </li>

                                    <li className="nav-item icon-xs">
                                        <a
                                            className="nav-link"
                                            id="tab12-list"
                                            data-toggle="pill"
                                            href="#tab-12"
                                            role="tab"
                                            aria-controls="tab-12"
                                            aria-selected="false"
                                        >
                                            Full Blood Picture
                                        </a>
                                    </li>

                                    <li className="nav-item icon-xs">
                                        <a
                                            className="nav-link"
                                            id="tab13-list"
                                            data-toggle="pill"
                                            href="#tab-13"
                                            role="tab"
                                            aria-controls="tab-13"
                                            aria-selected="false"
                                        >
                                            MRI Diagnostic
                                        </a>
                                    </li>

                                    <li className="nav-item icon-xs">
                                        <a
                                            className="nav-link active"
                                            id="tab14-list"
                                            data-toggle="pill"
                                            href="#tab-14"
                                            role="tab"
                                            aria-controls="tab-14"
                                            aria-selected="true"
                                        >
                                            X-Ray Diagnostic
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-8">
                            <div className="tab-content" id="pills-tabContent">

                                <div
                                    className="tab-pane fade"
                                    id="tab-11"
                                    role="tabpanel"
                                    aria-labelledby="tab11-list"
                                >

                                    <h3 className="h3-md steelblue-color">Routine Medical Care</h3>

                                    <p>
                                        Sapien gravida donec enim ipsum blandit porta justo integer odio
                                        velna vitae auctor integer congue magna at pretium purus pretium
                                        ligula rutrum itae laoreet augue in cubilia laoreet an augue
                                        egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice
                                        ligula egestas magna suscipit
                                    </p>

                                    <div className="tab-img">
                                        <img
                                            className="img-fluid"
                                            src="images/pediatrics_1000x500.jpg"
                                            alt="tab-image"
                                        />
                                    </div>

                                    <p>
                                        An enim nullam tempor sapien gravida donec enim ipsum blandit
                                        porta justo integer odio velna vitae auctor integer congue magna
                                        at pretium purus pretium ligula rutrum itae laoreet augue in
                                        cubilia laoreet an augue egestas ipsum vitae emo ligula vitae arcu
                                        mollis blandit ultrice ligula egestas magna suscipit
                                    </p>

                                    <div className="row">
                                        <div className="col-xl-6">

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Nemo ipsam egestas volute and turpis dolores quaerat massa
                                                    suscipit, luctus neque
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>An enim nullam tempor at pretium blandit</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>An enim nullam tempor at pretium blandit</p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <a href="service-1.html" className="btn btn-blue blue-hover mt-30">
                                        View More Details
                                    </a>
                                </div>


                                <div
                                    className="tab-pane fade"
                                    id="tab-12"
                                    role="tabpanel"
                                    aria-labelledby="tab12-list"
                                >

                                    <h3 className="h3-md steelblue-color">Full Blood Picture</h3>

                                    <p>
                                        Sapien gravida donec enim ipsum blandit porta justo integer odio
                                        velna vitae auctor integer congue magna at pretium purus pretium
                                        ligula rutrum itae laoreet augue in cubilia laoreet an augue
                                        egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice
                                        ligula egestas magna suscipit
                                    </p>

                                    <div className="tab-img">
                                        <img
                                            className="img-fluid"
                                            src="images/hematology_1000x500.jpg"
                                            alt="tab-image"
                                        />
                                    </div>

                                    <p>
                                        An enim nullam tempor sapien gravida donec enim ipsum blandit
                                        porta justo integer odio velna vitae auctor integer congue magna
                                        at pretium purus pretium ligula rutrum itae laoreet augue in
                                        cubilia laoreet an augue egestas ipsum vitae emo ligula vitae arcu
                                        mollis blandit ultrice ligula egestas magna suscipit
                                    </p>

                                    <div className="row">
                                        <div className="col-xl-6">

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Nemo ipsam egestas volute and turpis dolores quaerat massa
                                                    suscipit, luctus neque
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>An enim nullam tempor at pretium blandit</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>An enim nullam tempor at pretium blandit</p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <a href="service-1.html" className="btn btn-blue blue-hover mt-30">
                                        View More Details
                                    </a>
                                </div>


                                <div
                                    className="tab-pane fade"
                                    id="tab-13"
                                    role="tabpanel"
                                    aria-labelledby="tab13-list"
                                >

                                    <h3 className="h3-md steelblue-color">MRI Diagnostic</h3>

                                    <p>
                                        Sapien gravida donec enim ipsum blandit porta justo integer odio
                                        velna vitae auctor integer congue magna at pretium purus pretium
                                        ligula rutrum itae laoreet augue in cubilia laoreet an augue
                                        egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice
                                        ligula egestas magna suscipit
                                    </p>

                                    <div className="tab-img">
                                        <img
                                            className="img-fluid"
                                            src="images/mri_1000x500.jpg"
                                            alt="tab-image"
                                        />
                                    </div>

                                    <p>
                                        An enim nullam tempor sapien gravida donec enim ipsum blandit
                                        porta justo integer odio velna vitae auctor integer congue magna
                                        at pretium purus pretium ligula rutrum itae laoreet augue in
                                        cubilia laoreet an augue egestas ipsum vitae emo ligula vitae arcu
                                        mollis blandit ultrice ligula egestas magna suscipit
                                    </p>

                                    <div className="row">
                                        <div className="col-xl-6">

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Nemo ipsam egestas volute and turpis dolores quaerat massa
                                                    suscipit, luctus neque
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>An enim nullam tempor at pretium blandit</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>An enim nullam tempor at pretium blandit</p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <a href="service-1.html" className="btn btn-blue blue-hover mt-30">
                                        View More Details
                                    </a>
                                </div>


                                <div
                                    className="tab-pane fade active show"
                                    id="tab-14"
                                    role="tabpanel"
                                    aria-labelledby="tab14-list"
                                >

                                    <h3 className="h3-md steelblue-color">X-Ray Diagnostic</h3>

                                    <p>
                                        Sapien gravida donec enim ipsum blandit porta justo integer odio
                                        velna vitae auctor integer congue magna at pretium purus pretium
                                        ligula rutrum itae laoreet augue in cubilia laoreet an augue
                                        egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice
                                        ligula egestas magna suscipit
                                    </p>

                                    <div className="tab-img">
                                        <img
                                            className="img-fluid"
                                            src="images/x-ray_1000x500.jpg"
                                            alt="tab-image"
                                        />
                                    </div>

                                    <p>
                                        An enim nullam tempor sapien gravida donec enim ipsum blandit
                                        porta justo integer odio velna vitae auctor integer congue magna
                                        at pretium purus pretium ligula rutrum itae laoreet augue in
                                        cubilia laoreet an augue egestas ipsum vitae emo ligula vitae arcu
                                        mollis blandit ultrice ligula egestas magna suscipit
                                    </p>

                                    <div className="row">
                                        <div className="col-xl-6">

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Nemo ipsam egestas volute and turpis dolores quaerat massa
                                                    suscipit, luctus neque
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>An enim nullam tempor at pretium blandit</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>An enim nullam tempor at pretium blandit</p>
                                            </div>

                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Magna massa suscipit, luctus neque purus and ipsum neque
                                                    dolor primis luctus tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <a href="service-1.html" className="btn btn-blue blue-hover mt-30">
                                        View More Details
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div> */}



                            </div>
                        </div>


                        <div className="col-md-4 col-xl-4">

                            <div className='right-side-bar'>

                                <div className="doctor-bio">

                                    <h4 className='text-right'>( <span>{departmentData && departmentData[0].txtName}</span> ) Centres near you</h4>

                                    <p className='font-bold text-right'>{departmentData && departmentData[0].mainCat}</p>

                                    <p className='font-bold text-right text-danger' >&#x20B9; {departmentData && departmentData[0].price}  </p>
                                    <p className='font-bold text-right'><s>&#x20B9; {departmentData && departmentData[0].discountedPrice}   </s></p>
                                    <hr />
                                    <ul className='price-btn-right'>

                                        <li>
                                            <button className='btn  btn-blue blue-hover'>
                                                Call us
                                            </button>

                                        </li>
                                        <li>
                                            <button className='btn btn-blue blue-hover'>
                                                Talk to doctor
                                            </button>
                                        </li>



                                        <li>
                                            <button className='btn  btn-blue blue-hover font-bold'>
                                                Chat with us
                                            </button>

                                        </li>

                                    </ul>


                                </div>



                                <hr />


                                {/* <form >

                                    <input {...register('firstName')} />

                                    <input {...register('lastName', { required: true })} />

                                    {errors.lastName && <p>Last name is required.</p>}

                                    <input {...register('age', { pattern: /\d+/ })} />

                                    {errors.age && <p>Please enter number for age.</p>}


                                    <input type="submit" />


                                </form> */}

                                <div className='form-box'>

                                    <Contactform />

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </section >

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )



}

export default page;





