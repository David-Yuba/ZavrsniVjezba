export default function TextInput({children, htmlProps}){

    return(
        <div>
            <h4>{children}</h4>
            <input placeholder = {htmlProps.placeholder}/>
        </div>
    )
}