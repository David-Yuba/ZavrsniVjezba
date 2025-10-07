import { courses } from "../../data/courses"
import Cards from "../../components/Cards/Cards"
import CourseCard from "../../components/Cards/CourseCard"

export default function Courses(){

    return (
        <div>
            <h1>Tečajevi</h1>
            <div>
                <input/>
            </div>
            <div>
                <select></select>
                <select></select>
                <select></select>
            </div>
            <Cards list={courses} Card={CourseCard}/>
        </div>
    )
}