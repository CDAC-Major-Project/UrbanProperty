import React from 'react'

const Navbar = () => {
  return (
    <div className=' absolute left-1/2 -translate-x-1/2 z-30 border border-amber-300 flex w-11/12 max-w-maxContent items-center justify-between py-2 ' >
        {/* logo */}
        
        {/* links */}
        <div>
            <nav>
                <ul className='flex flex-row items-center' >
                    <li>Home</li>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>

        {/* buttons */}
        <div className=' flex flex-row gap-5 items-center ' >
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>
            <button className='bg-green-500 text-white px-4 py-2 rounded'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar