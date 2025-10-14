import { Link } from "react-router-dom";

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
                <div className="links">
                    <Link to="/courses"><button>Pogledaj tečajeve</button></Link>
                    <Link to="/contact"><button className="action-button">Kontaktiraj nas</button></Link>
                </div>
            </section>
            <section>
                <h3>Izdvojeni tečajevi</h3>
                <Cards list= {filteredCourses} Card={CourseCard}/>
            </section>
        </main>
    )
}