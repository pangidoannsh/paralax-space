import React, { useContext, useState } from 'react';
import Earth from '../components/Earth';
import Navbar from '../components/Navbar';
import { MainContext } from '../layouts/Main';
import Photo from '../photo.png'

const About = () => {
    const [page, setPage] = useState(2);
    const [handlePage, earth] = useContext(MainContext);
    const [show, setShow] = useState(true);
    const handleButton = e => {
        e.preventDefault()
        setPage(page + 1);
        handlePage(page + 1);
    }
    const handleNav = (index) => {
        if (index !== 1) {
            setShow(false);
        }
        setPage(index);
        handlePage(index);
    }
    return (
        <>
            <Navbar handleNav={handleNav} />
            <div className="absolute z-10 w-[50vw] h-screen flex justify-end right-24 items-center" >
                <div className={`flex gap-16 items-center ${show ? 'opacity-100' : 'opacity-0'}`} data-aos="fade-right" data-aos-duration="1000">

                </div>
            </div>
            <Earth image={earth} index={page} />
        </>

    );
}

export default About;
