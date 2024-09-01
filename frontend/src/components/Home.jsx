import React from "react";
import helloService from "../services/hello";
import { useState, useEffect } from "react";



function Home() {
    const [hello, setHello] = useState('')

    useEffect(() => {
        async function getData () {
            try{
                const data = await helloService.hello();
            setHello(data)

            }
            catch (error) {
                setHello("twas an error")
            }
        }
        getData()
            
    }
    )
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await helloService.hello()
            setHello(data);
        }
        catch (error) {
            setHello(error)
        }
    }
    return (
        <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-200">Welcome to the Home Page</h2>
            <p className="text-lg text-gray-200 mt-4">This is the home page of the application.</p>
            {/* <button onClick={handleSubmit} className="text-center text-white text-4xl mt-6"> BUTTON</button> */}
            <h2 className="text-4xl font-bold text-gray-200">{hello}</h2>
        </div>
    )
}

export default Home