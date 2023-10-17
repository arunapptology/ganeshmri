"use client"
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
  
  
const page = () => {

    const [blogs, setBlogs] = useState(null);

    const fetchBlogs = async () => {
        const response = await fetch('https://admin.ganeshparamedicalcollege.com/api/blogs')
        const data = await response.json();
        setBlogs(data);
    }


    console.log(blogs);


    useEffect(() => {

        fetchBlogs()


    }, [])

    const regex = /(<([^>]+)>)/gi


   
    return (

       
        <div>

<title>My page title</title>
<meta property="og:title" content="My page title" key="title" />
<meta
  name="description"
  content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
/>

{/*  */}
            <div id="breadcrumb" className="division">
                <div className="container">
             
                
                            <div className=" breadcrumb-holder">


                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>

                                
                                            
                                            </li>
                                        <li className="breadcrumb-item active" aria-current="page">Our Blogs & Latest News</li>
                                    </ol>
                                </nav>


                                <h4 className="h4-sm steelblue-color">Our Blogs & Latest News</h4>

                            </div>
                       
                </div>
            </div>



            <div id="blog-page" className="wide-100 blog-page-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="posts-holder pr-30">

                                {
                                    blogs && blogs.map((itemBlog) => {
                                        return (
                                            <div className="blog-post">
                    <div className="blog-post-img">
                            <img className="img-fluid" 
                            src={itemBlog.imageurl + '/' + itemBlog.txtBnrDsktp}
                            alt={itemBlog.txtImageAltTag} />

                                                </div>
                                                <div className="blog-post-txt">
                                                    <h5 className="h5-xl steelblue-color"><Link href={`blogs/${itemBlog.txtURL}`}>{itemBlog.txtName}</Link></h5>
                                                    <span> 
                                                        {new Date(itemBlog.created_at).toDateString()}
                                                    </span>
                                                    <span> <b>Dr.Ravin Sharma</b></span>
                                                    <p>  
                                                        {itemBlog.txtDescription.slice(0, 200).replace(regex, "")} ...

                                                        
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }



{/* 
                                <div className="blog-page-pagination b-top">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-center primary-theme">
                                            <li className="page-item disabled"><a className="page-link" href="#" tabindex="-1"><i className="fas fa-long-arrow-alt-left"></i></a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1 <span className="sr-only">(current)</span></a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a> </li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item next-page"><a className="page-link" href="#"><i className="fas fa-long-arrow-alt-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div> */}



                            </div>
                        </div>




                        <aside id="sidebar" className="col-lg-4">
                            {/* <div id="search-field" className="sidebar-div mb-50">
                                <div className="input-group mb-3">
                                    <input type="text"
                                        className="form-control" placeholder="Search"
                                        aria-label="Search" aria-describedby="search-field" />
                                    <div className="input-group-append">
                                        <button className="btn" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div> */}




<div className="popular-posts sidebar-div mb-50">
                                <h5 className="h5-sm steelblue-color">Popular Posts</h5>
                                <ul className="popular-posts">



                                {
                                blogs && blogs.map((itemBlog) => {
                                    return (
                                        <li className="clearfix d-flex align-items-center">
                                        <img className="img" src={itemBlog.imgthumburl + '/' + itemBlog.txtBnrDsktp} alt="blog-post-preview" />
                                        <div className="post-summary">
                                            <Link href="single-post.html">
                                                {itemBlog.txtDescription.slice(0, 100).replace(regex, "")} ...
                                                </Link>
                                            <p>43 Comments</p>
                                        </div>
                                    </li>

                                    )
                                })
                            }



                                  





                                    
                                </ul>
                            </div>

                            <div className="blog-categories sidebar-div mb-50">
                                <h5 className="h5-sm steelblue-color">Categories</h5>
                                <ul className="blog-category-list clearfix">
                                    <li><a href="#"><i className="fas fa-angle-double-right blue-color"></i> Elderly Care</a> <span>(5)</span></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right blue-color"></i> Lifestyle</a> <span>(13)</span></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right blue-color"></i> Medical</a> <span>(6)</span></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right blue-color"></i> Treatment </a> <span>(8)</span></li>
                                    <li><a href="#"><i className="fas fa-angle-double-right blue-color"></i> Pharma</a> <span>(12)</span></li>
                                </ul>
                            </div>





                            {/* <h5 className="h5-sm steelblue-color">The Heart Of Clinic</h5>

                            {
                                blogs && blogs.map((itemBlog) => {
                                    return (
                                        <div id="txt-widget" className="sidebar-div mb-50">

                                            <div className="txt-widget-unit mb-15 clearfix d-flex align-items-center">
                                                <div className="txt-widget-avatar">
                                                    <img
                                                        className="img-fluid" src={itemBlog.imgthumburl + '/' + itemBlog.txtBnrDsktp}
                                                        alt={itemBlog.txtImageAltTag} />
                                                </div>
                                                <div className="txt-widget-data">
                                                    <h5 className="h5-md steelblue-color">Dr. Jonathan Barnes</h5>
                                                    <span>Chief Medical Officer, Founder</span>
                                                    <p className="blue-color">1-800-1234-567</p>
                                                </div>
                                            </div>
                                            <p className="p-sm"> <p>  {itemBlog.txtDescription.slice(0, 100).replace(regex, "")} ...
                                            </p>
                                            </p>
                                            <a href="about.html" className="btn btn-blue blue-hover">Learn More</a>
                                        </div>
                                    )
                                })
                            } */}



                            






                           

                            {/* <div className="tags-cloud sidebar-div mb-50">
                                <h5 className="h5-sm steelblue-color">Tags Cloud</h5>
                                <span className="badge"><a href="#">Effective Treatment</a></span>
                                <span className="badge"><a href="#">Molecular Biology</a></span>
                                <span className="badge"><a href="#">Diagnostic</a></span>
                                <span className="badge"><a href="#">Pediatrics</a></span>
                                <span className="badge"><a href="#">Lifestyle</a></span>
                                <span className="badge"><a href="#">Pharma</a></span>
                                <span className="badge"><a href="#">Medicine</a></span>
                                <span className="badge"><a href="#">Research</a></span>
                            </div> */}

                            {/* <div className="sidebar-timetable sidebar-div mb-50">
                                <h5 className="h5-md mb-20 steelblue-color">Doctors Timetable</h5>

                                <p className="p-sm">Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor at
                                    tempus feugiat dolor lacinia cursus nulla vitae massa
                                </p>
                                <a href="about.html" className="btn btn-blue blue-hover mt-10">View Timetable</a>
                            </div>
                            <div className="image-widget sidebar-div">
                                <a href="#">
                                    <img className="img-fluid" src="images/blog/image-widget.jpg" alt="image-widget" />
                                </a>
                            </div> */}
                        </aside>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default page

