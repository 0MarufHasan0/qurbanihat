"use client"

import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {
  const { data: session } = authClient.useSession()
  const user = session?.user
//   console.log ("user",user)

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Card className=' p-6 flex flex-col bg-gray-200 items-center gap-4 shadow-md rounded-2xl'>
        
        <Avatar className='h-28 w-28'>
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback>
            {user?.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>

        <h2 className='text-xl font-semibold'>{user?.name}</h2>
        <p className='text-gray-500'>{user?.email}</p>

       <Link href={`/profile/${user?.id}`}>
       
        <Button>Update Information</Button>
       </Link>

        

      </Card>
    </div>
  );
};

export default ProfilePage;