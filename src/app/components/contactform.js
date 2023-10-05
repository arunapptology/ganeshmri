"use client"
import React, {  useState } from 'react'

import { useForm } from 'react-hook-form';
const contactform = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');


  
    // =====--contact api form --==== //

    const onSubmit = async (result) => {
        setUsername(result.username)
        setMobile(result.mobile)
        setComment(result.comment)

    const res = await fetch('https://admin.ganeshparamedicalcollege.com/api/contactusform', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, mobile, comment }),
    })

    const data = await res.json()
      if (data.status==1) {
        setMessage(data.msg);
        setMobile('');
        setComment('');
        setUsername('');
    }else{
        setMessage(data.msg);
    }


  };


  return (
    <>

  
<div id="hero-section-form" className="text-center  bg-white ">
								<div className="col-md-12 custom-form">
									<h4 className="h4-xs">Request a call back</h4>
                                    <div className="col-lg-12 hero-form-msg text-center">
										<div className="sending-msg"><span className="loading">{message && message}</span></div>
									</div>
								</div>
  
                                <form onSubmit={handleSubmit(onSubmit)}
                                            className="mb-40 hero-form"


                                        >
                                            <div id="input-name" className="col-lg-12">
                                                <input type="text"
                                                    {...register('username' , { required: true })}
                                                    name="username"
                                                    className="form-control name"
                                                    placeholder="Enter Your Name*" required="" />

                                                {errors.username && <p className='error'>username is required.</p>}
                                            </div>



                                            <div id="input-phone" className="col-lg-12">
                                                <input type="tel" name="mobile"
                                                    {...register('mobile' , { required: true })}

                                                    className="form-control phone"
                                                    placeholder="Enter Your Phone Number*" required="" />

                                                {errors.mobile && <p className='error'>mobile is required.</p>}
                                            </div>


                                            <div id="input-comment" className="col-lg-12">
                                                <textarea  name="comment"
                                                    {...register('comment')}
                                                    className="form-control comment"
                                                    placeholder="Enter Your comment*" required="" />

                                                {errors.comment && <p>comment is required.</p>}
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

                                    </form>
							</div>

    
    </>
  )
}

export default contactform