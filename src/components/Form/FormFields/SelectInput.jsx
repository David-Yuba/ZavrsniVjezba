export default function SelectInput({children, formControlData, name}){

    function handleChange(e){
        formControlData.setValue((v) => ({...v,[e.target.name]: e.target.value}));
    }

    return (
        <div>
            <h4>{children}</h4>
            <select name={name} value={formControlData?.valuePointer} onChange={handleChange} >
                <option value={0}>Odaberite...</option>
                <option value={1}>Upisi</option>
                <option value={2}>Tečaj</option>
                <option value={3}>Plaćanje</option>
                <option value={4}>Ostalo</option>
            </select>
        </div>
    )
}