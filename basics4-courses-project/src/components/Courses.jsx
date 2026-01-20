import Course from './Course'
import Loader from './Loader';
const Courses = (props) => {
    const {courses} = props;
    return (
        courses.length == 0 ? <Loader /> 
        :
        <div className="courses-container w-5/6 flex flex-wrap justify-center gap-4 mt-2 mb-3">
            {
                courses.map(course => <Course key={course.id} course={course} />)
            }
        </div>
    )
}

export default Courses;