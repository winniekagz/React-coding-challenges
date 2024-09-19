import React, { useState } from "react";
import image from "../assets/images/financial.png";
import CustomInput from "./components/CustomInput";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { DevTool } from "@hookform/devtools";
import Markdown from 'react-markdown';
import {registrationmarkdownContent} from './question.ts'

// Validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match").required("Confirm Password is required"),
});

export default function UserRegistration() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = (data) => {
    console.log('submitting values', data);
    setTimeout(() => {
      toast.success("Success Notification!", {
        position: "top-right",
      });
    }, 1000);
  };

  return (
    <div className="w-screen h-full bg-gray-300 p-30 flex flex-col justify-center items-center">
      
  
      <div className="  border shadow-lg  inline-block p-12 bg-gray-50 md:w-1/3 my-4">
        <div className="p-2 flex flex-col items-center justify-center flex-1 w-full">
          <div className="my-6">
          <h1 className="text-center text-purple-900 font-bold text-2xl mb-2">Registration Form</h1>
          <p></p>
          </div>
         
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
            <div className="w-full flex flex-col"> <DevTool control={control} />
              <CustomInput
                {...register("name")}
                name="name"
                label="Enter Name"
                placeholder="Enter user's name"
               error={!!errors?.name?.message}
                
              />
              {errors.name && <div className="text-red-600">{errors.name.message}</div>}
            </div>

            <CustomInput
              {...register("email")}
              name="email"
              label="Enter Email"
              placeholder="Enter user's email"
              error={!!errors?.email?.message}
            />
            {errors.email && <div className="text-red-600">{errors.email.message}</div>}

            <CustomInput
              {...register("password")}
              name="password"
              label="Enter Password"
              placeholder="Enter user's password"
              type="password"
              error={!!errors?.password?.message}
            />
            {errors.password && <div className="text-red-600">{errors.password.message}</div>}

            <CustomInput
              {...register("confirmPassword")}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Re-enter password"
              type="password"
              error={!!errors?.confirmPassword?.message}
            />
            {errors.resetPassword && <div className="text-red-600">{errors.confirmPassword.message}</div>}

            <button type="submit" className="bg-slate-700 text-white p-4 w-full my-6 rounded">
              Submit
            </button>
          </form>
          <DevTool control={control} />
        </div>

       
      
      </div>
      <div className="w-full flex items-center flex-col">
      <Markdown>{registrationmarkdownContent}</Markdown>
      </div>
    </div>
  );
}
