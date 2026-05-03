import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
               <ToastContainer />
            {children}

            <Footer/>
        </div>
    );
};

export default MainLayout;