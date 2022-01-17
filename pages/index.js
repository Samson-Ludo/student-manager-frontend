import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AppBar,
  SingleCard,
  FormModal,
  AddStudentForm,
  Loader,
} from "../components"

const url = "http://student-manager-backend.herokuapp.com";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState([]);
  // const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getStudents = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url + "/students/");
      setStudents(response.data)
      setIsLoading(false);
    }
    catch (error) {
      console.log({ error })
    }
  };

  const addStudent = async ({ e, name }) => {
    e.preventDefault();
    try {
      const newStudent = { name };
      await axios.post(`${url}/students`, newStudent);
      closeModal();
      getStudents();
    }
    catch (error) {
      console.log({ error })
    }
  };

  useEffect(() => {
    getStudents()
  }, [])

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <AppBar />
        <div className="container mx-auto py-5 px-20 sm:w-full">
          

          <button
            className="bg-blue-700 hover:bg-blue-500 mb-5 border-transparent h-auto text-xl font-bold py-3 px-6 text-white w-auto rounded-full"
            type="button"
            onClick={() => openModal()}
          >
            Add Student
          </button>
          <FormModal
            formTitle="Add Student"
            closeModal={closeModal}
            showModal={showModal}
          >
            <AddStudentForm addStudent={addStudent} closeModal={closeModal} />
          </FormModal>

          {students?.map((student) => {
            const {_id, name, courses} = student

            return (
              <SingleCard
                key={_id}
                id={_id}
                name={name}
                group="student"
                numOfSubGroups={courses.length}
                viewLink={`/student/${_id}`}
              />
            );
          })}
        </div>

      </>
    )
  }
}
