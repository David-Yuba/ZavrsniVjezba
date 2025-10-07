import { courses } from "../../data/courses";
import Cards from "../../components/Cards/Cards";
import CourseCard from "../../components/Cards/CourseCard";

export default function Home(){

    return (
        <div>
            <div>
                <h1>Izdvojeni tečajevi</h1>
                <p>Učite moderne tehnologije kroz praktične tečajeve</p>
                <button>Pogledaj tečajeve</button>
                <button>Kontaktiraj nas</button>
            </div>
            <div>
                <h3>Izdvojeni tečajevi</h3>
                <Cards list= {courses} Card={CourseCard}/>
            </div>
        </div>
    )
}