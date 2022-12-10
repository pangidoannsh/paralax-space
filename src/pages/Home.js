import React, { useContext, useState } from 'react';
import Earth from '../components/Earth';
import Navbar from '../components/Navbar';
import { MainContext } from '../layouts/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    AOS.init();
    const [page, setPage] = useState(0);
    const [handlePage, earth] = useContext(MainContext);
    const [show, setShow] = useState(true);
    const handleButton = e => {
        e.preventDefault()
        setPage(page + 1);
        handlePage(page + 1);
    }
    const handleNav = (index) => {
        if (index !== 0) {
            setShow(false);
        }
        setPage(index);
        handlePage(index);
    }
    return (
        <>
            <Navbar handleNav={handleNav} />
            <div className="absolute z-10 w-screen h-screen" >
                <center>
                    <div data-aos="fade-up" data-aos-duration="1000" className={`absolute w-full z-20 top-[20vh] 
                    ${show ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="title text-4xl md:text-[80px] md:mb-6">PARALAX SPACE</div>
                        <div className='md:text-2xl mb-4'>LANDINGPAGE TO EXPLAIN WHO IS PANGIDOAN</div>
                        <button className='font-bold md:text-2xl px-4 py-2 bg-white md:px-8 md:py-4 text-black' onClick={handleButton}>EXPLORE</button>
                    </div>
                </center>
            </div>
            <Earth image={earth} index={page} />
        </>

    );
}

export default Home;
