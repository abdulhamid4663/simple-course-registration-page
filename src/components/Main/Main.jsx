import { useState } from "react";
import { useEffect } from "react";
import Courses from "../Courses/Courses";
import Details from "../Details/Details";

const Main = () => {
    const [courses, setCourses] = useState([]);
    const [hours, setHours] = useState(0);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [totalUSD, setTotalUSD] = useState(0);

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
            setRemaining(remaining - course.credit)
            
            const newSelectedCourses = [...selectedCourses, course];
            setSelectedCourses(newSelectedCourses);
            
            setHours(hours + course.credit)

            setTotalUSD(totalUSD + course.price);

        }
    }
    
    return (
        <div className="lg:flex gap-6 justify-center">
            <Courses courses={courses} handleSelectedCourses={handleSelectedCourses}/>
            <Details remaining={remaining} selectedCourses={selectedCourses} hours={hours} totalUSD={totalUSD}/>
        </div>
    );
};

export default Main;