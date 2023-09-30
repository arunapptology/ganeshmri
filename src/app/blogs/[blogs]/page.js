"use client" ;
import React, { useState , useEffect } from 'react'

const page = ({params}) => {

const slug = params.blogs;

const [blogDetail , setBlogDetails] = useState(null);

const fetchBlogs = async () => {
const response = await fetch(`https://www.ganeshmri.com/admin/api/blogsgetdetails/${slug}`)
const data = await response.json();
setBlogDetails(data);
}

useEffect(() => {
fetchBlogs()
}, [])
  
return ( 
<>

<div id="breadcrumb" className="division">
					
<div className="container">
    <div className="breadcrumb-holder">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item"><a href="blog-listing.html">Our Blog</a></li>
                <li className="breadcrumb-item active" aria-current="page">Blog Post</li>
            </ol>
        </nav>

    
        <h4 className="h4-sm steelblue-color">{blogDetail&&blogDetail.txtName}</h4>

    </div>
 

</div>		
</div>	



<div id="single-blog-page" className="wide-100 blog-page-section division">
<div className="container">
<div className="row">


<div className="col-lg-8">  
    <div className="single-blog-post pr-30">

    
        <div className="blog-post-img mb-40">
            <img className="img-fluid" 
            src={`${blogDetail&&blogDetail.imageurl}/${blogDetail&&blogDetail.txtBnrDsktp}`} 
            alt="blog-post-image" />		
        </div>	



        <div className="sblog-post-txt">

        <div dangerouslySetInnerHTML={{__html: blogDetail&&blogDetail.txtDescription}}></div>

            <div className="post-share-links">
                
                <div className="post-share-list">
                    <ul className="share-social-icons clearfix">	
                        <li><a href="#" className="share-ico ico-like"><i className="far fa-thumbs-up"></i> Like</a></li>										
                        <li><a href="#" className="share-ico ico-facebook"><i className="fab fa-facebook-f"></i> Share</a></li>
                        <li><a href="#" className="share-ico ico-twitter"><i className="fab fa-twitter"></i> Tweet</a></li>	
                        <li><a href="#" className="share-ico ico-google-plus"><i className="fab fa-pinterest-p"></i> Pin It</a></li>					
                        <li><a href="#" className="share-ico ico-google-plus"><i className="fab fa-google-plus-g"></i> Share</a></li>
                    </ul>
                </div>

            </div>	
            

        </div>


    

    






    </div>
</div>			 		



<aside id="sidebar" className="col-lg-4">

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



    <div className="popular-posts sidebar-div mb-50">
            

        <h5 className="h5-sm steelblue-color">Popular Posts</h5>

        <ul className="popular-posts">
        
    
            <li className="clearfix d-flex align-items-center">


                <img className="img-fluid" 
                src={`${process.env.BASE_URL}/images/blog/latest-post-1.jpg`}
                alt="blog-post-preview" />

    
                <div className="post-summary">
                    <a href="single-post.html">Etiam sapien accumsan molestie ante empor ...</a>
                    <p>43 Comments</p>
                </div>

            </li>
            
        
            <li className="clearfix d-flex align-items-center">

        
                <img className="img-fluid"
                    src={`${process.env.BASE_URL}/images/blog/latest-post-2.jpg`} 
                    alt="blog-post-preview" />

        
                <div className="post-summary">
                    <a href="single-post.html">Blandit tempor sapien ipsum, porta justo ...</a>
                    <p>38 Comments</p>
                </div>

            </li>
            

            <li className="clearfix d-flex align-items-center">
                <img className="img-fluid" 
                src={`${process.env.BASE_URL}/images/blog/latest-post-3.jpg`} 
                alt="blog-post-preview" />
                <div className="post-summary">
                    <a href="single-post.html">Cursus risus laoreet turpis auctor varius ...</a>
                    <p>29 Comments</p>
                </div>

            </li>
        </ul>

    </div>
</aside>	
</div>	
</div>	 
</div>	



</>
)
}

export default page  