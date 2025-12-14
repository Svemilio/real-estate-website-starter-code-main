import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-12'>
            <div className='max-w-7xl mx-auto px-4 grid grid-col-1 md: grid-cols-4 gap-8'>
                <div>
                    <h3>Emilio Co.</h3>
                    <p>Your trusted partener in finding the perfect home</p>
                </div>

                <div>
                    <h4>Quick Links</h4>
                    <ul className='space-y-2 text-gray-400'>
                        <li>Home</li>
                        <li>Properties</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-bold mb-4'>Contatti</h4>
                    <ul className='space-y-2 text-gray-400'>
                        <li>emiliosava6532423gmail.com</li>
                        <li>3333333333</li>
                        <li>Contact Emilio</li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-bold mb-4'>Follow Us</h4>

                    <div className='flex space-x-4'>
                        <a href=''>
                            <FaFacebook className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer' />
                        </a>
                        <a href=''>
                            <FaTwitter className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer' />
                        </a>
                        <a href=''>
                            <FaInstagram className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer' />
                        </a>
                        <a href=''>
                            <FaLinkedin className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer