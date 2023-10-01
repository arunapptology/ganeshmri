"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic'
import Loading from '../Loading';

import { 
    useGetCategoryDataQuery, 
    useGetBranchesDataQuery , 
    useGetBlogResultQuery,
    useGetPackageResultQuery 
} from '../redux/services/postApis';


const SearchComponent = dynamic(() => import('./SearchComponent'), {
ssr: false,
loading: () => <Loading />,
})



const headers = () => {

// category data
const { data: catData } = useGetCategoryDataQuery();
const categoryData = catData ?? catData;

// branches data
const { data: branchData } = useGetBranchesDataQuery();
const branchesData = branchData ?? branchData;



const { data: blogData } = useGetBlogResultQuery();

const { data: packageData } = useGetPackageResultQuery(1);




// cart data
const item = useSelector((state) => state);

return (
<>


<header id="header" className="header">
<div className="wsmobileheader clearfix">
<a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>
<span className="smllogo">
<img src={`${process.env.BASE_URL}/images/logo-grey.png`} width="124" height="40"
alt="mobile-logo" /></span>
<a href="tel:123456789" className="callusbtn"><i className="fas fa-phone"></i></a>
</div>
<div className="headtoppart bg-blue clearfix">
<div className="headerwp clearfix">
<marquee>PET/CT Scanner now launched at Ganesh MRI Yamuna Vihar</marquee>
</div>
</div>
<div className="wsmainfull menu clearfix">
<div className="wsmainwp clearfix">
<div className="desktoplogo">
<div className='row'>
<div className='col-md-2'><a href="#hero-6">
    <img src={`${process.env.BASE_URL}/images/logo-grey.png`} width="124" height="40"
        alt="header-logo" />
</a></div>
<div className='col-md-6'>
    <div className="mx-auto custom-search">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0" />
        <form className="search-container" autoComplete="off">

            <SearchComponent />


        </form>
    </div>
</div>
<div className='col-md-4 right-head-sec'>
    <ul>
        <li>
            <Link href={`/dactors`}><button className="btn custom-btn3">Talk to doctor </button></Link>
        </li>
        <li className="y5khq1DT"><a className="R0yMSq_u _uPYWdBx" data-test-selector="pageheader-user-auth-link" href="/sign-in">
            <img src={`${process.env.BASE_URL}/images/user.png`} />
            <span className='text-login'>Sign In</span>
        </a></li>
        <li className='cart-wrap'>
            <div className="menu-wrap">
                <ul className="menu">
                    <li className="menu-item">
                        <text className="cart-active">
                            <img src={`${process.env.BASE_URL}/images/shopping-cart.png`} />
                            <span className="count-style"> {item.carts.CartItems.length ? item.carts.CartItems.length : 0} Items</span>
                        </text>
                        <ul className="drop-menu cart-list-ul ">
                            <li className="drop-menu-item">
                                <table className="table table-image">
                                    {
                                        item.carts.CartItems.length > 0 ?
                                            <thead>
                                                <tr>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            : null
                                    }
                                    <tbody>
                                        {
                                            item.carts.CartItems ?
                                                item.carts.CartItems.map((items, i) => (
                                                    <tr>
                                                        <td className="w-25">
                                                            <img
                                                                className="card-img mx-auto d-block"
                                                                src={`${items.imgthumburl}/${items.txtBnrDsktp}`}
                                                                alt={`${items.txtImageAltTag} `}
                                                            />
                                                        </td>
                                                        <td>{items.txtName.slice(0, 60)}</td>
                                                        <td><b> &#x20B9;{items.txtDiscountedPrice}</b></td>
                                                        <td>
                                                            <img src={`${process.env.BASE_URL}/images/icons/trash.png`} />
                                                            <img src={`${process.env.BASE_URL}/images/user.png`} />
                                                        </td>
                                                    </tr>
                                                ))
                                                : 'cart is empty'
                                        }
                                    </tbody>
                                    {
                                        item.carts.CartItems.length > 0 ?
                                            <tfoot>
                                                <tr>
                                                    <th></th>
                                                    <th>Total Amount </th>
                                                    <th>&#x20B9;</th>
                                                    <th><button className='btn btn-danger'>Checkout</button></th>
                                                </tr>
                                            </tfoot>
                                            : null
                                    }
                                </table>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div></li>
    </ul>
</div>
</div>
</div>
</div>
</div>
<div className='nav-box container'>
<nav className="wsmenu clearfix">
<ul className="wsmenu-list">
<li><Link href={`/`}> Home </Link> </li>
<li aria-haspopup="true"><Link href="/about">About </Link></li>
<li><Link href="/health-packages"> Health Packages </Link> </li>

<li aria-haspopup="true"><Link href={`/department`}>Departments <span className="wsarrow"></span></Link>
<div className="wsmegamenu clearfix halfmenu">
    <div className="container-fluid">
        <div className="row">
            <ul className="col-lg-12 col-md-12 col-xs-12 link-list">





                {categoryData && categoryData.map((items, i) => (
<li key={i}><Link href={`/department/${items.txtURL}`}>{items.txtName}</Link></li>
))}



            </ul>
        </div>
    </div>
</div>
</li>



<li aria-haspopup="true"><a href="#">Branches <span className="wsarrow"></span></a>
<div className="wsmegamenu clearfix halfmenu">
    <div className="container-fluid">
        <div className="row">
            <ul className="col-lg-12 col-md-12 col-xs-12 link-list">



                {branchesData && branchesData.map((items, i) => (

<li key={i}><Link href={`/branches/${items.txtURL}`}>{items.txtName}</Link></li>
)
)}




            </ul>
        </div>
    </div>
</div>
</li>
<li aria-haspopup="true">
<a href="#">Other Services <span className="wsarrow"></span>
</a>
<div className="wsmegamenu clearfix">
    <div className="container">
        <div className="row">
            <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                <li className="title">Quick Links:</li>
                <li><Link href="/blogs"> Blogs </Link> </li>
                <li><Link href="/about"> About us </Link> </li>
                <li><Link href="/contact-us"> Contact us </Link> </li>
                <li><Link href="/health-packages"> health package </Link> </li>
                <li><a href="http://182.75.60.195/Download/PatientLogin.aspx"> Online Report </a> </li>
                <li><Link href="/doctors"> Talk to doctors </Link> </li>
              
       
            </ul>
            <div className="col-lg-5 col-md-12 col-xs-12">
                <h3 className="title">Featured News:</h3>
{
    packageData&&packageData.map((item , i)=>(
<>
                <div key={i} className="fluid-width-video-wrapper"><img
                    src={`${item.imageurl}/${item.txtBnrDsktp}`} alt="featured-news" />
                    </div>
                <h4 className="h5-xs"><a href="#">{packageData.txtName}</a>
                </h4>
               

</>

    ))
}

            </div>
            <div className="col-lg-4 col-md-12 col-xs-12">
                <h3 className="title">Latest News:</h3>
                <ul className="latest-news">

                    {

blogData&&blogData.map((item , i)=>(

    <li className="clearfix d-flex align-items-center">
    <img className="img-fluid" src={`${item.imgthumburl}/${item.txtBnrDsktp}`}
        alt="blog-post-preview" />
    <div className="post-summary">
        <Link href={`/blogs/${item.txtURL}`}>{item.txtName}</Link>
        <div dangerouslySetInnerHTML={{ __html: item.txtDescription.slice(0,50) }}></div>
    </div>
</li>

))
                    }

                </ul>
            </div>
        </div>
    </div>
</div>
</li>
<li>
<Link href={`http://182.75.60.195/Download/PatientLogin.aspx`}>
    <button className='btn custom-btn2'>online report </button>
</Link></li>
</ul>
</nav>
</div>
</header>
</>
)
}
export default headers