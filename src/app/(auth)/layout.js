import React, { Children } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';

const layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <ToastContainer/>
             {children}
            <Footer/>
            
        </div>
    );
};

export default layout;