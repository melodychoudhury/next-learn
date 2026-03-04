'use client';

export default function CourseList({courses}) {
    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1>Courses</h1>
            <ul className="space-y-4">
                {courses.map((course) => {
                    return (
                        <li key={course.id}>
                            {course.title}
                            {course.description}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}