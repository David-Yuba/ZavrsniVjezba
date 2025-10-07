import { courses } from "../../data/courses"

import Cards from "../../components/Cards/Cards"
import CategoryCard from "../../components/Cards/CategoryCard"

export default function Categories(){
    const categories = courses.map((course) => course.category).reduce((acc,c) => !acc.includes(c) ? [...acc,c] : "", [])

    return (
        <div>
            <h1>Kategorije</h1>
            <Cards list={categories} Card={CategoryCard}/>
        </div>
    )
}