"use client";
import { Card, Input, Button, Label } from "@heroui/react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Check } from "@gravity-ui/icons";
import { useForm } from "react-hook-form";
import { email } from "better-auth";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [isShowing, setIsShowing] = useState(false);
  const { register, handleSubmit, reset, formState: {errors} } = useForm();

  const onSubmit = async(data) => {
    // console.log(data);
    const { data : res, error } = await authClient.signIn.email({
    email: data.email ,// required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});

if(error){

   toast.warning(error?.message || "login failed");
   return
}

if(res){
toast.success("login Successful 🎉");

}

  };

  const handleGoogleLogin =async () => {
      const data = await authClient.signIn.social({
    provider: "google",
  });
   if (data?.error) {
      toast.error(data.error?.message );
      return;
    }

       toast.success("Login successful with Google 🎉");
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <Card className="w-[400px] border border-green-500 p-8 bg-white shadow-xl rounded-none">
        <h1 className="text-center text-2xl font-bold text-green-700 mb-6">
          Login
        </h1>

    
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            <Label>Email<span className="text-red-500">*</span></Label>

          <Input
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter email"
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
            Login
          </Button>

     
          <Button
            type="button"
            variant="bordered"
            onClick={() => reset()}
            className="w-full">
            Reset
          </Button>
        </form>
        <p>Don't have an account?{" "}
        <Link href="/register" className="text-blue-500 underline">
    Register
        </Link>
        </p>


        <p className="text-center my-4 text-gray-400">or</p>

      {/* google login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition font-medium">
          <FaGoogle />
          Sign in with Google
        </button>

      </Card>
    </div>
  );
}