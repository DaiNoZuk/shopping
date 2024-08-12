import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Default() {
    const navigate = useNavigate();

    const btn = [
        { label: 'Homepage', path: '/homepage' },
        { label: 'Product Detail Page', path: '/productDetailPage' },
        { label: 'Category Page', path: '/categoryPage' },
        { label: 'Cart', path: '/cart' },
        { label: 'Mobile Responsive', path: '/mobileResponsive' }
    ];
    return (
        <div className="flex flex-col items-center py-5 h-screen;">
            <div className="relative mb-5 text-center ">
                <h1 className="absolute w-[1072px] h-[129px] left-[calc(50%_-_1072px/2)] not-italic font-bold text-[76px] 
          leading-[76px] flex items-center text-center text-black top-[88px] ">
                    E-COMMERCE WEBSITE TEMPLATE (FREEBIE)
                </h1>
            </div>
            <div className="flex flex-col justify-start items-center h-screen">
                <div className="mt-[281px] flex flex-wrap justify-center items-center gap-4">
                    {btn.map((button, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(button.path)}
                            className="flex flex-row justify-center items-center gap-2.5 w-[202px] h-16 px-6 py-5 rounded-[60px] bg-gray-200 hover:bg-gray-300"
                        >
                            {button.label}
                        </button>
                    ))
                    }
                </div>
            </div>


        </div >

    )
};
export default Default;
