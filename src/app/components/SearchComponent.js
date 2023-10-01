import React, { useState } from 'react'
import Link from 'next/link';

import { useGetSearchResultQuery } from '../redux/services/postApis';

const SearchComponent = () => {

  const [search, setSearch] = useState();

  // const [searchResult, setSearchResult] = useState(null);

  const [variable, setVariable] = useState(null);

  const { data: searchResult, isLoading } = useGetSearchResultQuery(search);


  async function HandleSearch(e) {

    if (e.length >= 2) {
      setVariable(e)
    } else {
      setVariable(null)
    }
    setSearch(e)
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
        autoComplete="off"
      />

      {variable !== null ?
        <div className='search-result' >
          <ul onClick={handleSearchResultBox}>
            {

isLoading&&isLoading?'': searchResult && searchResult.map((items, i) => (
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
        : ''}


    </>

  )
}

export default SearchComponent