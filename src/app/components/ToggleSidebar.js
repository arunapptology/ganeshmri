
"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import SearchComponent from './SearchComponent';


const ToggleSidebar = () => {


    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }




    return (



  
        <>
            <div className="">

                <span className='side-nav-open' onClick={ToggleSidebar} >
                    <img

                        src={`${process.env.BASE_URL}/images/menu.png`}
                    />

                </span>

                <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
               
                    <div className="sd-header">
                     
                    <div className='row'>
                        <div className='col-12'>

                    <h5>Search Test</h5>

                    <form autoComplete="off">

<SearchComponent />

<hr />
</form>

                      
                    </div>
                    </div>


                    
                        <span className='toggle-clise-tag' onClick={ToggleSidebar}>&times;</span>
                    </div>
                    <div className="sd-body">
                        {/* <ul>
                            <li>
                                 <Link className="sd-link" href={`/dactors`}><button className="btn custom-btn3">Talk to doctor </button></Link>
                         </li>
                                <li><a className="sd-link">Menu Item 2</a></li>
                                <li><a className="sd-link">Menu Item 3</a></li>
                                <li><a className="sd-link">Menu Item 4</a></li>
                                <li><a className="sd-link">Menu Item 5</a></li>
                                <li><a className="sd-link">Menu Item 6</a></li>
                                <li><a className="sd-link">Menu Item 7</a></li>
                                <li><a className="sd-link">Menu Item 8</a></li>
                            </ul> */}


                        <nav className="clearfix">
                            <ul className="wsmenu-list" onClick={ToggleSidebar}>
                                <li><Link href={`/`}> Home </Link> </li>
                                <li aria-haspopup="true"><Link href="/about">About </Link></li>
                                <li><Link href="/health-packages"> Health Packages </Link> </li>

                                <li><Link href="/blogs"> Blogs </Link> </li>
                            
                           
                                <li><Link href={`/department`}>Departments </Link></li>
                                <li><Link href="/contact-us"> Contact us </Link> </li> 
                              
                                <li>
                                            <Link href={`/dactors`}><button className="btn custom-btn3">Talk to doctor </button></Link>
                                        </li>

                                <li>
                                    <Link href={`http://182.75.60.195/Download/PatientLogin.aspx`}>
                                        <button className='btn custom-btn2'>online report </button>
                                    </Link></li>
                            </ul>
                        </nav>

                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>

        </>
    )
}

export default ToggleSidebar



