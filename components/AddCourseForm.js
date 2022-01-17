import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

const url = "http://student-manager-backend.herokuapp.com";

function AddCourseForm({ addCourse, closeModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const response = await axios.get(`${url}/courses`);
      setCourses(response.data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Team Lead
            </label>

            <select
              id="grid-team-lead"
              type="text"
              placeholder="e.g Arpitha"
              required={true}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              {courses.map(function (course) {
                let { _id, name } = course;
                return (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                );
              })}
            </select>
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
            onClick={(e) => addTeam({ e, selectedCourse })}
          >
            Save Changes
          </button>
        </div>
      </form>
    );
  }
}

export default AddCourseForm;
