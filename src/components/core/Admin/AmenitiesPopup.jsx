import React from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const obj = {
  name: "",
  description: "",
  isActive : true
};
const AmenitiesPopup = ({ data, setData, close }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [addData, setAddData] = React.useState(obj);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [editData, seteditData] = React.useState(data);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold">
              {editData?.name.length > 0 ? "Edit Amenity" : "Create Amenity"}
            </h2>
            <p className="text-sm text-gray-600">
              {editData?.name.length > 0
                ? "Update the amenity details below."
                : "Add a new amenity to your platform."}
            </p>
          </div>
          <button
            type="button"
            className="cursor-pointer text-black"
            onClick={() => {
              close(false);
              setData(null);
            }}
          >
            <ClearOutlinedIcon />
          </button>
        </div>
        {/* Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Amenity Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              value={editData?.name.length > 0 ? editData?.name : addData?.name}
              onChange={(e) =>
                editData?.name.length > 0
                  ? seteditData((prev) => ({ ...prev, name: e.target.value }))
                  : setAddData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={
                editData?.name.length > 0
                  ? editData?.description
                  : addData?.description
              }
              onChange={(e) =>
                editData?.name.length > 0
                  ? seteditData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  : setAddData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
              }
              placeholder="Describe this amenity..."
              required
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isActiveModal" // Different ID to avoid conflict with table switch
              className="h-4 w-4 accent-black border-gray-300 rounded"
              checked={ editData?.name.length > 0 ? editData?.isActive : addData?.isActive}
              onChange={(e) =>
                editData?.name.length > 0 ? seteditData((prev) => ({...prev, isActive: e.target.checked})) : setAddData((prev) => ({...prev, isActive: e.target.checked}))
              }
            />
            <label
              htmlFor="isActiveModal"
              className="text-sm font-medium text-gray-700"
            >
              Active
            </label>
          </div>
          {/* Modal Footer Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              className="font-semibold hover:bg-gray-100 flex items-center gap-2 cursor-pointer shadow shadow-gray-400 border border-gray-400 px-3 py-1.5 rounded-lg"
             onClick={() => {close(null); setData(null)}}
            >
            <CancelOutlinedIcon fontSize="small" />
              Cancel
            </button>
            <button
              type="button"
              onClick={""}
              className="flex items-center gap-2 bg-black hover:bg-gray-900 cursor-pointer text-white px-3 py-1.5 rounded-lg shadow shadow-gray-400"
            >
              {editData?.name.length > 0 ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AmenitiesPopup;
