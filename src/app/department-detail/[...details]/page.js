"use client"
import React, { useEffect, useState } from 'react'
import Enquiry from '../../components/enquiry';
import { useForm } from 'react-hook-form';
import axios from 'axios';



import $ from 'jquery';
import Link from 'next/link';

const page = ({ params }) => {

    const [testid, setHiddenId] = useState();
    const [price, setHiddenPrice] = useState();
    const [slug, setHiddenSlug] = useState();

    const [departmentData, setDepartmentData] = useState();

    const param = params.details;

    const fetchDepartmentData = async () => {

        const response = await fetch(`
        https://admin.ganeshparamedicalcollege.com/api/departmentDetail/${param}`)
        const data = await response.json();

        setDepartmentData(data);

    }




    useEffect(() => {
        fetchDepartmentData()
    }, [])

    return (
        <>

            <div id="breadcrumb" className="division">
                <div className="container">


                    <div className=" breadcrumb-holder">

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>

                                <li className="breadcrumb-item active" aria-current="page">
                                    {departmentData && departmentData.txtName}
                                </li>
                            </ol>
                        </nav>

                        <h4 className="h4-sm steelblue-color">
                            {departmentData && departmentData.txtName}
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


                                <div className='form-box hide-in-desktop'>

                                    <div id="hero-section-form" className="text-center  bg-white">
                                        <div className="col-md-12 custom-form">
                                            <h4 className="h4-xs">Book Now</h4>
                                            {/* <div className="col-lg-12 hero-form-msg text-center">
                                                <div className="sending-msg"><span className="loading">{message && message}</span></div>
                                            </div> */}
                                        </div>

                                        {/* <form onSubmit={handleSubmit(onSubmit)}
                                            className="mb-40 hero-form"
                                        >
                                            <input name="testidinput" type='hidden'
                                                {...register(

                                                    `testidinput`, { value: testid }

                                                )} />


                                            <input name="price" type='hidden'
                                                {...register(

                                                    `price`, { value: price }

                                                )} />


                                            <input name="slug" type='hidden'
                                                {...register(

                                                    `slug`, { value: slug }

                                                )} />



                                            <div id="input-name" className="col-lg-12">
                                                <input type="text"
                                                    {...register('username', { required: true })}

                                                    name="username"
                                                    className="form-control name"
                                                    placeholder="Enter Your Name*" required="" />

                                                {errors.username && <p className='error'>username is required.</p>}
                                            </div>



                                            <div id="input-phone" className="col-lg-12">
                                                <input type="tel" name="txtMob"
                                                    {...register('txtMob', { required: true })}


                                                    className="form-control phone"
                                                    placeholder="Enter Your Phone Number*" required="" />

                                                {errors.txtMob && <p className='error'>Movile number is required.</p>}
                                            </div>


                                            <div className="col-lg-12 form-btn">
                                                <input type='submit'
                                                    className="btn custom-btn tra-white-hover "
                                                    value={'Send Your Message'}
                                                />

                                            </div>

                                            <div className="col-lg-12 hero-form-msg text-center">
                                                <div className="sending-msg"><span className="loading">{message && message}</span></div>
                                            </div>

                                        </form> */}

                                        <Enquiry params={param} />
                                    </div>

                                </div>

                                <hr />

                                <div className='price-bar'>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <h3>{departmentData && departmentData.txtName}</h3>
                                            <h5> {departmentData && departmentData.mainCat}</h5>
                                        </div>
                                        <div className='col-md-4 price-right'>

                                            <ul>
                                                <li>
                                                    <h5 className='text-danger'>&#x20B9; {departmentData && departmentData.price}   </h5>
                                                    <h6><s>&#x20B9; {departmentData && departmentData.discountedPrice}   </s></h6>
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

                                <div dangerouslySetInnerHTML={{ __html: departmentData && departmentData.txtDescription }}></div>

                            </div>
                        </div>

                        <div className="col-md-4 col-xl-4">

                            <div className='right-side-bar'>

                                <div className='form-box hide-in-mobile'>

                                    <div id="hero-section-form" className="text-center  bg-white">
                                        <div className="col-md-12 custom-form">
                                            <h4 className="h4-xs">Book Now</h4>
                                            {/* <div className="col-lg-12 hero-form-msg text-center">
                                                <div className="sending-msg"><span className="loading">{message && message}</span></div>
                                            </div> */}
                                        </div>

                                        <Enquiry params={param} />

                                        {/* <form onSubmit={handleSubmit(onSubmit)}
                                            className="mb-40 hero-form"
                                        >
                                            <input name="testidinput" type='hidden'
                                                {...register(

                                                    `testidinput`, { value: testid }

                                                )} />


                                            <input name="price" type='hidden'
                                                {...register(

                                                    `price`, { value: price }

                                                )} />


                                            <input name="slug" type='hidden'
                                                {...register(

                                                    `slug`, { value: slug }

                                                )} />



                                            <div id="input-name" className="col-lg-12">
                                                <input type="text"
                                                    {...register('username', { required: true })}

                                                    name="username"
                                                    className="form-control name"
                                                    placeholder="Enter Your Name*" required="" />

                                                {errors.username && <p className='error'>username is required.</p>}
                                            </div>



                                            <div id="input-phone" className="col-lg-12">
                                                <input type="tel" name="txtMob"
                                                    {...register('txtMob', { required: true })}


                                                    className="form-control phone"
                                                    placeholder="Enter Your Phone Number*" required="" />

                                                {errors.txtMob && <p className='error'>Movile number is required.</p>}
                                            </div>


                                            <div className="col-lg-12 form-btn">
                                                <input type='submit'
                                                    className="btn custom-btn tra-white-hover "
                                                    value={'Send Your Message'}
                                                />

                                            </div>

                                            <div className="col-lg-12 hero-form-msg text-center">
                                                <div className="sending-msg"><span className="loading">{message && message}</span></div>
                                            </div>

                                        </form> */}
                                    </div>

                                </div>

                                <hr />
                                <div className="doctor-bio">

                                    <h4 className='text-right'>( <span>{departmentData && departmentData.txtName}</span> ) Centres near you</h4>

                                    <p className='font-bold text-right'>{departmentData && departmentData.mainCat}</p>

                                    <p className='font-bold text-right text-danger' >&#x20B9; {departmentData && departmentData.price}  </p>
                                    <p className='font-bold text-right'><s>&#x20B9; {departmentData && departmentData.discountedPrice}   </s></p>
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





