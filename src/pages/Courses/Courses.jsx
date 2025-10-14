import { useState } from "react"

import { courses } from "../../data/courses"
import Cards from "../../components/Cards/Cards.jsx"
import CourseCard from "../../components/Cards/CourseCard.jsx"

import "./courses.css"

export default function Courses(){
    const params = new URLSearchParams(window.location.search)
    const initialSearch = params.get("search");
    const initialCategory = params.get("category");
    const initilLevel = params.get("level");
    const initilOrdering = params.get("ordering");

    const [search, setSearch] = useState(initialSearch ? initialSearch : "");
    const [filters, setFilters] = useState({
        category: initialCategory ? initialCategory : "",
        level: initilLevel ? initilLevel : "",
        ordering: initilOrdering ? initilOrdering : 2
    })
    const categories = courses.map((course) => course.category).reduce((acc,c) => !acc.includes(c) ? [...acc,c] : [...acc], []);
    const levels = courses.map((course) => course.level).reduce((acc,c) => !acc.includes(c) ? [...acc,c] : [...acc], []);
    
    function handleInputChange(e){
        params.set("search", e.target.value);
        setSearch(e.target.value)
        console.log(params.get("search"))
        history.replaceState(null,"",`${window.location.href.split("?")[0]}?search=${e.target.value}&category=${filters.category}&level=${filters.level}&ordering=${filters.ordering}`)
    }
    function handleCategoryChange(e){
        params.set("category", e.target.value);
        setFilters((v) => ({...v, ["category"]:e.target.value}));        
        history.replaceState(null,"",`${window.location.href.split("?")[0]}?search=${search}&category=${e.target.value}&level=${filters.level}&ordering=${filters.ordering}`)
    }
    function handleLevelChange(e){
        params.set("level", e.target.value);
        setFilters((v) => ({...v, ["level"]:e.target.value}))
        history.replaceState(null,"",`${window.location.href.split("?")[0]}?search=${search}&category=${filters.category}&level=${e.target.value}&ordering=${filters.ordering}`)
    }
    function handleOrderChange(e){
        params.set("ordering", e.target.value);
        setFilters((v) => ({...v, ["ordering"]:Number(e.target.value)}))
        history.replaceState(null,"",`${window.location.href.split("?")[0]}?search=${search}&category=${filters.category}&level=${filters.level}&ordering=${e.target.value}`)
    }

    function searchCourses(value){
        return  courses.filter((c) => c.title.toLowerCase().includes(value.toLowerCase()))
    }

    function filterCourses(c){
        let filteredCourses = c;

        if (filters.category != "")
            filteredCourses = filteredCourses.filter((course) => course.category.toLocaleLowerCase() === filters.category.toLocaleLowerCase())
        if (filters.level != "")
            filteredCourses = filteredCourses.filter((course) => course.level.toLocaleLowerCase() === filters.level.toLocaleLowerCase())
        switch(filters.ordering){
            case 0:
                filteredCourses = filteredCourses.sort((a,b) => a.price > b.price ? 1 : a.price == b.price ? 0 : -1);
                break;
            case 1:
                filteredCourses = filteredCourses.sort((a,b) => a.price < b.price ? 1 : a.price == b.price ? 0 : -1);
                break;
            case 2:
                filteredCourses = filteredCourses.sort((a,b) => a.title > b.title ? 1 : a.title == b.title ? 0 : -1);
                break;
        }
        

        return filteredCourses;
    }

    return (
        <main className="courses">
            <section>
                <h1>Tečajevi</h1>
            </section>
            <section>
                <div>
                    <input value={search} onChange={handleInputChange}/>
                </div>
                <div className="drop-downs-cont">
                    <select value={filters.category} onChange={handleCategoryChange}>
                        <option value={""}>Category</option>
                        {categories.map((c)=>
                            <option key={c} value={c}>{c}</option>
                        )}
                    </select>
                    <select value={filters.levels} onChange={handleLevelChange}>
                        <option value={""}>Levels</option>
                        {levels.map((c)=>
                            <option key={c} value={c}>{c}</option>
                        )}
                    </select>
                    <select value={filters.ordering} onChange={handleOrderChange}>
                        <option value={2}>A-Z</option>
                        <option value={1}>Price desc</option>
                        <option value={0}>Price asc</option>
                    </select>
                </div>
            </section>
            <Cards list={filterCourses(searchCourses(search))} Card={CourseCard}/>
        </main>
    )
}