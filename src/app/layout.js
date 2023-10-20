
import  Script  from 'next/script';

import '../../public/css/style.css'

import '../../public/css/bootstrap.min.css'

import '../../public/css/owl.carousel.min.css'
import '../../public/css/magnific-popup.css'
import '../../public/css/dropdown-effects/fade-down.css'
import '../../public/css/menu.css'
import '../../public/css/flaticon.css'

import '../../public/css/owl.theme.default.min.css'
import '../../public/css/jquery.datetimepicker.min.css'
import '../../public/css/responsive.css'

import Headers from './components/headers';

import Footers from './components/footers';


import { Providers } from "./redux/provider";

<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet"></link>



import GoogleTagManager from './GoogleTagManager';

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

  

export default function RootLayout({ children }) {

	

  return (
    <html lang="en">
<meta name="google-site-verification" content="1UCRZ2WUmjmKopZiF9nn9JQ1tlHXOaYGTSxLcvB5H1c" />
		<GoogleTagManager />

      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>


      <body className='backgroundBanner'>

	  <div id="page" className="page">
	  <Providers>
<Headers/>


{children}

<Footers/>
</Providers>

</div>
		</body>
		<Script src={`${process.env.BASE_URL}js/customfunction.js`}></Script>
  
  <Script src={`${process.env.BASE_URL}js/jquery-3.3.1.min.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/bootstrap.min.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/modernizr.custom.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/jquery.easing.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/jquery.appear.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/jquery.stellar.min.js`}></Script>




    
	
	<Script src={`${process.env.BASE_URL}js/jquery.scrollto.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/materialize.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/owl.carousel.min.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/jquery.magnific-popup.min.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/imagesloaded.pkgd.min.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/isotope.pkgd.min.js`}></Script>
	{/* <Script src={`${process.env.BASE_URL}js/hero-form.js`}></Script> */}


{/* 	
	<Script src={`${process.env.BASE_URL}js/contact-form.js`}></Script> */}
	{/* <Script src={`${process.env.BASE_URL}js/comment-form.js`}></Script> */}
	<Script src={`${process.env.BASE_URL}js/appointment-form.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/jquery.datetimepicker.full.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/jquery.validate.min.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/jquery.ajaxchimp.min.js`}></Script>
	<Script src={`${process.env.BASE_URL}js/wow.js`}></Script>


    


    </html>
  )
}
