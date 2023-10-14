"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { useGetDepartmentDataQuery, useGetCategoryDataQuery } from '../../redux/services/postApis';

import { useParams } from 'next/navigation'

import Loading from '../../Loading';

import Modal from 'react-modal'

import Enquiry from '../../components/enquiry';
import EnquerySingle from '../../components/enquerySingle';



const page = () => {


  const [isOpen, setIsOpen] = useState()


  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0px'

    }
  }

  const params = useParams()

  const param = params.department;

  const [categoryList, setcategoryList] = useState(null);

  const [cateString, setCateString] = useState(null);

  const [departmentid, setDepartmentId] = useState(param);

  const { data: departmentData, isLoading } = useGetDepartmentDataQuery(departmentid)

  const { data: category, isLoading: loading } = useGetCategoryDataQuery('')


  const fetchCategory = async () => {
    const response = await fetch(`https://admin.ganeshparamedicalcollege.com/api/category`)
    const data = await response.json();
    setcategoryList(data);
  }

  const handleCheckBox = async (e) => {
    setDepartmentId(e);
    const cateString = e.replace("-", " ").toUpperCase();
    setCateString(cateString)
  }


  useEffect(() => {
    fetchCategory();
  }, [])


  const departmentList = departmentData ?? departmentData;



  return (
    <>

      <div id="breadcrumb" className="division">
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-8 col-lg-8">
              <div className=" breadcrumb-holder">


                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>

                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Departments</li>
                  </ol>
                </nav>


                <h4 className="h4-sm steelblue-color">Our test price list</h4>

              </div>


            </div>

            <div className='col-4 col-md-4 col-lg-4'>


              <div className='form-box hide-in-mobile'>

                <div id="hero-section-form" className="text-center  bg-white">
                  <div className="col-md-12 custom-form">
                    <h4 className="h4-xs">Book Now</h4>
                    {/* <div className="col-lg-12 hero-form-msg text-center">
                <div className="sending-msg"><span className="loading">{message && message}</span></div>
            </div> */}
                  </div>

                  <EnquerySingle params={param} />


                </div>

              </div>


            </div>
          </div>
        </div>
      </div>


      <div className='department-tabs' >

        <div className='container '>
          <div className='row'>
            <div className='col-md-4'>

              <div className='depat-tab-left-box'>

                <div className='card-head'>
                  <h3>Fillters</h3>
                </div>
                <div className='depat-tab-left'>
                  <div class="containerTab">

                    <div className='tabs-in-box'>

                      {

                        isLoading ? <Loading /> :

                          categoryList && categoryList.map((items, i) => (
                            <>


                              <input type="radio"
                                value={items.txtURL}
                                onChange={(e) => (handleCheckBox(e.target.value))}
                                name="field"
                                id={`Uno_${i}`}
                              />

                              <label for={`Uno_${i}`}>
                                <svg class="check" viewbox="0 0 40 40">
                                  <defs>
                                    <linearGradient id={`gradient_${i}`} x1="0" y1="0" x2="0" y2="100%">
                                      <stop offset="0%" stopColor="#ff8a00"></stop>
                                      <stop offset="100%" stopColor="#da1b60"></stop>
                                    </linearGradient>
                                  </defs>
                                  <circle id="border" r="10px" cx="12px" cy="17px"></circle>
                                  <circle id="dot" r="15px" cx="10px" cy="10px"></circle>
                                </svg>{items.txtName}
                              </label>

                            </>


                          ))}










                    </div>


                  </div>
                </div>

              </div>


            </div>

            <div className='col-md-8'>

              <div className='depat-tab-right-box'>

                <div className='card-head'>
                  <h4>Search result of <span className='text-danger'>( {cateString ? cateString : departmentid} ) </span> </h4>
                </div>
                <div className='depat-tab-right'>

                  <table className='table'>

                    <tbody>

                      {

                        departmentList && departmentList.map((item, i) => (

                      
                          <tr>
                            <td>
                              <Link className='a-list' href={`/department-detail/${item.txtURL}`}>
                                {item.txtName}
                              </Link>
                            </td>


                            <td>
                              <strong> &#x20B9;{item.discountedPrice ? item.discountedPrice : null} </strong>
                            </td>
                            <td>

                              <button
                                //onClick={() => setIsOpen({item , value:true})}  
                                className='btn btn-sm custom-btn'> Book Now</button>

                            </td>


                          </tr>


                        ))
                      }


                    </tbody>

                  </table>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      <div style={{ width: '300px' }}>

        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
          <div className='modal-body'>

            <div className='form-box '>

              <div id="hero-section-form" className="text-center  bg-white">
                <div className="col-md-12 custom-form">
                  <h4 className="h4-xs">Book Now</h4>

                </div>

              </div>

            </div>

            <button className='btn btn-danger' onClick={() => setIsOpen(false)}>Close</button>

          </div>


        </Modal>
      </div>


    </>

  )
}

export default page