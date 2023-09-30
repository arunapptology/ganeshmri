import React, { useEffect, useState } from 'react'

const SearchComponent = () => {

    const [search, setSearch] = useState();

    const [searchResult, setSearchResult] = useState(null);

    
  async function  HandleSearch  (e) {
    setSearch(e)
    const response = await fetch(` https://www.ganeshmri.com/admin/api/searchList/${e}`)
    const data = await response.json();

    setSearchResult(data)
 
}


  return (
  <>
  
  <input type="text" 
   
   value={search}
  
   onChange={(e)=>HandleSearch(e.target.value)}
   
   id="search-bar"  placeholder="Find a test" />
                                 <div className='search-result'>
                                 <ul>
                                     {/* <h5>Health package</h5> */}

                                     {
                                        searchResult&&searchResult.map((items)=>(

                                            <li>{items.txtName}</li>
                                            
                                        )


                                        ) 
                                        
                                     }
                                    
                                 </ul>
                              </div>
                                

  </>
 
  )
}

export default SearchComponent