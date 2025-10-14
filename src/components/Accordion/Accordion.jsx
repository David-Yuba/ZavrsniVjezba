import { useState } from "react"

import "./accordion.css";



export default function Accordion({ children, question}){

    const [ isActive, setIsActive] = useState(false)

    return (
        <div className="accordion" onClick={() => setIsActive(v => !v)}>
            <div>
                <p>{question}</p>
                {isActive ? <p>-</p> : <p>+</p>}
            </div>
            <p className={isActive ? "active" : ""}>{children}</p>
        </div>
    )
}