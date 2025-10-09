//import { formData } from "./formData";

import TextInput from "./FormFields/textInput";
import SelectInput from "./FormFields/SelectInput";
import TextareaInput from "./FormFields/TextareaInput";
import CheckboxInput from "./FormFields/CheckboxInput";

import  useFormData from "./formData";

import "./formStyling.css";
/* form data
    name: "",
    email: "",
    phone: "",
    about: "",
    message: "",
    gdpr: false
*/
export default function Form(){
    
    const {fData: [data, setData], errors: [error, setErrors]} = useFormData();
    
    function createControlData(fieldName){
        const controlData = {valuePointer: data[fieldName], setValue: setData, errorPointer: error[fieldName], setError: setErrors}
        return controlData;
    }

    function validateName(value, field){
        if(!value.includes(" ")){
            const message = "Unesite valjano ime";
            setErrors(v =>v[field].includes(message) ? v : {...v, [field]:[...v[field], message]})
        }
        else{
            const message = "Unesite valjano ime";
            setErrors(v => ({...v, [field]: v[field].filter(m => m !== message)}))
        }
    }
    function validateEmail(value, field){
        if(!value.includes("@")){
            const message = "Unesite valjani email";
            setErrors(v =>v[field].includes(message) ? v : {...v, [field]:[...v[field], message]})
        }
        else{
            const message = "Unesite valjani email";
            setErrors(v => ({...v, [field]: v[field].filter(m => m !== message)}))
        }
    }
    function validateNumber(value, field){
        if(isNaN(Number(value))){
            const message = "Unesite valjani broj telefona";
            setErrors(v =>v[field].includes(message) ? v : {...v, [field]:[...v[field], message]})
        }
        else{
            const message = "Unesite valjani broj telefona";
            setErrors(v => ({...v, [field]: v[field].filter(m => m !== message)}))
        }
        if(value.length < 9){
            const message = "Broj mora imati 9 znamenki";
            setErrors(v =>v[field].includes(message) ? v : {...v, [field]:[...v[field], message]})
        }
        else{
            const message = "Broj mora imati 9 znamenki";
            setErrors(v => ({...v, [field]: v[field].filter(m => m !== message)}))
        }
    }
    function validateGdpr(value, field){
        if(!value){
            const message = "Uvjete morate prihvatiti";
            setErrors(v =>v[field].includes(message) ? v : {...v, [field]:[...v[field], message]})
        }
        else{
            const message = "Uvjete morate prihvatiti";
            setErrors(v => ({...v, [field]: v[field].filter(m => m !== message)}))
        }
    }

    function onSubmit(e){
        e.preventDefault();
        let errorFlag = false;
        for (const er in error)
            if (error[er].length != 0 && er !=="phone") errorFlag=true;
        for (const da in data)
            if (data[da].length == 0 && da !=="phone") errorFlag=true;

        if(!errorFlag) console.log(data);
    }
    return (
        <form onSubmit={onSubmit}>
            <TextInput name="name" validateData={validateName} formControlData={createControlData("name")} htmlProps={{placeholder:"npr. Ana Anić"}}>Ime i prezime</TextInput>
            <TextInput name="email" validateData={validateEmail} formControlData={createControlData("email")} htmlProps={{placeholder:"ana@example.com"}}>Email</TextInput>
            <TextInput name="phone" validateData={validateNumber} formControlData={createControlData("phone")} htmlProps={{placeholder:"+385 91 123 4567"}}>Telefon(opcionalno)</TextInput>
            <SelectInput name="about" formControlData={createControlData("about")} >Tema</SelectInput>
            <TextareaInput name="message" formControlData={createControlData("message")} htmlProps={{placeholder:"Opišite pitanje..."}}>Poruka</TextareaInput>
            <CheckboxInput name="gdpr" validateData={validateGdpr} formControlData={createControlData("gdpr")} >Prihvaćam uvjete obrade podataka</CheckboxInput>
            <button type="submit">Pošalji</button>
        </form>
    )
}