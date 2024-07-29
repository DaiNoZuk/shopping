import React, { useState } from "react";

function About() {
    const [message, setMessage] = useState('');

    const showMessage = (value) => {
        setMessage(value);
    }

    return (
        <div >
            <h1 >The About Shop</h1>
            <div >
                <button className="" onClick={() => showMessage('Hello, this is your message!')}>History</button>
                <button className="" onClick={() => showMessage('This is our goal.')}>Goal</button>
                <button className="" onClick={() => showMessage('This is our credit.')}>Credit</button>
            </div>
            <p>{message}</p>
        </div>
    )
}

export default About;
