import CourseList from "./CourseList";

export const metadata = {
    title: "CodePion Courses",
    description: "explore our courses"
};
 
 async function getCourses() {
    const res = await fetch("https://codepion.com/api/courses", {
       next: {revalidate: 60},
    });
    if (!res.ok) throw new Error("Failed to fetch courses!");
    return res.json();
}

export default async function CoursesPage() {
    const courses = await getCourses();
    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1>Courses</h1>
            <CourseList courses={courses} />
        </div>
    )
}