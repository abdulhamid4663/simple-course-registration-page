import PropTypes from 'prop-types';

const Details = ({ remaining, selectedCourses, hours, totalUSD }) => {
    let count = 1;
    const totalUsdTwoDecimal = totalUSD.toFixed(2);

    return (
        <div className="lg:w-1/4 mb-20 lg:mb-0">
            <div className="bg-white rounded-lg p-6">
                <h1 className="text-[#2F80ED] text-lg font-bold mb-4">Credit Hour Remaining {remaining} hr</h1>
                <hr />
                <div>
                    <h1 className="text-[#1C1B1B] text-xl font-bold mt-4 mb-5">Course Name</h1>
                    <div className='mb-6'>
                        {
                            selectedCourses.map(course => <p key={course.id} className='text-[#1C1B1B99] text-base font-normal'>{count++} {course.title}</p>)
                        }
                    </div>
                    <hr />
                    <h1 className="text-[#1C1B1BCC] text-base font-medium my-4">Total Credit Hour : {hours}</h1>
                    <hr />
                    <h1 className="text-[#1C1B1BCC] text-base font-semibold mt-4">Total Price : {totalUSD ? `${totalUsdTwoDecimal}` : 0} USD</h1>
                </div>
            </div>
        </div>
    );
};

Details.propTypes = {
    remaining: PropTypes.number.isRequired,
    selectedCourses: PropTypes.array.isRequired,
    hours: PropTypes.number.isRequired,
    totalUSD: PropTypes.number.isRequired,
}

export default Details;