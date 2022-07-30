import React from 'react'
import {useForm} from "react-hook-form";

export default function Form() {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  
  return (
    <section>
        <div className="register">
           <div className="col-1">
            <h2>Sign In</h2>
            <span>register and enjoy our service</span>
            
            <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)} >
           
      <input {...register("firstName", { required: true, maxLength: 20 })} placeholder='First Name' />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder='Last Name'p/>
      <input type="number" {...register("age", { min: 18, max: 99 }) } placeholder="Age" />
      <button className='btn'>Sign In</button>
         </form>
              
           </div>
            
        </div>
    </section>
  )
}

