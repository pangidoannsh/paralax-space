import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import earth from '../earth.jpg';

export const MainContext = React.createContext();
const listPages = [
    "/",
    "/about",
    "/portfolio",
    "/contact"
]
const Main = (props) => {
    let navigate = useNavigate();

    const handlePage = (pathIndex) => {
        setTimeout(() => {
            navigate(listPages[pathIndex])
        }, 2400)
    }
    return (
        <section className='relative w-screen h-screen overflow-hidden bg-black'>
            <MainContext.Provider value={[handlePage, earth]}>
                <div className="absolute z-10 w-screen h-screen" >
                    {props.children}
                </div>
            </MainContext.Provider>
        </section>
    );
}

export default Main;
