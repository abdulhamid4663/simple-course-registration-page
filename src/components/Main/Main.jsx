import { useState } from "react";
import { useEffect } from "react";
import Courses from "../Courses/Courses";
import Details from "../Details/Details";

const Main = () => {
    const [courses, setCourses] = useState([]);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        async function loadData() {
            const res = await fetch('data.json');
            const data = await res.json();
            
            setCourses(data);
        }

        loadData()
    }, [])

    function handleSelectedCourses(course) {
        setHours(hours + course.credit)
    }
    
    return (
        <div className="md:flex gap-6 justify-center">
            <Courses courses={courses} handleSelectedCourses={handleSelectedCourses}/>
            <Details hours={hours}/>
        </div>
    );
};

export default Main;