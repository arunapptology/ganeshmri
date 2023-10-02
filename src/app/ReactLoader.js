import React from 'react'
import ContentLoader, { Instagram } from 'react-content-loader'

const ReactLoader = () => {
  return (
    <div><ContentLoader
    height={250}
    width={310}
    speed={1}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
   >
  
  <rect x="15" y="0" rx="4" ry="4" width="320" height="362" />
  <rect x="15" y="70" rx="4" ry="4" width="320" height="60" />
   </ContentLoader>
   
   <ContentLoader
    height={250}
    width={310}
    speed={1}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
   >
  
  <rect x="15" y="0" rx="4" ry="4" width="320" height="362" />
  <rect x="15" y="70" rx="4" ry="4" width="320" height="60" />
   </ContentLoader>
    
  
   <ContentLoader
    height={250}
    width={310}
    speed={1}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
   >
  
  <rect x="15" y="0" rx="4" ry="4" width="320" height="362" />
  <rect x="15" y="70" rx="4" ry="4" width="320" height="60" />
   </ContentLoader>
  </div>
  )
}

export default ReactLoader