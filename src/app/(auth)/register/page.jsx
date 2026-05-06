"use client";
import { Card, Input, Button, Label } from "@heroui/react";
import { FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Check } from "@gravity-ui/icons";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Link from "next/link";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

export default function RegisterPage() {
  const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const router = useRouter();
     const [isShowing, setIsShowing] = useState(false);

  const onSubmit = async (data) => {
    // console.log(data);
    const {name, email,photo,password} = data;

    const { data : res , error } = await authClient.signUp.email({

      
    name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    createSession: false 
   
});

// console.log(data,error)

if (error) {
  toast.warning(error?.message || "Registration failed");
}

if(res){
   await authClient.signOut();

      toast.success("Registration Successful 🎉");
      reset();

      router.push("/login");
}

  };

 
  return (
    <div className="min-h-screen flex items-center justify-center">

      <Card className="w-[400px] border border-green-500 p-8 bg-white shadow-xl rounded-none">
        <h1 className="text-center text-2xl font-bold text-green-700 mb-6">
          Register Your Account
        </h1>

    
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Label>Name <span className="text-red-500">*</span></Label>

          <Input
          
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter your name"
          />

            <Label>Email <span className="text-red-500">*</span></Label>

          <Input
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter your email"
          />
            <Label>Photo<span className="text-red-500">*</span></Label>
          <Input
            {...register("photo", { required: true })}
            type="text"
            placeholder="Enter your photo Url"
          />

          <div className=" flex flex-col gap-1 relative">



           <Label className="mb-2">Password <span className="text-red-500">*</span></Label>
        
          <Input
            {...register("password", { required: "password is required", })}
             type={isShowing ? "text" : "password"}
            placeholder="Enter your password"
            className='pr-10'
          
          />
           <span className='absolute right-10  top-10' onClick={() => setIsShowing(!isShowing)}>
           {isShowing ? <FaEye  /> : <FaEyeSlash />}

       </span>
         
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}            
          </div>

         
 
          <Button
            type="submit"
            className="bg-green-700 text-white w-full">
            <Check />
           Register
          </Button>

     
          <Button
            type="button"
            variant="bordered"
            onClick={() => reset()}
            className="w-full">
            Reset
          </Button>
        </form>
        <p>
            Already have an account?{" "}
          <Link href="/login" className="text-blue-500 underline">
                Login
           </Link>
                </p>


      </Card>
    </div>
  );
}