import React from "react";
import { useDispatch} from "react-redux";
import { setJoke } from "../Redux/Store/Jokeslice";
import { CgCloseO } from "react-icons/cg";

function JokeDisplay({ data, datacatagory, onClose, onNext }) {
  const dispatch = useDispatch();

  return (
    <div className="relative rounded-md p-6 bg-gradient-to-r from-[#1d3c5c] to-[#000]">
      <div className="text-center py-2">
        <h2 className="text-3xl mb-4 text-white capitalize font-bold">
          {datacatagory}
        </h2>
      </div>
      <div className="border-2 border-gray-800 rounded-md">
        <div className="p-1 pt-10">
          <div className="text-center">
            <p className="text-xl md:text-3xl font-bold text-blue-100">"{data}"</p>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              className="bg-blue-700 px-4 py-2 my-2 mx-3 cursor-pointer lg:w-96 md:w-96 rounded-md hover:bg-blue-600 font-bold"
              onClick={() => onNext()}
            >
              Next Joke
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(setJoke(""));
          onClose();
        }}
        className="absolute text-white top-2 right-4"
      >
        <CgCloseO size={30} />
      </button>
    </div>
  );
}
export default JokeDisplay;
