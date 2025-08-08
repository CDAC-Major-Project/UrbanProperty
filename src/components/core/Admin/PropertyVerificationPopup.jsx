import React from 'react'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

const PropertyVerificationPopup = ({data, cancel}) => {
  return (
    <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50' >
        <div className="bg-white rounded-lg p-6 w-2/5 shadow-lg space-y-5 " >
            {/* heading and cancel button */}
            <div className='flex items-start justify-between' >
                <div>
                    <h3 className='text-2xl font-semibold text-black' >Property Verification</h3>
                    <p className='text-sm text-gray-600' >Review property details and make verification decision</p>
                </div>

                <button 
                    type='button' 
                    onClick={() => cancel(null)}
                    className='cursor-pointer'
                >
                    <ClearOutlinedIcon/>
                </button>
            </div>

            {/* details section */}
            <div className='grid grid-cols-2' >
                <div className='col-span-1' >
                    <h5 className='font-medium text-lg' >Title</h5>
                    <p className='text-gray-600 text-sm ' >{data?.tittle}</p>
                </div>
                <div className='col-span-1' >
                    <h5 className='font-medium text-lg' >Seller</h5>
                    <p className='text-gray-600 text-sm ' >{data?.sellerName}</p>
                </div>
            </div>

            <div className='grid grid-cols-2' >
                <div className='col-span-1' >
                    <h5 className='font-medium text-lg' >Type</h5>
                    <p className='text-gray-600 text-sm ' >{data?.property_type}</p>
                </div>
                <div className='col-span-1' >
                    <h5 className='font-medium text-lg' >Price</h5>
                    <p className='text-gray-600 text-sm ' >₹{data?.price.toLocaleString()}</p>
                </div>
            </div>

            <div className='grid grid-cols-2' >
                <div className='col-span-1' >
                    <h5 className='font-medium text-lg' >Location</h5>
                    <p className='text-gray-600 text-sm ' >{data?.address}, {data?.city}, {data?.state}</p>
                </div>
                <div className='col-span-1' >
                    <h5 className='font-medium text-lg' >Submitted</h5>
                    <p className='text-gray-600 text-sm ' >{new Date(data?.created_at).toLocaleDateString()}</p>
                </div>
            </div>

            {/* action buttons */}
            <div className='flex justify-end mt-10 ' >
                <div className='flex items-center gap-2' >
                    <button
                        type='button'
                        className='font-semibold hover:bg-gray-100 flex items-center gap-2 cursor-pointer shadow shadow-gray-400 border border-gray-400 px-2 py-1.5 rounded-lg'
                        onClick={() => cancel(null)}
                    >
                        <CancelOutlinedIcon fontSize='small' />
                        Cancel
                    </button>

                    <button
                        type='button'
                        className='flex items-center gap-2 bg-black hover:bg-gray-900 cursor-pointer text-white px-2 py-1.5 rounded-lg shadow shadow-gray-400 '
                    >
                        <TaskAltOutlinedIcon fontSize='small' />
                        Approve
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyVerificationPopup