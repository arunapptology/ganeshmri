"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { removeCart } from '../redux/cartSlice';
import Link from 'next/link';


const page = () => {

    
const dispatch = useDispatch();  

   
    // cart data
const item = useSelector((state) => state);


const handleRemove = (id)=>{
    dispatch(removeCart(id))

}

console.log(item);

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
                                        <li className="breadcrumb-item"><a href="all-doctors.html">Our Doctors</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Doctor Page</li>
                                    </ol>
                                </nav>


                                <h4 className="h4-sm steelblue-color">Health Packages list</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="container">
                <div className=" ">
                    <div className="row flex-fill">
                        <div className="col-md-9">
                            <div className="ibox">
                                <div className="ibox-title">
                                    <span className="pull-right">

                                    (<strong> {item.carts.CartItems.length ? item.carts.CartItems.length : 0} </strong>) items
                                 
                                    </span>
                                    <h5>Items in your cart</h5>
                                </div>
                                <div className="ibox-content">
                                    <div className="table-responsive">
                                        <table className="table shoping-cart-table">
                                            <tbody>

                                            {   
                                            item.carts.CartItems ?
                                                item.carts.CartItems.map((items, i) => (


                                                    <tr>
                                                    <td width={90}>
                                                        <div className="cart-product-imitation">
                                                        <img
                                                                className="card-img mx-auto d-block"
                                                                src={`${items.imgthumburl}/${items.txtBnrDsktp}`}
                                                                alt={`${items.txtImageAltTag} `}
                                                            />
                                                        </div>
                                                    </td> 
                                                    <td className="desc">
                                                        <Link href={`/health-packages/${items.txtURL}`} >
                                                            <h5>
                                                            {items.txtName.slice(0, 60)}
                                                            
                                                        </h5>
                                                        <p className="small">
                                                        
                            <div dangerouslySetInnerHTML={{__html: items&&items.txtDescription.slice(0, 150)}}></div>... 
                                                        </p>

                                                        </Link>
                                                        
                                                       
                                                    </td> 
                                                    <td>
                              
                                        <s className="small text-muted ">&#x20B9;{items.txtMRP}</s>
                                                    </td>
                                                 
                                                    <td>
                                                        <h4 className='mrpreal'>&#x20B9;{items.txtDiscountedPrice}</h4>
                                                    </td>
                                                    <td width={60}> <div className="m-t-sm">
                                                         
                                                      
                                                         <img onClick={()=>handleRemove(items.id)} 
                                                        className='icon' 
                                                        src={`${process.env.BASE_URL}/images/icons/trash.png`} 
                                                        />
                                                        
                                                     </div></td>
                                                </tr>


                                                    ))
                                                    : 'cart is empty'
                                            }


                                               




                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="ibox">
                                <div className="ibox-title">
                                    <h5>Cart Summary</h5>
                                </div>
                                <div className="ibox-content">
                                    <span>Total</span>
                                    <h2 className="font-bold mrpreal">&#x20B9;{item.carts.totalPrice}</h2>
                                    <hr />
                                    <span className="text-muted small">
                                        *For United States, France and Germany applicable sales tax will
                                        be applied
                                    </span>
                                    <div className="m-t-sm">
                                        <div className="btn-group">
                                            <a href="#" className="btn custom-btn3">
                                                <i className="fa fa-shopping-cart" /> Checkout
                                            </a>
                                            <Link href="/" className="btn custom-btn2">
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="ibox">
                                <div className="ibox-title">
                                    <h5>Support</h5>
                                </div>
                                <div className="ibox-content text-center">
                                    <h5>
                                        <i className="fa fa-phone" /> +43 100 783 001
                                    </h5>
                                    <span className="small">
                                        Please contact with us if you have any questions. We are
                                        avalible 24h.
                                    </span>
                                </div>
                            </div> */}
                            {/* <div className="ibox">
                                <div className="ibox-content">
                                    <p className="font-bold">Other products you may be interested</p>
                                    <hr />
                                    <div>
                                        <a href="#" className="product-name">
                                            {" "}
                                            Product 1
                                        </a>
                                        <div className="small m-t-xs">
                                            Many desktop publishing packages and web page editors now.
                                        </div>
                                        <div className="m-t text-righ">
                                            <a href="#" className="btn btn-xs btn-outline btn-primary">
                                                Info <i className="fa fa-long-arrow-right" />{" "}
                                            </a>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <a href="#" className="product-name">
                                            {" "}
                                            Product 2
                                        </a>
                                        <div className="small m-t-xs">
                                            Many desktop publishing packages and web page editors now.
                                        </div>
                                        <div className="m-t text-righ">
                                            <a href="#" className="btn btn-xs btn-outline btn-primary">
                                                Info <i className="fa fa-long-arrow-right" />{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default page