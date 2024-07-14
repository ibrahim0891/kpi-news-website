import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import LatestHeadlines from '../Components/LatestHeadLines';

const NewsComponent = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoading, setIsLoading] = useState(false);

    const handleShowMore = () => {
        setIsLoading(true);
        const loadingTime = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
        setTimeout(() => {
            setVisibleCount(prevCount => prevCount + 3);
            setIsLoading(false);
        }, loadingTime);
    };


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_484166d10d183d449dc9b8f75ab8931ea5025&q=bangladesh');
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setNews(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center py-10">Error: {error.message}</div>;

    return (
        <div>
            <Header />

            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row gap-x-6">
                    <div className="w-full md:w-3/4 p-4">
                        <h1 className="text-2xl font-bold mb-4">Latest News from WSJ</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                            {news.slice(0, visibleCount).map((article, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    {article.image_url && (
                                        <img src={article.image_url} alt={article.title} className="w-full h-48 object-cover" />
                                    )}
                                    <div className="p-4">
                                        <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:underline">
                                            {article.title}
                                        </a>
                                        <p className="text-gray-600 mt-2">
                                            {article.description == null? <p className='text-gray-400 inline'> No descripiton available </p> :  article.description.length > 200 ? `${article.description.slice(0, 200)}` : article.description}
                                            {article.description == null? null :  article.description.length > 200 ? <a href={article.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:underline hover:text-blue-700">
                                                Read more...
                                            </a> : null}
                                            
                                            
                                        </p>
                                        <p className="text-gray-500 mt-2 text-sm">By {article.creator || 'Unknown'} on {new Date(article.pubDate).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {visibleCount < news.length && (
                            <div className="flex justify-center mt-6">
                                {isLoading ? (
                                    <img src="https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif" alt="Loading" className="w-8 h-8 " /> // Replace with your loading icon
                                ) : (
                                    <button onClick={handleShowMore} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                        Show More
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                    <LatestHeadlines news={news} />

                </div>
            </div>

            <Footer />
            {/* <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/5 mb-6 md:mb-0">
                            <h3 className="font-bold mb-4">About Us</h3>
                            <ul>
                                <li><a href="#about" className="hover:underline">About</a></li>
                                <li><a href="#contact" className="hover:underline">Contact</a></li>
                                <li><a href="#careers" className="hover:underline">Careers</a></li>
                                <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5 mb-6 md:mb-0">
                            <h3 className="font-bold mb-4">Sections</h3>
                            <ul>
                                <li><a href="#world" className="hover:underline">World</a></li>
                                <li><a href="#business" className="hover:underline">Business</a></li>
                                <li><a href="#tech" className="hover:underline">Tech</a></li>
                                <li><a href="#sports" className="hover:underline">Sports</a></li>
                                <li><a href="#entertainment" className="hover:underline">Entertainment</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5 mb-6 md:mb-0">
                            <h3 className="font-bold mb-4">Resources</h3>
                            <ul>
                                <li><a href="#blogs" className="hover:underline">Blogs</a></li>
                                <li><a href="#podcasts" className="hover:underline">Podcasts</a></li>
                                <li><a href="#newsletters" className="hover:underline">Newsletters</a></li>
                                <li><a href="#reports" className="hover:underline">Reports</a></li>
                                <li><a href="#guides" className="hover:underline">Guides</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5 mb-6 md:mb-0">
                            <h3 className="font-bold mb-4">Stay Connected</h3>
                            <ul>
                                <li><a href="#facebook" className="hover:underline">Facebook</a></li>
                                <li><a href="#twitter" className="hover:underline">Twitter</a></li>
                                <li><a href="#instagram" className="hover:underline">Instagram</a></li>
                                <li><a href="#linkedin" className="hover:underline">LinkedIn</a></li>
                                <li><a href="#youtube" className="hover:underline">YouTube</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5 mb-6 md:mb-0">
                            <h3 className="font-bold mb-4">Search</h3>
                            <form className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full p-2 rounded-l-lg text-gray-900"
                                />
                                <button type="submit" className="bg-red-500 p-2 rounded-r-lg hover:bg-red-700">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-8 text-center border-t border-gray-700 pt-4">
                        <p className="text-sm">&copy; 2024 NewsSite. All rights reserved.</p>
                        <p className="text-xs text-gray-400">Designed by YourName</p>
                    </div>
                </div>
            </footer> */}
        </div>
    );
};

export default NewsComponent;


{/* <div className="w-full md:w-1/4 p-6 bg-gray-100 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Latest Headlines</h2>
                        <ul>
                            {news.slice(0, 10).map((article, index) => (
                                <li key={index} className="mb-6">
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-xl font-semibold text-blue-800">
                                        {article.title}
                                    </a>
                                    <p className="text-gray-500 text-sm">{new Date(article.publishedAt).toLocaleDateString()}</p>
                                    <div className="flex flex-wrap items-center mt-2">
                                        {article.tags && article.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-xs bg-blue-200 text-blue-800 rounded-full px-2 py-1 mr-2 mb-2">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap items-center mt-2">
                                        {article.categories && article.categories.map((category, catIndex) => (
                                            <span key={catIndex} className="text-xs bg-green-200 text-green-800 rounded-full px-2 py-1 mr-2 mb-2">
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div> */}
{/* <div className="w-full md:w-1/4 p-4">
                        <h2 className="text-xl font-bold mb-4">Latest Headlines</h2>
                        <ul>
                            {news.slice(0, 10).map((article, index) => (
                                <li key={index} className="mb-4">
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-lg font-semibold">
                                        {article.title}
                                    </a>
                                    <p className="text-gray-500 text-sm">{new Date(article.publishedAt).toLocaleDateString()}</p>
                                </li>
                            ))}
                        </ul>
                    </div> */}