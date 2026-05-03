"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { FaHandPointRight } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function BookingFrom() {

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
      address: e.target.address.value,
      animal: e.target.animal.value,
    };

    e.target.reset();
    toast.success("We will contact Soon");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 min-h-screen p-4">

    
      <div className="flex items-center  justify-center">
      <div className=" animate-bounce hidden md:flex gap-3 items-center">
          <FaHandPointRight className="text-3xl"/>
          <h2 className="text-2xl   gap-2 md:text-3xl font-bold text-green-700 text-center lg:text-left leading-tight">
        Want To Sell Your Qurbani Animals
        </h2>
      </div>
      </div>

   
      <div className="flex justify-center">
        <Card className="border w-full max-w-md p-5 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">

          <h1 className="text-center text-xl md:text-2xl font-bold mb-4">
            Secure Your <span className="text-green-700">Qurbani</span> Booking
          </h1>

          <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

            <TextField isRequired name="name">
              <Label>Name</Label>
              <Input placeholder="Enter your name" />
              <FieldError />
            </TextField>

            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            <TextField isRequired name="number" type="number">
              <Label>Phone Number</Label>
              <Input placeholder="Your mobile number" />
              <FieldError />
            </TextField>

             <TextField isRequired name="animal">
              <Label>Animals Detail</Label>
             <TextArea className="min-h-24" placeholder="Enter your Animal details..." />
              <FieldError />
            </TextField>

            <TextField isRequired name="address">
              <Label>Address</Label>
              <TextArea className="min-h-24" placeholder="Enter full address..." />
              <FieldError />
            </TextField>

       
            <div className="flex flex-col sm:flex-row gap-2">
              <Button type="submit" className="w-full">
                <Check />
                Submit Now
              </Button>

              <Button type="reset" variant="secondary" className="w-full">
                Reset
              </Button>
            </div>

          </Form>
        </Card>
      </div>

    </div>
  );
}