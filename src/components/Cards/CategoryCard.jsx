import { useNavigate } from "react-router-dom"
const debugDevStyle = {
    maxWidth: "300px",
}
export default function CategoryCard({course}){
    const navigate = useNavigate();
    return(
        <div className="card">
            <img /* style = {debugDevStyle} */ src={`https://placehold.co/600x400?text=${course}`}/>
            <div className="card-body">
                <h6>{course}</h6>
                <p>Pregledaj tečajeve iz kategorije {course}.</p>
                <button onClick={() => navigate(`/courses?category=${course}`)}>Otvori</button>
            </div>
        </div>
    )
}