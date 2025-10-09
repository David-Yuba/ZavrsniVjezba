export default function TextareaInput({children, htmlProps, formControlData, name}){

    function handleChange(e){
        formControlData.setValue((v) => ({...v,[e.target.name]: e.target.value}));
    }
    return (
        <div>
            <h4>{children}</h4>
            <textarea name={name} value={formControlData?.valuePointer} onChange={handleChange}  placeholder = {htmlProps.placeholder} rows={6}></textarea>
        </div>
    )
}