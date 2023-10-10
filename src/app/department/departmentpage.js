import React from 'react'

import Loading from '../Loading';
import Link from 'next/link';

import ReactLoader from '../ReactLoader';


const departmentpage = ({ movieInfo }) => {


  return (
   <>
    {
    movieInfo && movieInfo.map((items) => (
      <div className="col-md-6 col-lg-4 col-6">
        <div className="doctor-1">
          <div className="hover-overlay text-center">

            <img
              className="img-fluid"
              
              src={`https://www.sanbio.nl/media/catalog/product/placeholder/default/placeholder-image-600p.webp`}
              alt={items.txtName}
            />
            <div className="item-overlay" />
            <div className="profile-link">
              <Link
                className="btn btn-sm btn-tra-white black-hover"
                href={`/department/${items.txtURL}`}
                title=""
                scroll={false}
              >
                View More Info
              </Link>
            </div>
          </div>
          <div className="doctor-meta">
          <Link
                className="btn btn-sm btn-tra-white black-hover"
                href={`/department/${items.txtURL}`}
                title=""
                scroll={false}
              >
            <h5 className="h5-sm steelblue-color">{items.txtName}</h5>
            <span className="blue-color">{items.txtShortDescription}</span>
            </Link>
          </div>
        </div>
      </div>
    ))
  }

<Loading />
</>
  )
}

export default departmentpage