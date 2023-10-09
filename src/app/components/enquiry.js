"use client"
import React, {  useEffect, useState } from 'react'

import { useForm } from 'react-hook-form';
import { useParams } from 'next/navigation'

import axios from 'axios';

import Popup from './popup'


import {useGetDepartmentDetailsQuery } from '../redux/services/postApis';


const enquiry = () => {

    const [departmentData , setDepartmentData] = useState({});

    const params = useParams()

    const param = params.details;

    const fetchDepartmentData = async () => {

		const response = await fetch(`
        https://admin.ganeshparamedicalcollege.com/api/departmentDetail/${param}`)
		const data = await response.json();
		setDepartmentData(data);
	}     
  
	const {id , txtname} = departmentData;

  console.log(departmentData.discountedPrice);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [username, setUsername] = useState('');
    const [txtMob, setTxtMob] = useState('');
    const [testId, settestId] = useState('');

    const [ip_address, setIpAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');


    const [message, setMessage] = useState('');

    const [isOpen, setIsOpen] = useState(false)

    const getData = async () => {
        const res = await axios.get("https://geolocation-db.com/json/");
        setIpAddress(res.data.IPv4);
        setLatitude(res.data.latitude);
        setLongitude(res.data.longitude);
      };



    const onSubmit = async (result) => {

       

        

    const res = await fetch('https://admin.ganeshparamedicalcollege.com/api/enquiryForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },  
        body: JSON.stringify({ 
            username,
            txtMob,
            testId,
            ip_address,
            latitude,
            longitude
        }),
    })  
  
    const data = await res.json()
      if (data.status==1) {
        setMessage(data.msg);
        settxtName('');
        settxtMob('');
        settestId('');
    }else{
        setMessage(data.msg);
    }
     

  };




  useEffect(()=>{

    fetchDepartmentData()
    getData();

  },[])

  return (
    <>
    
    {/* <Popup  /> */}




    </>
  )
}

export default enquiry