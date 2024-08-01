import React, { useState } from "react";

function About() {
    const [message, setMessage] = useState('');

    const showMessage = (value) => {
        setMessage(value);
    }

    return (
        <div >
            <h1 className="text-center text-4xl bg-gradient-to-r from-cyan-500 to-blue-500">The About Shop</h1>
            <div className=" border-t-8 border-black">
                <ul className="flex space-x-8 space-y-3">
                    <li>
                        <button
                            className="px-5 font-extrabold bg-lime-400 rounded-xl w-40 h-12 transform transition-transform duration-300 hover:scale-110 "
                            onClick={() => showMessage('Hello, this is your message!')}>
                            History
                        </button>
                    
                    </li>
                    <li>
                        <button
                            className="px-5 font-extrabold bg-lime-400 rounded-xl w-40 h-12 transform transition-transform duration-300 hover:scale-110"
                            onClick={() => showMessage('This is our goal.')}>
                            Goal
                        </button>
                    </li>
                    <li>
                        <button
                            className="px-5 font-extrabold bg-lime-400 rounded-xl w-40 h-12 transform transition-transform duration-300 hover:scale-110"
                            onClick={() => showMessage('This is our credit.')}>
                            Credit
                        </button>
                    </li>
                </ul>

            </div>
            <p>{message}</p>
        </div>
    )
}

export default About;
