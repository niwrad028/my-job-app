import React from 'react'
import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className='w-full bg-white fixed top-0 right-0 z-[999] nav-shadow'>
            <div className='container mx-auto w-full h-auto flex items-center justify-between'>
                <a href="#"><h1 className="m-0 text-[#e60278]">JobApp</h1></a>
                <div className='md:block hidden'>
                    <a href="#" className='font-[500] text-sm mr-6 py-4'>HOME</a>
                    <a href="#" className='font-[500] text-sm mr-6 py-4'>LOGIN</a>
                    <a href="#">
                        <button className='py-4 lg:px-4 rounded-none bg-[#e60278] text-white h-[75px]'>Search Job</button>
                    </a>
                </div>
                <div className='md:hidden m-5 mr-0 text-3xl z-[999]' onClick={() => setOpen(!open)}>
                    <ion-icon name="menu"></ion-icon>
                </div>
                <div
                    className={`md:hidden bg-white absolute w-2/3 h-screen px-7 py-2 font-medium top-0 transition-all duration-500 " ${open ? "right-0" : "right-[-100%]"
                        }`}>
                    <div className='flex flex-col justify-center h-auto gap-3 py-2 text-lg font-extrabold mt-16 pl-5'>
                        <a href="#" className='font-[500] text-sm mr-6 py-4' onClick={() => setOpen(false)}>HOME</a>
                        <a href="#" className='font-[500] text-sm mr-6 py-4' onClick={() => setOpen(false)}>LOGIN</a>
                        <a href="#">
                            <button className='py-4 lg:px-4 rounded-none bg-[#e60278] text-white h-[75px]'>Search Job</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
