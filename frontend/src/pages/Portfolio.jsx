import React, { useState, useContext, useEffect } from 'react';
import { FaHome, FaUser, FaPhone } from "react-icons/fa";
import ProjCard from '../components/ProjCard';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import QrCode from '../components/QrCode';
import ShareComponent from '../components/ShareComponent';
import { toast } from 'react-toastify';
import { RxCross2 } from "react-icons/rx";

const Portfolio = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showQr, setShowQr] = useState(false)
    const [showShare, setShowShare] = useState(false)
    const { dynamicData, personalData } = useContext(AuthContext)
    const [downloadMessage, setDownloadMessage] = useState('');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    // Function to create the HTML string with inline CSS and download it.
    const handleDownload = () => {
        // Get the full HTML content of the current page.
        const pageHTML = document.documentElement.outerHTML;

        // Create a new HTML string with the desired DOCTYPE and content.
        // We add some basic styling to ensure the page looks good when downloaded.
        const fullHTML = `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Downloaded Page</title>
            <style>
                body {
                font-family: 'Inter', sans-serif;
                margin: 20px;
                line-height: 1.6;
                }
            </style>
            </head>
            <body>
            ${pageHTML}
            </body>
            </html>`;

        // Create a Blob from the HTML string with 'text/html' MIME type.
        const blob = new Blob([fullHTML], { type: 'text/html' });

        // Create a temporary URL for the Blob.
        const url = URL.createObjectURL(blob);

        // Create a temporary anchor element to trigger the download.
        const link = document.createElement('a');
        link.href = url;
        link.download = `${personalData.name}-portfolio.html`; // Use user's filename or default.

        // Append the link to the body, click it, and then remove it.
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Revoke the temporary URL to free up memory.
        URL.revokeObjectURL(url);

        // Set a message to inform the user the download has started.
        setDownloadMessage('Download started!');
        useEffect(() => {
            if (downloadMessage.includes("Download started!")) {
                toast.success("File Downloaded ✅");
            }
        }, [downloadMessage]);
        setTimeout(() => setDownloadMessage(''), 3000);
    };
    useEffect(() => {
        document.title = "My Portfolio - Created by CraftFolio"; 
    }, []);
    return dynamicData && personalData && (
        <>
            <div className="min-h-[80%] font-sans text-white">
                {/* Navbar */}
                <header className="flex items-center bg-indigo-950 justify-between px-8 py-4">
                    <div className="text-2xl font-bold text-cyan-600 border-2 border-cyan-600 rounded-full h-10 w-10 flex items-center justify-center">
                        S
                    </div>
                    <nav className="sm:flex hidden gap-6 text-lg">
                        <Link href="#" className="flex items-center gap-1 text-orange-500">
                            <FaHome /> Home
                        </Link>
                        <Link onClick={() => scrollToSection("about")} className="flex items-center gap-1 hover:text-orange-500">
                            <FaUser /> About Me
                        </Link>
                        <Link onClick={() => scrollToSection("contact")} className="flex items-center gap-1 hover:text-orange-500">
                            <FaPhone /> Contact Me
                        </Link>
                        <div className="relative group">
                            <div onClick={() => setShowQr(true)} className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
                                <BsQrCode size={25} />
                            </div>
                            {/* QR popup */}
                            <div onClick={() => setShowQr(false)} className={`${showQr ? "scale-100" : ""} fixed inset-0 flex items-center justify-center transform scale-0 transition-transform duration-300 z-50 bg-black/40`}>
                                <div className="">
                                    <p className="text-sm text-gray-100 font-semibold mb-3 text-center">Scan Me 👇</p>
                                    <QrCode value="https://github.com" />
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div onClick={() => setShowShare(true)} className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
                                <IoShareSocialOutline size={30} />
                            </div>
                            {/* QR popup */}
                            <div onClick={() => setShowShare(false)} className={`${showShare ? "scale-100" : ""} fixed inset-0 flex items-center justify-center transform scale-0 transition-transform duration-300 z-50 bg-black/40`}>
                                <div className="">
                                    <p className="text-sm text-gray-100 font-semibold mb-3 text-center">Share Me 👇</p>
                                    <ShareComponent />
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* Mobile Menu Button */}
                    <button onClick={() => setShowMenu(true)} className="sm:hidden text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    {/* Mobile Menu */}
                    {showMenu && (
                        <div className="fixed lg:hidden top-10 right-0 bottom-0 h-full text-base bg-black w-full sm:w-[50%] md:w-[35%] flex-col items-center gap-4 flex">
                            <div className='flex gap-x-10 gap-y-20 items-center '>
                                <h2 className=' text-lg font-semibold text-white'>Menu <span className=' text-yellow-500'>Section</span></h2>
                                <div onClick={() => setShowMenu(false)}><RxCross2 size={40} /></div>
                            </div>
                            <div className='flex flex-col gap-5 justify-center my-6 items-center'>
                                <Link onClick={() => { setShowMenu(false) }} className="border hover:bg-gray-700 w-50 text-center border-gray-600 py-2 rounded-full px-4">Home</Link>
                                <Link onClick={() => { setShowMenu(false); scrollToSection("about") }} className="border hover:bg-gray-700 w-50 text-center border-gray-600 py-2 rounded-full px-4">About Me</Link>
                                <Link onClick={() => { setShowMenu(false); scrollToSection("contact") }} className="border hover:bg-gray-700 w-50 text-center border-gray-600 py-2 rounded-full px-4">Contact Me</Link>
                                <button onClick={() => { setShowMenu(false); setShowQr(true) }} className="border hover:bg-gray-700 w-50 text-center border-gray-600 py-2 rounded-full px-4">Qr Code</button>
                                <Link onClick={() => { setShowMenu(false); setShowShare(true) }} className="border hover:bg-gray-700 w-50 text-center border-gray-600 py-2 rounded-full px-4">Share</Link>
                            </div>
                        </div>
                    )}
                </header>

                {/* Hero Section */}
                <main className="flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-16">
                    {/* Left Text */}
                    <div className="md:max-w-sm lg:max-w-lg">
                        <p className="text-cyan-400 text-lg">Welcome to my Portfolio</p>
                        <h1 className="text-4xl font-bold mt-2">
                            Hi, I'm <span className="text-orange-500">{personalData.name}</span>, a <br />
                            Passionate <span className="text-orange-500">{personalData.role}</span>
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {personalData.bio}
                            <span className="text-cyan-400 cursor-pointer"> See More..</span>
                        </p>

                        <div className="flex gap-4 mt-6">
                            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded shadow-md">
                                Hire me !
                            </button>
                            <button
                                onClick={() => scrollToSection("project")}
                                className="border border-cyan-600 text-cyan-600 px-6 py-2 rounded hover:bg-cyan-50 hover:text-cyan-700"
                            >
                                See My Project
                            </button>
                        </div>
                    </div>

                    {/* Right Circular Image */}
                    <div className="relative flex items-center justify-center">
                        <img
                            src={personalData.profilePic}
                            alt="Profile"
                            className="w-52 h-52 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                    </div>
                </main>

            </div>
            <hr className='h-[1px] opacity-20 mb-2 text-white w-full' />
            <h2 className='font-semibold text-white text-center text-2xl my-4'>My <span className=' text-yellow-500'>Projects</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10'>
                {dynamicData.map((project, index) => (
                    <div id='project' className='flex text-white items-center justify-center' key={index}>
                        <ProjCard project={project} />
                    </div>
                ))}
            </div>
            <hr className='h-[1px] opacity-20 mb-10 mt-10 text-white w-full' />
            <footer className=" text-white py-10 px-6">
                <div className="max-w-6xl mx-auto grid-cols-2 grid md:grid-cols-4 gap-8">

                    {/* Contact Info */}
                    <div id='contact'>
                        <h2 className="text-2xl font-bold mb-4 border-b-4 border-indigo-500 inline-block">
                            Contact <span className=' text-yellow-500'>Me</span>
                        </h2>
                        <p className="text-gray-400 mb-2">Email: <Link href="mailto:yourmail@gmail.com" className="hover:text-indigo-400">yourmail@gmail.com</Link></p>
                        <p className="text-gray-400">Phone: <Link href="tel:+919876543210" className="hover:text-indigo-400">+91 98765 43210</Link></p>
                    </div>

                    {/* About Me */}
                    <div id='about'>
                        <h2 className="text-2xl font-bold mb-4 border-b-4 border-indigo-500 inline-block">
                            About <span className=' text-yellow-500'>Me</span>
                        </h2>
                        <p className="text-gray-400 mb-2">Address: <Link className="hover:text-indigo-400">Verma Palace, <br />Outer Ring Road, <br />LuckNow , UP</Link></p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 border-b-4 border-indigo-500 inline-block">
                            Follow <span className=' text-yellow-500'>Me</span>
                        </h2>
                        <div className="flex gap-4 text-2xl">
                            <Link to="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                                <FaGithub />
                            </Link>
                            <Link to="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                                <FaLinkedin />
                            </Link>
                            <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                                <FaTwitter />
                            </Link>
                            <Link to="https://gmail.com/" className="hover:text-indigo-400">
                                <FaEnvelope />
                            </Link>
                        </div>
                    </div>
                    {/* DownLoad  */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 border-b-4 border-indigo-500 inline-block">
                            <button onClick={() => handleDownload()} className="flex items-center gap-2  text-white px-4 py-2 rounded-lg transition">
                                Download
                                <span className=' text-yellow-500'><FaDownload /></span>
                            </button>
                        </h2>
                        <div className="flex gap-4 text-gray-400">
                            Download your <br />portfolio in HTML <br />CSS format
                        </div>
                    </div>

                </div>

                {/* Bottom Text */}
                <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
                    © {new Date().getFullYear()} Abhishek | All Rights Reserved
                </div>
            </footer>
        </>
    );
};

export default Portfolio;
