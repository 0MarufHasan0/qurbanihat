"use client";
import { Card, Input, Button } from "@heroui/react";
import { FaGoogle } from "react-icons/fa6";
import { Check } from "@gravity-ui/icons";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <Card className="w-[400px] border border-green-500 p-8 bg-white shadow-xl rounded-none">
        <h1 className="text-center text-2xl font-bold text-green-700 mb-6">
          Login
        </h1>

    
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          <Input
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter email"
          />

          <Input
            {...register("password", { required: true, })}
            type="password"
            placeholder="Enter password"
          />
 
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