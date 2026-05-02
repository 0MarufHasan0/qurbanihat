import Navbar from '@/components/Navbar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
               <ToastContainer />
            {children}
        </div>
    );
};

export default MainLayout;