import { useParams, useNavigate } from "react-router-dom";

import { courses } from "../../data/courses"

import Tag from "../../components/Tags/Tag";
import Tags from "../../components/Tags/Tags";
import { useEffect } from "react";

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
    const id = Number(useParams().courseId.slice(1));
    const course = courses.find((c) => c.id === id);

    const nav = useNavigate();

    useEffect(function(){
        window.scrollTo(0,0);
    }, [])

    return (
        <main>
            <button onClick={() => nav("/courses")}>← Natrag</button>

            <section>
                <h1>{course.title}</h1>
                <img src={course.image}/>
            </section>
            <Tags>
                <Tag>{course.category}</Tag>
                <Tag>{course.level}</Tag>
                <Tag>{`${course.durationHours}h`}</Tag>
            </Tags>
            <section>
                <p>Cijena: {course.price} €</p>
                <p>{course.longDescription}</p>
            </section>
            <section>
                <h3>Što dobivate</h3>
                <ul>
                    <li>Praktične vježbe i mini projekte</li>
                    <li>Materijali i snimke predavanja</li>
                    <li>Podrška i Q&A</li>
                </ul>
            </section>
            <section>
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
            </section>
        </main>
    )
}