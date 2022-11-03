import React from 'react';
import ReactDOM from 'react-dom/client';
// import '../index.css';
import Navbar from './Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import Captcha from './Captcha';

function Dashboard () {
    return (
        <main className='container w-full h-screen ml-[100px] p-6 bg-slate-400'>
            {/* <Captcha/> */}
        </main>
    )
}

export default Dashboard;