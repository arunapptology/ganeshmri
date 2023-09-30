import React, { useEffect, useState } from 'react'


import Link from 'next/link';

const SearchComponent = () => {

  const [search, setSearch] = useState();

  const [searchResult, setSearchResult] = useState(null);

  const [variable, setVariable] = useState(null);

  async function HandleSearch(e) {

if(e.length>=2){
  setVariable(e)
}else{
  setVariable(null)
}
    setSearch(e)
    const response = await fetch(` https://www.ganeshmri.com/admin/api/searchList/${variable}`)
    const data = await response.json();
    setSearchResult(data)
  }

  const handleSearchResultBox = () => {

    setVariable(null)
    setSearch('')

  }


  return (
    <>

      <input type="text"

        value={search}

        onChange={(e) => HandleSearch(e.target.value)}

        id="search-bar" placeholder="Find a test" 
        autocomplete="off"
        />

        {variable !== null?
      <div className='search-result' >
        <ul onClick={handleSearchResultBox}>
          {/* <h5>Health package</h5> */}
          {
      
            searchResult && searchResult.map((items , i) => (
              <li className='search-link text-dark' key={i}>
                <Link href={`/department-detail/${items.txtURL}`}>

                  <ul>
                    <li> {items.txtName}</li>
                    <li> <s>&#x20B9;  {items.discountedPrice}  </s>
                     <span className='text-black'>
                      &nbsp;
                     &#x20B9; 
                      {items.price} 

                      </span>

                     </li>
                  </ul>
                  </Link>
                </li>
             
            )
            )
            

          }

        </ul>
      </div>
      :''}


    </>

  )
}

export default SearchComponent