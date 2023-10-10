"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';



import Contactform from '../components/contactform';

import Departmentpage from './departmentpage';

const page = () => {
  
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  let limit = page*9;

 
  const getCardData = async () => {
      const res = await fetch(
        `https://admin.ganeshparamedicalcollege.com/api/categorybylimit/${limit}/${page}`
      );
      const data = await res.json();
      console.log(data);



      setCard((prev) => [...prev, ...data]);
      setLoading(false);
    };
    
    useEffect(() => {
      getCardData();
    }, [page]);
  
    const handelInfiniteScroll = async () => {
      // console.log("scrollHeight" + document.documentElement.scrollHeight);
      // console.log("innerHeight" + window.innerHeight);
      // console.log("scrollTop" + document.documentElement.scrollTop);

      let scrollTop = document.documentElement.scrollTop;
      let innerhight = window.innerHeight;
      let scrollHeight =  document.documentElement.scrollHeight

      try {
        if (
          innerhight + scrollTop + 1 >= scrollHeight-400
         
        ) {
          setLoading(true);
          setPage((prev) => prev + 1);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      
      window.addEventListener("scroll", handelInfiniteScroll);
      return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);
  
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
                    <li className="breadcrumb-item active" aria-current="page">Department</li>
                  </ol>
                </nav>
  

                <h4 className="h4-sm steelblue-color">Departments</h4>

              </div>
            
        </div>
      </div>


      <section id="doctors-1" className=" doctors-section division">


        <div className="container">


          <div className="row">




            <div className="col-lg-10 offset-lg-1 section-title">
              {/* Title 	*/}
              {/* <h3 className="h3-md steelblue-color">Our Medical Specialists</h3>
*/}

            </div>


            <div className="row">
              <div className="col-md-9 text-center">
                <div className='row'>

<Departmentpage movieInfo={card} />

                </div>
                <div className="all-doctors mb-40">
                <a href="all-doctors.html" className="btn btn-blue blue-hover">
                 Show more
                </a>
              </div>

              </div>

              <div className='col-md-3'>

           <Contactform />
              </div>

              
            </div>



          </div>
        </div>
      </section>
    </>

  )
}


  
export default page



