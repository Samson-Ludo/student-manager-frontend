import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    AppBar,
    SingleCard,
    StudentPageHeader,
    FormModal,
    AddCourseForm,
    Loader,
} from "../../../components";

const url = "http://student-manager-backend.herokuapp.com";

function index({id}) {
    const [isLoading, setIsLoading] = useState(false);
    const [allCourses, setAllCourses] = useState([]);
    const [currentStudent, setCurrentStudent] = useState({})
    const [curentStudentName, setCurrentStudentName] = useState("");
    const [currentCourses, setCurrentCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const getCourses = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(url + "/students/" + id);
            setCurrentStudent(response.data)
            setCurrentStudentName(response.data.name)
            setCurrentCourses(response.data.courses)
            const response2 = await axios.get(url + "/courses/");
            setAllCourses(response2.data)
            setIsLoading(false);
        }
        catch (error) {
            console.log({ error })
        }
    };


    const addCourse = async ({e, selectedCourseId}) => {
        e.preventDefault();
        console.log({currentStudent, selectedCourseId})
        const updatedStudent = (currentStudent.courses.length === 0 ) ? {name: currentStudent.name, courses: [selectedCourseId]}: {name: currentStudent.name, courses: [...currentStudent.courses, selectedCourseId]}
        console.log(updatedStudent)
        try {
            const res = await axios.put(`${url}/students/${id}`, updatedStudent);
            console.log(res.data)
            closeModal();
            getCourses();
        }
        catch (error) {
            console.log({ error })
        }
    };

    useEffect(() => {
        getCourses()
    }, [id])

    if (isLoading) {
        return <Loader />;
    } else {
        return (
            <>
                <AppBar />
                <StudentPageHeader studentName={curentStudentName} />
                <button
                    className="bg-blue-700 hover:bg-blue-500 mb-5 border-transparent h-auto text-xl font-bold py-3 px-6 text-white w-auto rounded-full"
                    type="button"
                    onClick={() => openModal()}
                >
                    Add Course
                </button>

                <FormModal
                    formTitle="Add Course"
                    closeModal={closeModal}
                    showModal={showModal}
                >
                    <AddCourseForm addCourse={addCourse} closeModal={closeModal} />
                </FormModal>

                {currentCourses?.map((courseId) => {
                    let currentCourse = allCourses.find((course) => course._id === courseId);
                    let { name, _id } = currentCourse;

                    return (
                        <SingleCard
                            key={_id}
                            id={_id}
                            name={name}
                            viewLink='#'
                        />
                    );
                })}
            </>
        )
    }
}

export async function getServerSideProps(context) {
    return {
      props: { id: context.params.id}, 
    }
  }

export default index
