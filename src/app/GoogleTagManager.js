import React from 'react'
import  Script  from 'next/script';

  
const GoogleTagManager = () => {
  return (
    <>

      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-PRBF8ZEVYX');
        `}
      </Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-PRBF8ZEVYX" />




    </>
  )
}

export default GoogleTagManager