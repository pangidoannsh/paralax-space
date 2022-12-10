import React from 'react'

export default function Earth({ image, index }) {
    return (
        <div className="fixed inset-0">
            <div className="relative">
                <img src={image} className={`absolute z-0 scale-[1.65] overflow-hidden duration-[2400ms] 
            ${index === 0 ? 'rotate-[-54deg] top-[80vh] left-0' :
                        index === 1 ? 'rotate-[76deg] -top-[110vh] -left-[80vw]' :
                            index === 2 ? 'rotate-[-93deg] -top-[100vh] left-[80vw]' : ''}`}
                />
            </div>
        </div>
    )
}
