import { courses } from "../../data/courses"
import Cards from "../../components/Cards/Cards"
import CourseCard from "../../components/Cards/CourseCard"

import "./courses.css"

export default function Courses(){

    return (
        <main className="courses">
            <section>
                <h1>Tečajevi</h1>
            </section>
            <section>
                <div>
                    <input/>
                </div>
                <div className="drop-downs-cont">
                    <select></select>
                    <select></select>
                    <select></select>
                </div>
            </section>
            <Cards list={courses} Card={CourseCard}/>
        </main>
    )
}