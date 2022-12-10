import React, { useContext, useState } from 'react';
import Earth from '../components/Earth';
import Navbar from '../components/Navbar';
import { MainContext } from '../layouts/Main';
import Photo from '../photo.png'

const About = () => {
    const [page, setPage] = useState(1);
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

                    {/* intro */}
                    <div >
                        <div className='mb-4'>
                            <div className='text-2xl font-medium text-sky-600'>Hi There,</div>
                            <div className='text-6xl font-semibold mt-2'>I Am Edo,</div>
                        </div>

                        <div className='text-4xl font-medium mb-4'>I'm Programmer</div>

                        <div className='text-xl mb-4'>
                            I’m Software Engineer with experience for over 1 years. My Expertise in Frontend Development
                        </div>
                        <button className='px-8 py-4 border border-white text-white text-2xl' onClick={handleButton}>SEE PORTFOLIO</button>
                    </div>

                    {/* image */}
                    <div>
                        <img src={Photo} alt="" className='w-[40vw]' />
                    </div>
                </div>
            </div>
            <Earth image={earth} index={page} />
        </>

    );
}

export default About;
