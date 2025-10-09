const errorStyling = {
    color: "red",
}

export default function CheckboxInput({children, validateData, formControlData, name}){

    function handleChange(e){
        validateData(e.target.checked, e.target.name);
        formControlData.setValue((v) => ({...v,[e.target.name]: e.target.checked}));
    }
    return(
        <div>
            <input name={name} value={formControlData?.valuePointer} onChange={handleChange} id={name} type="checkbox"/>
            <label htmlFor={name}>{children}</label>
            <div>
                {formControlData?.errorPointer.map((er, index) => (<p key={index} style ={errorStyling}> {er} </p>))}
            </div>
        </div>
    )
}