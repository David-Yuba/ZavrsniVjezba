import "./cards.css";

export default function Cards({list, Card}){

    return (
        <section className="cards">
            {list.map((course) => (
                <Card key={course.id} course = {course}/>
            ))}
        </section>
    )
}