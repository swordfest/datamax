import React from 'react';
import ReactDOM from 'react-dom/client';
import Captcha from './Captcha';
import '../index.css';

function Login () {
    return (
        <div className='w-full h-screen bg-gradient-to-r from-[#ECECEC] via-[#D7D7D7] to-[#ECECEC] flex items-center justify-center '>
            <div className='login-panel w-[690px] h-[516px] flex gap-14 px-6 py-4 '>
                <div className='title w-auto h-auto flex flex-col items-start justify-center '>
                    <h1 className=' w-[201px] h-auto text-3xl font-bold text-center '>Nauta</h1>
                    <span className=' w-[201px] h-auto text-2xl font-semibold text-[#7a7a7a] text-center '>Portal de Usuario</span>
                </div>
                <div className='separator w-px h-full bg-[#9d9d9d] '> </div>
                
                <div className='form-wrapper w-full flex flex-col gap-6 '>
                    {/* <form action="" method="post" className='gap-6'> */}
                        <div className='user-field flex flex-col gap-2 '>
                            <span>User</span>
                            <input type="text" className=' h-12 rounded-lg border-none form-input ' placeholder='user@email.domain' />
                        </div>
                        <div className='pass-field flex flex-col gap-2 '>
                            <span>Password</span>
                            <input type="text" className=' h-12 rounded-lg border-none form-input ' placeholder='••••••••••' />
                            <div className=' flex items-center gap-2 '>
                                <input type="checkbox" name="Show Password" id="showPass" className='form-checkbox rounded-[4px]' />
                                <span>Show Password</span>
                            </div>
                        </div>
                        <div className='captcha flex flex-col gap-4 '>
                                <span>Captcha</span>
                                <Captcha />
                                <input type="text" className=' h-12 rounded-lg border-none form-input ' placeholder='Captcha code' />
                            </div>
                        <button type='submit' className=' w-full h-12 rounded-lg bg-[#2B79D6] flex items-center justify-center font-bold text-white '>Entrar</button>
                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}

export default Login;