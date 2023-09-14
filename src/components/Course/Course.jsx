import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi'
import { BiBookOpen } from 'react-icons/bi'


const Course = ({ course, handleSelectedCourses }) => {
    const { id, cover_img, title, description, price, credit } = course;

    return (
        <div>
            <div className="card bg-white p-4">
                <figure>
                    <img src={cover_img} alt={`image of ${title}`} className="rounded-lg w-full" />
                </figure>
                <div>
                    <h2 className="text-[#1C1B1B] text-lg font-semibold mt-4 mb-3">{title}</h2>
                    <p className='text-[#1C1B1B99] text-sm font-normal mb-5'>{description}</p>
                    <div className="flex justify-between items-center mb-6">
                        <div className='flex items-center gap-3'>
                            <p><FiDollarSign className='w-6 h-6' /></p>
                            <p className='text-[#1C1B1B99] text-base font-medium'>Price : ${price}</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p><BiBookOpen className='w-6 h-6'/></p>
                            <p className='text-[#1C1B1B99] text-base font-medium'>Credit : {credit}hr</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <button onClick={()=> handleSelectedCourses(id, course)} className="btn bg-[#2F80ED] hover:bg-[#2F80ED] text-white normal-case text-lg font-semibold w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectedCourses: PropTypes.func.isRequired,
}

export default Course;