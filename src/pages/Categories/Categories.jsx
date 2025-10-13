import { courses } from "../../data/courses.js"

import Cards from "../../components/Cards/Cards.jsx"
import CategoryCard from "../../components/Cards/CategoryCard.jsx"

export default function Categories(){
    const categories = courses.map((course) => course.category).reduce((acc,c) => !acc.includes(c) ? [...acc,c] : [...acc], [])

    return (
        <main className="categories">
            <section>
                <h1>Kategorije</h1>
            </section>
            <Cards list={categories} Card={CategoryCard}/>
        </main>
    )
}