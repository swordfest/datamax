import React from 'react';
import ReactDOM from 'react-dom/client';
// import '../index.css';
import Navbar from './Navbar';
import { QueryClient, QueryClientProvider, useMutation } from 'react-query';
import Captcha from './Captcha';
import axios from 'axios';

function Dashboard () {


    const sessionLogin = (objSession) => {
        return axios.post('https://www.nauta.cu:5002/users', objSession)
    }

    const onSession = () => {
        
    }

    const {mutate, data, isSuccess} = useMutation(sessionLogin)


    return (
        <main className='container w-full h-screen ml-[100px] p-6 bg-slate-400'>
            {mutate(sessionLogin)}
            {/* <Captcha/> */}
            Ya tamos logueaos
        </main>
    )
}

export default Dashboard;