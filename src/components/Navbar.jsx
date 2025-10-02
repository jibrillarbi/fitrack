import React from 'react'

const Navbar = () => {
  return (
    <div>

      <div className='flex fixed w-full top-0 bg-gray-700 p-5 justify-between'>

        <div className='text-lg font-extrabold'>
          <span className='text-green-600'>Fin</span>Trackr
        </div>
        <div className=' flex gap-5'>
          <button className='btn btn-m'>Log In</button>
          <button className='btn btn-m'>Sign Up</button>
        </div>
      </div>


    </div>
  )
}

export default Navbar