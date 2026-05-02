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

export default function BookingFrom({animal}) {

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
      address: e.target.address.value,
    };

    // console.log(data);
    e.target.reset();
  };

  return (
    <Card className="border w-full max-w-md mx-auto p-5 md:p-8 mt-5">

      <h1 className="text-center text-xl md:text-2xl font-bold mb-4">
       Secure Your <span className="text-green-700">Qurbani</span> – {animal.name} Booking  
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

        <TextField isRequired name="address">
          <Label>Address</Label>
          <TextArea
            placeholder="Enter full address..."
            className="min-h-25"
          />
          <FieldError />
        </TextField>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button type="submit" className="w-full">
            <Check />
            Submit
          </Button>

          <Button type="reset" variant="secondary" className="w-full">
            Reset
          </Button>
        </div>

      </Form>
    </Card>
  );
}