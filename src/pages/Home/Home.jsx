import { courses } from "../../data/courses";
import Cards from "../../components/Cards/Cards.jsx";
import CourseCard from "../../components/Cards/CourseCard.jsx";

import "./home.css"

export default function Home(){
    const filteredCourses = courses.filter((c, index) => (index === 0 || index === 1 || index == 2) ? 1 : 0);
    
    return (
        <main className="home">
            <section>
                <h1>Izdvojeni tečajevi</h1>
                <p>Učite moderne tehnologije kroz praktične tečajeve</p>
                <button>Pogledaj tečajeve</button>
                <button className="action-button">Kontaktiraj nas</button>
            </section>
            <section>
                <h3>Izdvojeni tečajevi</h3>
                <Cards list= {filteredCourses} Card={CourseCard}/>
            </section>
        </main>
    )
}