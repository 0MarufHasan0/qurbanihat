"use client"

import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, Input, Label } from '@heroui/react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const UpdateInformation = ({params}) => {
    const {id} =useParams()
    const router = useRouter()

    const handleUpdateInformation = async(e)=>{
       e.preventDefault() 
       const name = e.target.name.value
       const image = e.target.image.value

      const data =  await authClient.updateUser({
        name,
        image,
      });

       if (data) {

      toast.success("Updated successfully ✅");
      router.push("/profile");
    } else {
      toast.warning("Update failed ❌");
    }

    


    }
    const handleReset = (e) => {
    e.target.form.reset();
  };

    return (
        <div className="min-h-screen flex items-center justify-center">
      
            <Card className="w-[400px] border border-green-500 p-8 bg-white shadow-xl rounded-none">
              <h1 className="text-center text-2xl font-bold text-green-700 mb-6">
                Update Your Information
              </h1>
      
          
              <form onSubmit={handleUpdateInformation} className="flex flex-col gap-4">
      
                  <Label>Image<span className="text-red-500">*</span></Label>
      
                <Input
                 name='image'
                  type="text"
                  placeholder="Enter your Image url"
                />
      
               
                  <Label>Name<span className="text-red-500">*</span></Label>
      
                <Input
                 name='name'
                  type="text"
                  placeholder="Enter your name"
                />
       
                <Button
                  type="submit"
                  className="bg-green-700 text-white w-full">
                  <Check />
                  Update
                </Button>
      
           
                <Button
                  type="button"
                  variant="bordered"
                  onClick={handleReset}
                  className="w-full">
                  Reset
                </Button>
              </form>

        
      
            </Card>
          </div>
    );
};

export default UpdateInformation;