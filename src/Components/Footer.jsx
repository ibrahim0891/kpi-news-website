import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/4 px-6 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p>
                            We are committed to providing the latest news and updates from around the world. Stay informed with our comprehensive and in-depth coverage.
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 px-6 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#home" className="hover:underline">Home</a></li>
                            <li><a href="#world" className="hover:underline">World</a></li>
                            <li><a href="#business" className="hover:underline">Business</a></li>
                            <li><a href="#tech" className="hover:underline">Tech</a></li>
                            <li><a href="#sports" className="hover:underline">Sports</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 px-6 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
                        <ul>
                            <li><a href="#facebook" className="hover:underline">Facebook</a></li>
                            <li><a href="#twitter" className="hover:underline">Twitter</a></li>
                            <li><a href="#instagram" className="hover:underline">Instagram</a></li>
                            <li><a href="#linkedin" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#youtube" className="hover:underline">YouTube</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 px-6 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p>Email: info@newssite.com</p>
                        <p>Phone: +1 234 567 890</p>
                        <div className="mt-4">
                            <form>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full p-2 rounded-lg text-gray-900 mb-2"
                                />
                                <button type="submit" className="w-full p-2 bg-gray-700 hover:bg-gray-800 rounded-lg text-white">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4 mt-8 w-full">
                    <div className="w-full text-center md:text-left md:w-1/2 px-4 mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="#facebook" className="hover:underline">
                                <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.991 4.388 10.963 10.125 11.854v-8.385h-3.047v-3.47h3.047V9.34c0-3.02 1.791-4.688 4.533-4.688 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.953.926-1.953 1.874v2.214h3.328l-.532 3.47h-2.796v8.385C19.612 23.036 24 18.064 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#twitter" className="hover:underline">
                                <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M24 4.557a9.839 9.839 0 01-2.828.775 4.926 4.926 0 002.165-2.724 9.862 9.862 0 01-3.127 1.195 4.92 4.92 0 00-8.38 4.482A13.978 13.978 0 011.671 3.15 4.92 4.92 0 003.195 9.75 4.903 4.903 0 01.964 9.03v.065a4.922 4.922 0 003.946 4.826 4.902 4.902 0 01-2.212.085 4.924 4.924 0 004.6 3.417 9.867 9.867 0 01-6.102 2.105c-.396 0-.787-.023-1.175-.068a13.944 13.944 0 007.548 2.213c9.057 0 14.01-7.514 14.01-14.032 0-.213-.005-.426-.015-.637A10.012 10.012 0 0024 4.557z" />
                                </svg>
                            </a>
                            <a href="#instagram" className="hover:underline">
                                <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.306.975.975 1.243 2.242 1.306 3.608.058 1.267.07 1.647.07 4.851 0 3.204-.012 3.584-.07 4.85-.062 1.366-.33 2.633-1.306 3.608-.975.975-2.242 1.243-3.608 1.306-1.267.058-1.647.07-4.851.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.33-3.608-1.306-.975-.975-1.243-2.242-1.306-3.608-.058-1.267-.07-1.647-.07-4.851 0-3.204.012-3.584.07-4.85.062-1.366.33-2.633 1.306-3.608.975-.975 2.242-1.243 3.608-1.306 1.267-.058 1.647-.07 4.851-.07M12 0C8.741 0 8.332.013 7.052.072 5.773.131 4.646.364 3.75 1.259c-.896.896-1.129 2.023-1.188 3.302C2.013 5.741 2 6.15 2 9.409v5.182c0 3.259.013 3.668.072 4.948.059 1.279.292 2.406 1.188 3.302.896.896 2.023 1.129 3.302 1.188 1.279.059 1.688.072 4.948.072s3.668-.013 4.948-.072c1.279-.059 2.406-.292 3.302-1.188.896-.896 1.129-2.023 1.188-3.302.059-1.279.072-1.688.072-4.948V9.409c0-3.259-.013-3.668-.072-4.948-.059-1.279-.292-2.406-1.188-3.302-.896-.896-2.023-1.129-3.302-1.188C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.996 3.996 0 110-7.993 3.996 3.996 0 010 7.993zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center md:justify-end md:w-1/2 px-4 md:mb-0 text-center md:text-right">
                        <p className="text-sm">&copy; 2024 NewsSite. All rights reserved.</p>
                        <p className="text-sm text-gray-400">Designed by MD Ibrahim Siyam</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer