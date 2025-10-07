import { courses } from "../../data/courses"

import Tag from "../../components/Tags/Tag";
import Tags from "../../components/Tags/Tags";

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

export default function CourseDetails(){
    const course = courses[6];
    return (
        <div>
            <button>← Natrag</button>
            <h1>{course.title}</h1>
            <img src={course.image}/>
            <Tags>
                <Tag>{course.category}</Tag>
                <Tag>{course.level}</Tag>
                <Tag>{`${course.durationHours}h`}</Tag>
            </Tags>
            <p>Cijena: {course.price} €</p>
            <p>{course.longDescription}</p>
            <h3>Što dobivate</h3>
            <ul>
                <li>Praktične vježbe i mini projekte</li>
                <li>Materijali i snimke predavanja</li>
                <li>Podrška i Q&A</li>
            </ul>
            <h3>Termini</h3>
            <table>
                <thead>
                    <tr>
                        <th>Datum početka</th>
                        <th>Cijena</th>
                    </tr>
                </thead>
                <tbody>
                    {course.startDates.map((date)=>(
                        <tr key={date}>
                            <td>{date}</td>
                            <td>{course.price} €</td>
                        </tr>))}
                </tbody>
            </table>
            
            <button>Prijavi se</button>
        </div>
    )
}