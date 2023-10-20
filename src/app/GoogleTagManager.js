'use client'

import Script from 'next/script';

export default function GoogleTagManager(){

    return (
        <>
            {process.env.NODE_ENV !== 'development' && (
            <>
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-PRBF8ZEVYX`}
                />
                <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: ` window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-PRBF8ZEVYX');
                    `,
                }}
                />
            </>
            )} 
        </>
    )
}