import { courses } from "../../data/courses"

import Cards from "../../components/Cards/Cards"
import CategoryCard from "../../components/Cards/CategoryCard"

export default function Categories(){
    const categories = courses.map((course) => course.category).reduce((acc,c) => !acc.includes(c) ? [...acc,c] : "", [])

    return (
        <main className="categories">
            <section>
                <h1>Kategorije</h1>
            </section>
            <Cards list={categories} Card={CategoryCard}/>
        </main>
    )
}