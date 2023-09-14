import { useState } from "react";
import { useEffect } from "react";
import Courses from "../Courses/Courses";
import Details from "../Details/Details";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            if(course.credit > remaining) {
                return toast.error(`You have ${remaining} hr remaining`);
            }

            toast.success(`${course.title} is selected`);
            setRemaining(remaining - course.credit);
            
            const newSelectedCourses = [...selectedCourses, course];
            setSelectedCourses(newSelectedCourses);
            
            setHours(hours + course.credit);

            setTotalUSD(totalUSD + course.price);
        } else {
            return toast.error(`${course.title} is already selected`);
        }
    }
    
    return (
        <div className="lg:flex gap-6 justify-center">
            <ToastContainer 
                pauseOnHover = {false}
            />
            <Courses courses={courses} handleSelectedCourses={handleSelectedCourses}/>
            <Details remaining={remaining} selectedCourses={selectedCourses} hours={hours} totalUSD={totalUSD}/>
        </div>
    );
};

export default Main;