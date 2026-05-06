"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import logo from '@/assest/logo.png'
import Navlinks from "./Navlinks";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = authClient.useSession()
  // console.log(session,"session")
  const user = session?.user

  console.log(user)

    const router = useRouter();

  const handleSignOut = async()=>{

    await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/login"); // redirect to login page
    },
  },
});

  }
   
    //  Responsive
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="border-b bg-white">
      <nav className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <div className="flex items-center">
          <Image 
          src={logo}
           alt="logo" 
           width={101} 
           height={101}
           
           />

          <h2 className="font-bold text-2xl"> <span className="text-green-700">Qurbani</span> Hat</h2>

        </div>
        {/* Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
          <li className="text-gray-500 font-medium">

            <Navlinks href={"/"}>

            Home
            
            </Navlinks>
            
            </li>
          <li className="text-gray-500 font-medium">
            
            <Navlinks href={"/animals"}>
            
            All Animals
            
            </Navlinks>
            
            </li>

          <li className="text-gray-500 font-medium">
            
            <Navlinks href={"/profile"}>
            
            Profile
            
            </Navlinks>
            
            </li>
        </ul>
        
        <div className="hidden md:flex items-center gap-4 text-sm">

         {

          !user && ( <div className="flex gap-4">

              <Link 
          href="/login"  
          className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Login
          </Link>

          <Link
            href="/register"
            className="bg-green-700  text-white px-4 py-2 rounded-md hover:bg-gray-800">
           Register
          </Link>

          </div>

         )}

         {
          user && ( <div className="flex gap-4">

              <Avatar>
        <Avatar.Image alt={user?.name} src={user?.image} />
        <Avatar.Fallback>{user?.name.charAt[0]}</Avatar.Fallback>
      </Avatar>
      

      <Button className="bg-green-700 text-white" onClick={handleSignOut}>SignOut</Button>


          </div>
         )}
        
        </div>

        {/* Responsive button toggle */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl">
          {open ? <IoMdCloseCircle /> : <RiMenu3Fill />}
        </button>
      </nav>


      {/* Responsive  for mobile */}
      <div
        className={`md:hidden px-4 pb-4 space-y-3 text-sm transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <Link href="/" onClick={closeMenu} className="block">
          Home
        </Link>
        <Link  href={"/animals"}  onClick={closeMenu} className="block">
          All Animals
        </Link>
       
        <Link href={"/profile"} onClick={closeMenu} className="block">
          Profile
        </Link>
        <div className="border-t pt-2 flex flex-col gap-2">
         {!user &&(

         <div className="flex flex-col gap-2">
            <Link href="/login"  onClick={closeMenu}>
            Login
          </Link>

          <Link
            href="/register"
            onClick={closeMenu}
            className="bg-green-700 text-white px-4 py-2 rounded-md text-center">
            Register
          </Link>

          </div>
         )}

         {user && (<div> 

           <Link href="/login"  onClick={closeMenu}>
            SignOut
          </Link>
         </div>)}
        </div>
      </div>
    </header>
  );
};

export default Navbar;