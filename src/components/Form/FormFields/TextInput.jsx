const errorStyling = {
    color: "red",
}

export default function TextInput({children, validateData, htmlProps, formControlData, name}){
    
    function handleChange(e){
        validateData(e.target.value, e.target.name)
        formControlData.setValue((v) => ({...v,[e.target.name]: e.target.value}));
    }

    return(
        <div>
            <h4>{children}</h4>
            <input name={name} value={formControlData?.valuePointer} onChange={handleChange} placeholder = {htmlProps.placeholder}/>
            <div>
                {formControlData?.errorPointer.map((er, index) => (<p key={index} style ={errorStyling}> {er} </p>))}
            </div>
        </div>
    )
}