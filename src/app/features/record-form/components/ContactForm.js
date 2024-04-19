'use client'

 import { useForm } from 'react-hook-form'
 import { useState } from 'react'
 import AddBtn from '../../home/components/Add-button'

export default function ContactForm () {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [showItem, setShowItem] = useState([])

    const onSubmit = (data) => {
        // 1. Sacar el valor (medicine) del objeto data
        const contactName = data.contactName
        const contactNumber = data.contactNumber
        // 2. Agregar el valor (medicine) al array del estado (showItem)
        showItem.push(contactName + ' - ' + contactNumber)
        // 3. Actualizar el estado (showItem) mediante su función (setShowItem)
        setShowItem([...showItem])
        reset()
    }

    const handleDelete = (index) => {
        const updatedItems = [...showItem];
        updatedItems.splice(index, 1);
        setShowItem(updatedItems);
    };
 
    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className="py-3 px-1 h-32 lg:h-56 lg:px-2 bg-white shadow-md shadow-violet-400 rounded mb-2 mx-0.5">
            <div className="flex flex-row justify-between mb-2 lg:my-2">
                 <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">Contacto de Emergencia</h3>
            </div>
            <div className='flex flex-row'>
                <div className='block mr-2 space-y-2'>
                <input type="text" placeholder="Nombre de contacto" 
                className="mr-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs"
                {...register('contactName', {
                required: {value: true, message: 'Este campo es requerido'},
                maxLength: {value: 18, message: 'Ingresa 18 carácteres cómo máximo.'},
                minLength: {value: 3, message: "Ingresa 3 carácteres cómo mínimo."}
                })}
                />
                    {errors.contactName?.message && 
                    <span className='col-start-1 col-end-4 text-pink-600 text-xs'>
                        {errors.contactName.message}
                    </span>
                    }
                <input type="text" placeholder="Numero de telefono" 
                className="mr-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs"
                {...register('contactNumber', {
                required: {value: true, message: 'Este campo es requerido'},
                maxLength: {value: 18, message: 'Ingresa 18 carácteres cómo máximo.'},
                minLength: {value: 3, message: "Ingresa 3 carácteres cómo mínimo."}
                })}
                />
                </div>
                    {errors.contactNumber?.message && 
                    <span className='col-start-1 col-end-4 text-pink-600 text-xs'>
                        {errors.contactNumber.message}
                    </span>
                    }
                <button type='submit' disabled={errors.contactNum?.type}
                    >
                        <AddBtn />
                </button>
            </div>
            
            {showItem.map((item, index) => {
            return (
                <div key={index}
                className='flex justify-between m-1 pl-3 pr-1 rounded-full bg-gray-200'>
                <p >{item}</p>
                <button type='button' onClick={() => handleDelete(index)}
                className='rounded-full text-primary hover:bg-gray-300 px-2'>x</button>
                </div>
            )
            })}
        </form>
    )
}