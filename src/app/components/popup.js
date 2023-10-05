

import React, { useState } from 'react'
import Modal from 'react-modal' 

const popup = () => {

    

    const [isOpen, setIsOpen] = useState(true)
   

    const customStyles = {
       overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
       },
       content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
       }
    }

  return (
    <div style={{width:'500px'}}>
         <button onClick={() => setIsOpen(true)}>Open Modal</button>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>

        

            <div className='modal-body'>
            <div className="modal-body">
  <div className="text-right">
    {" "}
    <i className="fa fa-close close" data-dismiss="modal" />{" "}
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="text-center mt-2">
        <img src="https://i.imgur.com/3dG6dJo.jpg" width={200} />
      </div>
    </div>
    <div className="col-md-6">
      <div className="text-white mt-5">
        <h1 className="mb-0">Premium</h1>
        <span className="intro-1">Take your writing to next level</span>
        <div className="mt-4">
          <span className="intro-2">
            Gain access to analytic tools, desktop apps, templates,
            read-through, features, and autp-translate all for the price of a
            pro subscription
          </span>
        </div>
        <div className="mt-4 mb-5">
          <button className="btn btn-primary">
            25% off premium <i className="fa fa-long-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

                
                
                 </div>

            <div className='modal-footer'>
          
            <button className='btn btn-danger' onClick={() => setIsOpen(false)}>Close</button>
            </div>
            
         </Modal>
      </div>
  )
}

export default popup


