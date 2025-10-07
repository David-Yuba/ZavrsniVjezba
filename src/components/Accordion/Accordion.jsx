export default function Accordion({ children, question}){

    return (
        <div>
            <p>{question}</p>
            <p>{children}</p>
        </div>
    )
}