import { Card } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import logo from "@/assest/logo.png"
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] mt-10">
      <Card className="bg-transparent text-white px-10 py-12 md:px-20 rounded-none shadow-none">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-3">
          <div className="flex items-center  gap-1">
  
            <div >
             <Image
               src={logo}
               width={80}
               height={80}
              alt="logo"
                className=" invert"
              />
            </div>

              <h4 className="font-semibold text-green-500 text-lg">
                 Qurbani  Hat
            </h4>

               </div>
            <p className="text-sm text-white leading-relaxed">
              Trusted online platform for buying and selling qurbani animals
              across Bangladesh.
            </p>
          </div>

         
          <div className="space-y-3">
            <h4 className="font-semibold text-green-500  text-lg">Contact</h4>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +880 17xxxxxxxx</p>
            <p className="text-sm">Address: Dhaka, Bangladesh</p>
          </div>


          <div className="space-y-3">
            <h4 className="font-semibold text-green-500 text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-green-200">Home</Link>
              <Link href="/animals" className="hover:text-green-200">All Animals</Link>
              <Link href="#" className="hover:text-green-200">Sell Cattle</Link>
              <Link href="#" className="hover:text-green-200">Pricing</Link>
            </div>
          </div>

    
          <div className="space-y-3">
            <h4 className="font-semibold text-green-500 text-lg">Follow Us</h4>
            <div className="flex gap-5 text-sm">
              <Link href="#" className="hover:text-green-200  flex justify-center items-center gap-3 "> <FaFacebook size={30}/> Facebook</Link>
              <Link href="#" className="hover:text-green-200 flex justify-center  items-center gap-3  "> <FaYoutube size={30} /> YouTube</Link>
              <Link href="#" className="hover:text-green-200  flex justify-center  items-center gap-3  "> <FaWhatsapp size={30} /> WhatsApp</Link>
            </div>
          </div>

        </div>

        <div className="mt-10 text-center text-sm text-white border-t border-green-600 pt-6">
          © 2026 Qurbani Hat Bangladesh. All rights reserved.
        </div>

      </Card>
    </div>
  );
};

export default Footer;