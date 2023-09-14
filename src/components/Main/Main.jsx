import { useState } from "react";
import { useEffect } from "react";
import Courses from "../Courses/Courses";
import Details from "../Details/Details";

const Main = () => {
    const [courses, setCourses] = useState([]);
    const [hours, setHours] = useState(0);
    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(() => {
        async function loadData() {
            const res = await fetch('data.json');
            const data = await res.json();
            
            setCourses(data);
        }

        loadData()
    }, [])

    function handleSelectedCourses(id, course) {
        const isExist = selectedCourses.find(course => course.id === id);

        if(!isExist) {
            setHours(hours + course.credit)
            const newSelectedCourses = [...selectedCourses, course];
            setSelectedCourses(newSelectedCourses);
        }
    }

    return (
        <div className="md:flex gap-6 justify-center">
            <Courses courses={courses} handleSelectedCourses={handleSelectedCourses}/>
            <Details selectedCourses={selectedCourses} hours={hours}/>
        </div>
    );
};

export default Main;