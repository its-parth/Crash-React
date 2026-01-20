import Course from './Course'

const Courses = (props) => {
    const {courses} = props;
    return (
        <div className="courses-container w-5/6 flex flex-wrap justify-center gap-4 mt-2 mb-3">
            {
                courses.map(course => <Course key={course.id} course={course} />)
            }
        </div>
    )
}

export default Courses;