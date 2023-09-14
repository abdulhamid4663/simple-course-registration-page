import PropTypes from 'prop-types';
import Course from '../Course/Course';

const Courses = ({ courses, handleSelectedCourses }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:w-3/4 pb-24'>
            {
                courses.map(course => <Course key={course.id} course={course} handleSelectedCourses={handleSelectedCourses} />)
            }
        </div>
    );
};

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    handleSelectedCourses: PropTypes.func.isRequired,
}

export default Courses;