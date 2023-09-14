import PropTypes from 'prop-types';
import Course from '../Course/Course';

const Courses = ({courses}) => {
    // const {id, cover_img, title, description, price, credit} = courses;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:w-3/4 pb-24'>
            {
                courses.map(course => <Course key={course.id} course={course}/>)
            }
        </div>
    );
};

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
}

export default Courses;