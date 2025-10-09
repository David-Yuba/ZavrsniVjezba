import { useNavigate } from "react-router-dom"
import Tags from "../Tags/Tags"
import Tag from "../Tags/Tag"
/* {
    id: 1,
    title: "React 101",
    category: "Frontend",
    level: "Beginner",
    durationHours: 12,
    shortDescription: "Uvod u React i komponentni pristup.",
    longDescription:
      "Detaljan uvod u JSX, komponente, props, state, evente i osnovni lifecycle. Praktični mini-projekti.",
    price: 129,
    image: "https://placehold.co/600x400?text=React+101",
    startDates: ["2025-11-01", "2025-12-05"]
} */

const imageDebugStyling = {
    maxWidth: "300px",
}

export default function CourseCard({course}){
    
    let openDetails = useNavigate();

    return (
        <div className="card">
            <img /* style = {imageDebugStyling} */ src={course.image}/>
            <div className="card-body">
                <h6>{course.title}</h6>
                <Tags>
                    <Tag>{course.category}</Tag>
                    <Tag>{course.level}</Tag>
                    <Tag>{`${course.durationHours}h`}</Tag>
                </Tags>
                <p>{course.shortDescription}</p>
                <div className="price-and-button-cont">
                    <p>{`${course.price}€`}</p>
                    <button onClick = {() => openDetails(`/course-details/:${course.id}`)}>Detalji</button>
                </div>
            </div>
        </div>
    )
}