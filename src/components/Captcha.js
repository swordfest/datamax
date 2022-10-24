import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';


function Captcha() {

    const [captcha, getCaptcha] = useState('');
    const url = 'https://www.nauta.cu:5002/captcha/captcha';
    
    const getTheCaptcha = () => {
        axios.get(`${url}`)
        .then((response) => {
            const captcha = response.data;
            getCaptcha(captcha);
        })
        .catch (error => console.error(`Error: ${error}`));
    };

    useEffect(() => {
        getTheCaptcha();
        console.log(captcha);
    }, []);

    return (
        <div className="captcha w-48 h-24 bg-slate-500 rounded-lg">
            <img src={`data:image/svg+xml;utf8,${encodeURIComponent(captcha.data)}`} />
            {/* {captcha.data} */}
            <button className='w-12 h-6 flex items-center justify-center bg-slate-500 ' onClick={() =>{ getTheCaptcha() }}>Reload</button>
        </div>
    )
}

export default Captcha;