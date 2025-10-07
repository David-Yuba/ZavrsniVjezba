export default function Cards({list, Card}){

    return (
        <div>
            {list.map((course) => (
                <Card key={list.id} course = {course}/>
            ))}
        </div>
    )
}