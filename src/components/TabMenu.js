import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import '../index.css';

function TabMenu (props) {

    const [selected, setSelected] = useState('dashboard');

    const animationBar = () => {
        if (selected === 'dashboard') {
            return 'top-[16px] animate-menu ease-in duration-100 transition-all';
        }
        else if (selected === 'balance') {
            return 'top-[88px] animate-menu ease-in duration-100 transition-all';
        }
        else if (selected === 'buy') {
            return 'top-[160px] animate-menu ease-in duration-100 transition-all';
        }
        else if (selected === 'settings') {
            return 'top-[232px] animate-menu ease-in duration-100 transition-all';
        }
    };



    return (

        <div className='menu-app w-full h-auto flex justify-end px-3 gap-2.5 '>
                <div className='menu-app-options flex flex-col gap-6'>
                    {
                        props.tabs.map((tab) => (
                            <div className={'menu-opt-dashboard w-12 h-12 rounded-xl cursor-pointer hover:bg-slate-200 active:bg-slate-200 transition-colors ' + (selected === tab.name ? 'bg-slate-200' : '')} onClick={() => {setSelected(tab.name)}}>
                                <img src={`data:image/svg+xml;utf8,${encodeURIComponent(tab.icon)}`} />
                            </div>
                        ))
                    }
                </div>

                <div className=' relative cmenu-opts-pointer-container w-1.5 h-full py-4 '>
                    <div className={' absolute w-1.5 h-4 bg-[#2B79D6] rounded-full top-[16px] select-none ' + animationBar()}> </div>
                </div>
            </div>
    )
}

export default TabMenu;