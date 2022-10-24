import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Navbar from './components/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';

function Dashboard () {
    return (
        <Navbar/>
        <main className='container w-full h-screen ml-[100px] p-6 bg-slate-400'>
            
        </main>
    )
}

export default Dashboard;