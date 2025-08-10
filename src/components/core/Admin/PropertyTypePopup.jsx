import React from 'react';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

const obj = {
    name : "",
    description : ""
}

const PropertyTypePopup = ({data, setData, close}) => {
  if (!open) return null;

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [addData, setAddData] = React.useState(obj);

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [editData, seteditData] = React.useState(data);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-2/5 shadow-lg space-y-5">
        {/* Heading and close button */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-black">
              {editData?.name.length > 0 ? 'Edit Property Type' : 'Create Property Type'}
            </h3>
            <p className="text-sm text-gray-600">
              {editData?.name.length > 0
                ? 'Update the property type details below'
                : 'Fill out the details to create a new property type'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {close(false); setData(null)}}
            className="cursor-pointer"
          >
            <ClearOutlinedIcon />
          </button>
        </div>

        {/* Form fields */}
        <form className="space-y-4 mt-2">
          <div>
            <label className="block font-medium text-sm text-gray-700">
              Property Type Name
            </label>
            <input
              type="text"
              value={ editData?.name.length > 0 ? editData?.name : addData?.name}
              onChange={(e) =>
                editData?.name.length > 0 ? seteditData((prev) => ({ ...prev, name: e.target.value })) : setAddData((prev) => ({...prev, name: e.target.value}))
              }
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-700">
              Description
            </label>
            <textarea
              value={editData?.name.length > 0 ? editData?.description : addData?.description}
              onChange={(e) => editData?.name.length > 0 ? seteditData((prev) => ({ ...prev, description: e.target.value })) : setAddData((prev) => ({...prev, description: e.target.value}))}
              rows={3}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </form>

        {/* Action buttons */}
        <div className="flex justify-end mt-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {close(null); setData(null)}}
              className="font-semibold hover:bg-gray-100 flex items-center gap-2 cursor-pointer shadow shadow-gray-400 border border-gray-400 px-3 py-1.5 rounded-lg"
            >
              <CancelOutlinedIcon fontSize="small" />
              Cancel
            </button>

            <button
              type="button"
              onClick={""}
              className="flex items-center gap-2 bg-black hover:bg-gray-900 cursor-pointer text-white px-3 py-1.5 rounded-lg shadow shadow-gray-400"
            >
              <TaskAltOutlinedIcon fontSize="small" />
              { editData?.name.length > 0 ? 'Update' : 'Create'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypePopup;
