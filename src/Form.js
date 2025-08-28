import React from 'react';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Nav from './Nav';
import Subnav from './subNav';

const schema = yup.object({
    firstname: yup.string(),
    lastname: yup.string().required("Required field"),
    gender: yup.string().required("Gender is required"),
    age: yup.number()
        .transform((value, originalValue) => originalValue === "" ? null : value)
        .nullable()
        .when('gender', {
        is: 'female', // Match the exact value from your radio button
        then: (schema) => schema
            .required("Age is required for females")
            .min(0, "Age must be a positive number")
            .max(100, "Age cannot exceed 100"),
            otherwise: (schema) => schema.nullable(),
        }),
    jobtitle: yup.string().required("Job title is required"),
    other_specify: yup.string()
                .transform((value, originalValue) => originalValue === "" ? null : value)
                .nullable()
                .when('jobtitle', {
                is: 'Others', 
                then: (schema) => schema
                    .required("Others is required"),
                    otherwise: (schema) => schema.nullable(),
                }),
}).required();

function FormPage() {
    const { register, handleSubmit, formState: { errors },watch } = useForm({
        resolver: yupResolver(schema)
    })
    const jobtitle = watch("jobtitle");
    
    const onSubmit = (data) => {
        console.log(data);
    }

    
    return (
        <>
            <Nav />
            <Subnav />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label style={{fontWeight: "bold"}}>First Name&nbsp;</label>
                    <input {...register("firstname")} />
                    <p></p>
                </div>
                <div>
                    <label style={{fontWeight: "bold"}}>Last Name&nbsp;</label>
                    <input {...register("lastname")} />
                    <p className='error'>{errors.lastname?.message}</p>
                </div>
                <div>
                    <label style={{fontWeight: "bold"}}>Gender&nbsp;</label>
                    <input {...register("gender")} type="radio" value="male" /> Male&nbsp;&nbsp;
                    <input {...register("gender")} type="radio" value="female" /> Female
                    <p className='error'>{errors.gender?.message}</p>
                </div>
                <div>
                    <label style={{fontWeight: "bold"}}>Age&nbsp;</label>
                    <input type="number" {...register("age")} />
                    <p className='error'>{errors.age?.message}</p>
                </div>
                <div>
                    <label style={{fontWeight: "bold"}}>Job Title&nbsp;</label>
                    <select name="jobtitle" {...register("jobtitle")}>
                        <option value="">Select</option>
                        <option value="Developer">Developer</option>
                        <option value="PM">PM</option>
                        <option value="Others">Others</option>
                    </select>
                     <p className='error'>{errors.jobtitle?.message}</p>
                     {jobtitle === "Others" && 
                        <><input {...register("other_specify")} placeholder='Please Specify' /><p className='error'>{errors.other_specify?.message}</p></>
                    }
                </div>

                <input type="submit" />
            </form>
        </>
    )
}

export default FormPage;