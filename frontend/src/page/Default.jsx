import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { HiCheckCircle } from "react-icons/hi";
import Homepage from '../images/Homepage.png';


function Default() {
    const navigate = useNavigate();

    const btn = [
        { label: 'Homepage', path: '/Homepage' },
        { label: 'Product Detail Page', path: '/ProductDetailPage' },
        { label: 'Category Page', path: '/CategoryPage' },
        { label: 'Cart', path: '/Cart' },
        { label: 'Mobile Responsive', path: '/MobileResponsive' }
    ];
    return (
        <div className="flex flex-col items-center py-5 h-screen bg-[#EDEDED] " >
            <div className="relative mb-5 text-center ">
                <h1 className="absolute w-[1072px] h-[110px] left-[calc(50%_-_1072px/2)] not-italic font-bold text-[76px] 
          leading-[76px] flex items-center text-center text-black top-[88px] ">
                    E-COMMERCE WEBSITE TEMPLATE (FREEBIE)
                </h1>
            </div>
            <div className="flex flex-col justify-start items-center">
                <div className="mt-[281px] flex flex-wrap justify-center items-center gap-4">
                    {btn.map((button, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(button.path)}
                            className="flex flex-row justify-center items-center gap-[16px] h-16 px-6 py-5 rounded-[60px] bg-black/10 hover:bg-black/25">
                            <HiCheckCircle /> {button.label}
                        </button>
                    ))
                    }
                </div>
                <div >
                    <img src={Homepage} alt="Homepage" className=" absolute w-[864px] align-center top-[400px]" />
                </div>
            </div>
        </div >

    )
};
export default Default;
