//import { formData } from "./formData";

import TextInput from "./FormFields/textInput";
import SelectInput from "./FormFields/SelectInput";
import TextareaInput from "./FormFields/TextareaInput";
import CheckboxInput from "./FormFields/CheckboxInput";

import "./formStyling.css";

export default function Form(){

    return (
        <form>
            <TextInput htmlProps={{placeholder:"npr. Ana Anić"}}>Ime i prezime</TextInput>
            <TextInput htmlProps={{placeholder:"ana@example.com"}}>Email</TextInput>
            <TextInput htmlProps={{placeholder:"+385 91 123 4567"}}>Telefon(opcionalno)</TextInput>
            <SelectInput>Tema</SelectInput>
            <TextareaInput htmlProps={{placeholder:"Opišite pitanje..."}}>Poruka</TextareaInput>
            <CheckboxInput>Prihvaćam uvjete obrade podataka</CheckboxInput>
            <button type="submit">Pošalji</button>
        </form>
    )
}