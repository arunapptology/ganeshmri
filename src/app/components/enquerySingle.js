"use client"
import React, { useEffect, useState } from 'react'
import { useParams, useRouter, redirect } from 'next/navigation'

import { useForm } from 'react-hook-form';
import axios from 'axios';



import $ from 'jquery';
import Link from 'next/link';
const enquerySingle = ({ params }) => {

    const router = useRouter()


    const [testid, setHiddenId] = useState();
    const [price, setHiddenPrice] = useState();
    const [slug, setHiddenSlug] = useState();

    const [isLoading, setIsLoading] = useState(false);

  
    const [departmentData, setDepartmentData] = useState();

    const fetchDepartmentData = async () => {

        const response = await fetch(`
https://admin.ganeshparamedicalcollege.com/api/departmentDetailMultiple/${params}`)
        const data = await response.json();

        setDepartmentData(data);

        setHiddenId(data.id)

        setHiddenPrice(data.price)
        setHiddenSlug(data.txtURL)

        console.log(data);
    }


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [ip_address, setIpAddress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const [message, setMessage] = useState("");


    const getData = async () => {
        const res = await axios.get("https://geolocation-db.com/json/");
        setIpAddress(res.data.IPv4);
        setLatitude(res.data.latitude);
        setLongitude(res.data.longitude);
    };



    const [data, setData] = useState("");

    const onSubmit = async (datas) => {

        setData(datas);

        let username = datas.username;
        let mobile = datas.txtMob;

        setIsLoading(true)


        const res = await fetch('https://admin.ganeshparamedicalcollege.com/api/enquiryForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                mobile,
                testid,
                price,
                slug,
                ip_address,
                latitude,
                longitude
            }),
        })

        const data = await res.json()


        if (data.status == 1) {
            setMessage(data.msg);
            // settxtName('');
            // settxtMob('');
            // settestId('');

            setIsLoading(false)

            router.push("/thank-you")

        } else {
            setMessage(data.msg);
        }

    }



    useEffect(() => {

        getData();
        fetchDepartmentData()
    }, [])
    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}
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
                    <input type='text' name="txtMob"
                        {...register('txtMob', {
                            required: true,

                        })}


                        className="form-control phone"
                        placeholder="Enter Your Phone Number*" required="" />

                    {errors.txtMob && <p className='error'>Mobile number is required || number must be 10 digits only</p>}
                </div>


                <div className="col-lg-12 form-btn">
                    <input type='submit'
                        className="btn custom-btn tra-white-hover "
                        value={'Request a callback'}
                    />

                </div>

                <div className="col-lg-12 hero-form-msg text-center">

                    {isLoading === true ? <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : <div className="sending-msg"><span className="loading">{message && message}</span></div>}

                </div>

            </form>

        </>
    )
}

export default enquerySingle