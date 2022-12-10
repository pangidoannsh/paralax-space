import React from 'react';

const Navbar = ({ handleNav }) => {
    return (
        <div className='absolute z-20 flex justify-center w-screen gap-x-6 py-4 md:gap-x-16 md:py-6'>
            <button onClick={() => handleNav(0)}>HOME</button>
            <button onClick={() => handleNav(1)}>ABOUT</button>
            <button onClick={() => handleNav(2)}>PORTFOLIO</button>
            <button onClick={() => handleNav(3)}>CONTACT</button>
        </div>
    );
}

export default Navbar;
