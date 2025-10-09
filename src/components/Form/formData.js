import { useState } from "react"

export const formData = {
    name: "",
    email: "",
    phone: "",
    about: 0,
    message: "",
    gdpr: false
}
export const error = {
    name: [],
    email: [],
    phone: [],
    about: [],
    message: [],
    gdpr: []
}

export default function useFormData(){
    const [data, setData] = useState(formData);
    const [errors, setError] = useState(error);

    return {fData: [data, setData], errors: [errors, setError]}
}