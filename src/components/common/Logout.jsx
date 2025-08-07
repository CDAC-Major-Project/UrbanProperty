import React from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Logout = ({close}) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Confirm Logout</h3>
          <button
            onClick={() => close(false)}
            className="text-gray-500 hover:text-gray-700 cursor-pointer "
          >
            <CloseOutlinedIcon fontSize="small" />
          </button>
        </div>
        <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
        <div className="flex justify-end space-x-3">
            <button
              onClick={() => close(false)}
              className=" bg-red-500 hover:bg-red-600 cursor-pointer px-4 py-2 rounded-lg text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={""}
              className="px-4 py-2 rounded-lg hover:bg-[#5C5F9D] bg-[#2E3192] text-white transition-colors"
            >
              Logout
            </button>
          </div>
      </div>
    </div>
  );
};

export default Logout;
