'use client'

 import { useForm } from 'react-hook-form';
 import { useState } from 'react';
 import AddBtn from '@/app/features/home/components/Add-button';

 export default function BloodForm() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [showItem, setShowItem] = useState([])

  const onSubmit = (data) => {
  // 1. Sacar el valor (allergie) del objeto data
  const bloodGroup = data.bloodGroup
  // 2. Agregar el valor (allergie) al array del estado (showItem)
  showItem.push(bloodGroup)
  // 3. Actualizar el estado (showItem) mediante su función (setShowItem)
  setShowItem([...showItem])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
        className="py-3 px-1 h-32 lg:h-56 lg:pr-2 lg:pl-4 shadow-md shadow-violet-400 rounded mb-2 mx-0.5 bg-white">
        <div className="flex flex-row mb-2 lg:my-2">
            <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">Grupo Sanguineo</h3>
            <div className="ml-8">
                <button type='submit' value='Guardar'
                className='btn btn-sm btn-outline btn-primary text-xs'>
                    Guardar
                </button>
            </div>
        </div>
            <div className="flex flex-col m-3">
                <div className="flex flex-row mb-2.5 lg:my-3 space-x-6 my-1 lg:my-2">
                    <label className="inline-flex items-center">
                        <input className="radio radio-sm radio-primary"
                        type="radio" value="A+" name="bloodType"
                            
                        {...register("bloodGroup")}
                        />
                        <span className="ml-1 text-sm">A+</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input className="radio radio-sm radio-primary"
                        type="radio" value="A-" name="bloodType"
                            
                        {...register("bloodGroup")}
                        />
                        <span className="ml-1 text-sm">A-</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input className="radio radio-sm radio-primary"
                        type="radio" value="B+" name="bloodType"
                            
                        {...register("bloodGroup")}
                        />
                        <span className="ml-1 text-sm">B+</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input className="radio radio-sm radio-primary"
                        type="radio" value="B-" name="bloodType"
                            
                        {...register("bloodGroup")}
                        />
                        <span className="ml-1 text-sm">B-</span>
                    </label>
                </div>
                <div className="flex flex-row space-x-4 my-1 lg:my-2">
                    <label className="inline-flex items-center">
                        <input className="radio radio-sm radio-primary"
                        type="radio" value="AB+" name="bloodType"
                            
                        {...register("bloodGroup")}
                        />
                        <span className="ml-1 text-sm">AB+</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input className="radio radio-sm radio-primary"
                        type="radio" value="AB-" name="bloodType"
                            
                        {...register("bloodGroup")}
                        />
                        <span className="ml-1 text-sm">AB-</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input className="radio radio-sm radio-primary"
                        type="radio" value="O+" name="bloodType"
                            
                    {...register("bloodGroup")}
                    />
                    <span className="ml-1 mr-1 text-sm">O+</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input className="radio radio-sm radio-primary"
                        type="radio" value="O-" name="bloodType"
                                
                        {...register("bloodGroup")}
                        />
                        <span className="ml-1 text-sm">O-</span>
                    </label>
                </div>
            </div>
        {showItem.map((item, key) => {
        return (
            <p key={key}>{item}</p>
        )
        })}
    </form>
  )
 }