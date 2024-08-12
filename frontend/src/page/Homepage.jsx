import React from "react";
import { BsCart3 } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

function Homepage() {

    return (
        <div>
            <div className="flex flex-row justify-center items-center py-2 gap-[40px] ">
                <span className="text-[32px] font-bold">SHOP.CO</span>
                <div className="flex flex-row justify-center items-center px-0 gap-[35px]">
                    <span className="">shop</span>
                    <button className="">On Sale</button>
                    <button className="">New Arrivals</button>
                    <button className="">Bands</button>
                    <input type="search" id='' name="" placeholder="Search for products..."
                        className=" bg-[#F0F0F0] rounded-[62px] w-[550px] h-[35px] flex-none flex-grow-1" />
                    <BsCart3 />
                    <MdAccountCircle />
                </div>

            </div>
            <div className=" bg-[#F2F0F1] h-screen ">
                <div>
                    <div className=" absolute left-[100px] top-[160px] text-[64px]">
                        <h1 className="">FIND CLOTHES <br />
                            THAT MATCHES <br />
                            YOUR STYLE</h1>
                    </div>
                    <div className=" absolute text-[16px] top-[485px] left-[100px]">
                        <p>Browse through our diverse range of meticulously crafted garments, designed<br/> 
                        to bring out your individuality and cater to your sense of style.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Homepage;

// width: 577px;
// height: 173px;
// top: 237px;
// left: 100px;
// gap: 0px;
// opacity: 0px;
