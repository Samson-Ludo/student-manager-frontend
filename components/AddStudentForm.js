import React, { useState } from "react";

function AddStudentForm({ addStudent, closeModal }) {
  const [name, setName] = useState("");
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Name
          </label>
          <input
            required={true}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-name"
            type="text"
            placeholder="e.g Samson"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => closeModal()}
        >
          Close
        </button>
        <button
          className="bg-blue-700 hover:bg-blue-500 border-transparent h-auto text-xl font-bold py-3 px-6 text-white w-auto rounded-full"
          type="submit"
          onClick={(e) => addStudent({ e, name })}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default AddStudentForm;
