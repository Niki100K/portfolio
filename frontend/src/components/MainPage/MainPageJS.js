import { useState } from 'react'

const MainPageJS = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const form = [
        {   
            id: 'name',
            field: 'name',
            value: formData.name,
            maxSymbols: 30,
            label: 'Full Name'
        },
        {   
            id: 'email',
            field: 'email',
            value: formData.email,
            maxSymbols: 30,
            label: 'Email'
        },
    ]
    const handleForm = (field, e, maxSymbols) => {
        let value = e.target.value
        value = value.length > maxSymbols ? value.slice(0, maxSymbols) : value

        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }
  return {
    formData,
    form,
    handleForm
  }
}

export default MainPageJS
