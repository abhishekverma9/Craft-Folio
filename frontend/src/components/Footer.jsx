import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-b from-[#060011] to-[#2E0A6F] text-white">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="" className="h-11"
                        src='/craftf.png' />
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed text-gray-400">
                    <b>Crafted with ❤️ <span className=' text-yellow-500'>by CraftFolio.</span></b>
                    <br />
                    Helping you create stunning portfolios to land your dream opportunities.
                </p>
            </div>
            <div className="border-t border-[#3B1A7A]">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a>www.craftfolio.com</a> © 2025 || All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer
