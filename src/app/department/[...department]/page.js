"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useGetDepartmentDataQuery ,useGetCategoryDataQuery } from '@/app/redux/services/postApis';
import { useParams } from 'next/navigation'
import Loading from '@/app/Loading';


const page = () => {

const params = useParams()

const param =  params.department; 

  const [categoryList, setcategoryList] = useState(null);

  const [cateString, setCateString] = useState(null);

  const [departmentid, setDepartmentId] = useState(param); 

  const { data: departmentData, isLoading } = useGetDepartmentDataQuery(departmentid)

  const { data:category, isLoading:loading } = useGetCategoryDataQuery('')

 
  const fetchCategory = async () => {
    const response = await fetch(`https://ganeshmri.com/admin/api/category`)
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




  const departmentList  = departmentData??departmentData;


  return (
    <>


      <div id="breadcrumb" className="division">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className=" breadcrumb-holder">


                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Departments</li>
                  </ol>
                </nav>


                <h4 className="h4-sm steelblue-color">Our test price list</h4>

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
                  <h4>Search result of <span className='text-danger'>( {cateString?cateString:departmentid} ) </span> </h4>
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
                              <Link href={`/department-detail/${item.txtURL}`}>
                                <button className='btn btn-sm custom-btn'> Book Now</button>
                              </Link>
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
    </>

  )
}

export default page