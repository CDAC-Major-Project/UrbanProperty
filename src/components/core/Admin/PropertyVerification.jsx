import React from 'react'
import CountUp from 'react-countup';

const PropertyVerification = () => {
  return (
    <div className='my-10 space-y-5 ' >
      <div>
        <h1 className='text-black text-2xl font-semibold' >Property Verification</h1>
        <p className='text-gray-600'>Review and verify property listings submitted by sellers</p>
      </div>

      <div className='grid grid-cols-3 gap-5' >
        {/* Pending Verifications */}
        <div className="space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <h5 className="font-medium text-xl">Pending Verifications</h5>

          <div>
            <p className="text-4xl font-semibold text-red-500 ">
              <CountUp duration={5} end={89} />
            </p>
            <p className='text-sm text-gray-500' >Properties awaiting review</p>
          </div>
        </div>

        {/* Verified Properties Today */}
        <div className="space-y-5 border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5 col-span-1">
          <h5 className="font-medium text-xl">Verified Today</h5>

          <div>
            <p className="text-4xl font-semibold text-green-500 ">
              <CountUp duration={5} end={12} />
            </p>
            <p className='text-sm text-gray-500' >Properties approved</p>
          </div>
        </div>
      </div>


      {/* property table */}
      <div className='border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5' >
        <div>
          <h5 className="font-semibold text-xl">Property Verification</h5>
          <p className='text-sm text-gray-500' >Properties waiting for verification</p>
        </div>
      </div>

    </div>
  )
}

export default PropertyVerification