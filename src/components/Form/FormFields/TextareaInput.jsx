export default function TextareaInput({children, htmlProps}){

    return (
        <div>
            <h4>{children}</h4>
            <textarea placeholder = {htmlProps.placeholder}></textarea>
        </div>
    )
}