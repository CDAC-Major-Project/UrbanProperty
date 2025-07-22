import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Tech_Purpose = () => {
  return (
    <div className=' mx-auto w-11/12 flex items-start justify-between py-11' >
      <div className='w-1/2 flex flex-col gap-6 pr-7 ' >
        <h2 className='text-4xl font-bold text-[#0D2A6E] ' >Technology and Purpose</h2>
        <div className='flex flex-col gap-4' >
          <p className='text-[#696969]' >A state-of-the-art innovative property listing and e-auction platform designed specifically for individuals.</p>
          <p className='text-[#696969]' >With a robust architecture, it ensures seamless reliability and accessibility for users via mobile and web interfaces. The platform integrates automated KYC tools and secure payment gateways, facilitating transparent and effective auction processes.</p>
        </div>
  
      </div>

      <div className='w-1/2 flex flex-col gap-4 ' >
        <h2 className='text-4xl font-bold text-[#0D2A6E] ' >Value Delivered</h2>
        <div>
          <p className=' flex items-start gap-3' ><FaArrowRight color='#B994CA' className='mt-1' /> <span className='text-[#696969] font-semibold ' >One convenient solution from “search” to “sale” for all kinds of properties across India</span></p>
          <p className=' flex items-start gap-3' ><FaArrowRight color='#B994CA' className='mt-1' /> <span className='text-[#696969] font-semibold ' >Navigate with ease : Property Search and Auctions made simple</span></p>
          <p className=' flex items-start gap-3' ><FaArrowRight color='#B994CA' className='mt-1' /> <span className='text-[#696969] font-semibold ' >Maximize value : Smart auctions & fair pricing</span></p>
          <p className=' flex items-start gap-3' ><FaArrowRight color='#B994CA' className='mt-1' /> <span className='text-[#696969] font-semibold ' >Transparent and seamless processes</span></p>
          <p className=' flex items-start gap-3' ><FaArrowRight color='#B994CA' className='mt-1' /> <span className='text-[#696969] font-semibold ' >Bank verified titles</span></p>
        </div>
      </div>
    </div>
  )
}

export default Tech_Purpose