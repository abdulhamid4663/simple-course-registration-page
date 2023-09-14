import { useState } from "react";
import { useEffect } from "react";
import Courses from "../Courses/Courses";
import Details from "../Details/Details";

const Main = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function loadData() {
            const res = await fetch('data.json');
            const data = await res.json();
            
            setCourses(data);
        }

        loadData()
    }, [])
    
    return (
        <div className="md:flex gap-6 justify-center">
            <Courses courses={courses}/>
            <Details />
        </div>
    );
};

export default Main;