import Card from "./Card";

export default function Cards({courseList}){


    return (
        <div>
            {courseList.map((course) => (
                <Card course = {course}/>
            ))}
        </div>
    )
}