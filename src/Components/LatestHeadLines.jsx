/* eslint-disable react/prop-types */

const LatestHeadlines = ({ news }) => {
    const staticTags = ["Breaking News", "Trending", "Exclusive"];
    const staticCategories = ["World", "Business", "Tech", "Sports"];

    return (
        <div className='w-full md:w-1/4 md:p- mt-12 md:md-0'>
            <div className=" bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold border-b p-6 mb-2 pb-2">Latest Headlines</h2>
                <ul className=''>
                    {news.slice(0, 6).map((article, index) => (
                        <li key={index} className="mb-8 p-6 hover:bg-white rounded-md">
                            <div className="flex items-start   ">
                                {article.urlToImage && (
                                    <img
                                        src={article.urlToImage}
                                        alt="Article Thumbnail"
                                        className="w-16 h-16 object-cover md:hidden rounded-md mr-4"
                                    />
                                )}
                                <div>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-xl font-semibold text-gray-900">
                                        {article.title}
                                    </a>
                                    <p className="text-gray-500 text-sm">{new Date(article.pubDate).toLocaleString()}</p>
                                    {article.creator && <p className="text-gray-600 text-sm">By {article.author}</p>}
                                    <p className="text-gray-700 text-sm mt-2">{article.description}</p>
                                    <button className="mt-2 text-sm text-blue-500 hover:underline">Read More</button>

                                    <div className="mt-4 flex space-x-4 md:hidden">
                                        <button className="text-sm text-gray-600 hover:text-gray-900">Share</button>
                                        <button className="text-sm text-gray-600 hover:text-gray-900">Bookmark</button>
                                        {article.source && <span className="text-sm text-gray-600">Source: {article.source.name}</span>}
                                    </div>
                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-4" >
                <div className="flex flex-wrap items-center mt-2">
                    {staticTags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="text-xs bg-gray-300 text-gray-800 rounded-md px-3 py-1 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap items-center mt-2">
                    {staticCategories.map((category, catIndex) => (
                        <span
                            key={catIndex}
                            className="text-xs bg-gray-200 text-gray-800 rounded-md px-3 py-1 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-300"
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestHeadlines;
