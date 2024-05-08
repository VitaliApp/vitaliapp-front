'use client'
 import { useForm } from 'react-hook-form'
 import { useState } from 'react'
 import AddBtn from '../../home/components/Add-button'
import { createChronicDeseaseAPI } from '../api/ChronicDeseases'


export default function ChronicForm () {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [showItem, setShowItem] = useState([])

    const onSubmitCreateChronicDesease = handleSubmit(async (data) => {
        console.log(data, "dataaa");
        const res = await createChronicDeseaseAPI(data);
        console.log(res, "res");
        if (!res) {
          console.log("ERROR EN ACTUAIZAR");
        } else {
          console.log("TODO OK");
          const chronic = data.chronicDesease;
          // 2. Agregar el valor (medicine) al array del estado (showItem)
          showItem.push(chronic);
          // 3. Actualizar el estado (showItem) mediante su función (setShowItem)
          setShowItem([...showItem]);
          reset();
        }
      });

    // const onSubmit = (data) => {
    //     // 1. Sacar el valor (medicine) del objeto data
    //     const chronic = data.chronic
    //     // 2. Agregar el valor (medicine) al array del estado (showItem)
    //     showItem.push(chronic)
    //     // 3. Actualizar el estado (showItem) mediante su función (setShowItem)
    //     setShowItem([...showItem])
    //     reset();
    // }

    const handleDelete = (index) => {
        const updatedItems = [...showItem];
        updatedItems.splice(index, 1);
        setShowItem(updatedItems);
    };
    
    return (
        <form onSubmit={onSubmitCreateChronicDesease}
            className="py-3 px-1 h-32 lg:h-44 lg:px-2 bg-white shadow-md shadow-violet-400 rounded mb-2 mx-0.5">
            <div className="flex flex-row justify-between mb-2 lg:my-2">
                 <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">Enfermedades Cronicas</h3>
            </div>
            <div className='flex flex-row'>
                <input type="text" placeholder="Ingresa una a una" 
                className="mr-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs"
                {...register('chronicDesease', {
                required: {value: true, message: 'Este campo es requerido'},
                maxLength: {value: 18, message: 'Ingresa 18 carácteres cómo máximo.'},
                minLength: {value: 3, message: "Ingresa 3 carácteres cómo mínimo."}
                })}
                />
                {errors.chronicDesease?.message && 
                <span className='col-start-1 col-end-4 text-pink-600 text-xs'>
                    {errors.chronicDesease.message}
                </span>
                }
                <button type='submit' disabled={errors.chronicDesease?.type}
                        className="mr-1">
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