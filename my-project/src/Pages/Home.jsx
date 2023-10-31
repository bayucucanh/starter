import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadingActions } from "../store/Actions";
import { mockApiCall } from "../api";

export default function Home() {
  const { isLoading } = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      dispatch(loadingActions(true));
      await mockApiCall();
    } catch (error) {
      alert("Server Error");
    } finally {
      dispatch(loadingActions(false));
    }
  };

  return (
    <div className="p-10">
      {isLoading && <p>Loading....</p>}
      <button
        disabled={isLoading}
        onClick={handleSave}
        class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-80"
      >
        Save changes
      </button>
    </div>
  );
}
