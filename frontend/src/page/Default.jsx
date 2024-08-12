import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { HiCheckCircle } from "react-icons/hi";
import Homepage from '../images/DefaultPage/Homepage.png';
import Homepage1 from '../images/DefaultPage/Homepage1.png';
import ProductDetailPage from '../images/DefaultPage/ProductDetailPage.png';
import ProductDetailPage2 from '../images/DefaultPage/ProductDetailPage2.png';
import CategoryPage from '../images/DefaultPage/CategoryPage.png';
import Cart from '../images/DefaultPage/Cart.png';

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
          leading-[76px] flex items-center text-center text-black top-[65px] font-concert-one ">
                    E-COMMERCE WEBSITE TEMPLATE (FREEBIE)
                </h1>
            </div>
            <div className="flex flex-col justify-start items-center">
                <div className="mt-[210px] flex flex-wrap justify-center items-center gap-4 text-[18px]">
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
                    <img src={Homepage} alt="Homepage" className=" w-[730px] align-center mt-[3px] z-30" />
                    <img src={Homepage1} alt="Homepage1" className=" absolute w-[275px] left-[910px] top-[380px] z-40" />
                    <img src={ProductDetailPage} alt="ProductDetailPage" className=" absolute w-[260px] left-[1213px] top-[415px] z-40" />
                    <img src={ProductDetailPage2} alt="ProductDetailPage2" className=" absolute w-[520px] left-[940px] top-[348px] z-20" />
                    <img src={CategoryPage} alt="CategoryPage" className=" absolute w-[525px] left-[80px] top-[350px] z-20" />
                    <img src={Cart} alt="Cart" className=" absolute w-[275px] left-[0px] top-[380px] z-40" />
            </div>
        </div >

    )
};
export default Default;
