import "./cards.css";

export default function Cards({list, Card}){

    return (
        <section className="cards">
            {list.map((course, index) => (
                <Card key={index} course = {course}/>
            ))}
        </section>
    )
}