import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TalkPoint from './TalkPoint';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TalkPointList = () => {
    const [selectedCategory, setSelectedCategory] = useState('sports');
    const [sportsArticles, setSportsArticles] = useState([]);
    const [politicsArticles, setPoliticsArticles] = useState([]);
    const [entertainmentArticles, setEntertainmentArticles] = useState([]);

    useEffect(() => {
        const getArticles = async (category, setArticles) => {
            const response = await axios.get('https://newsapi.org/v2/everything', {
                params: {
                    q: category,
                    apiKey: `${process.env.REACT_APP_API_KEY}`,
                    pageSize: 5  // Limit the number of articles to 5
                }
            });
            const validArticles = response.data.articles.filter(article => !article.title.includes('[Removed]'));
            const summarizedArticles = await Promise.all(validArticles.map(article => summarizeArticle(article)));
            setArticles(summarizedArticles);
        };
        
        const fetchArticles = async () => {
            await Promise.all([
                getArticles('sports', setSportsArticles),
                getArticles('politics', setPoliticsArticles),
                getArticles('entertainment', setEntertainmentArticles)
            ]);
        };

        fetchArticles();
    }, []);

    const summarizeArticle = async (article) => {
        try {
            const response = await axios.post("http://localhost:5000/summarize", {
                content: article.description,
            });
            return {
                title: article.title,
                url: article.url,
                urlToImage: article.urlToImage,
                description: response.data.summary,
            };
        } catch (error) {
            console.error("Error summarizing article:", error);
            return {
                title: article.title,
                url: article.url,
                urlToImage: article.urlToImage,
                description: "Failed to summarize article due to API or connection issue",
            };
        }
    };
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="container">
            <h1>Dinner Table Talk</h1>
            <h2>Never run out of things to say with family and colleagues</h2>
            <div className="button-container">
                <button className="button" onClick={() => setSelectedCategory('sports')}>Sports</button>
                <button className="button" onClick={() => setSelectedCategory('politics')}>Politics</button>
                <button className="button" onClick={() => setSelectedCategory('entertainment')}>Entertainment</button>
            </div>

            <Slider {...settings}>
                {(selectedCategory === 'sports' ? sportsArticles :
                  selectedCategory === 'politics' ? politicsArticles :
                  selectedCategory === 'entertainment' ? entertainmentArticles : []
                ).map((article, index) => (
                    <div key={index}>
                        <TalkPoint
                            title={article.title}
                            url={article.url}
                            urlToImage={article.urlToImage}
                            description={article.description}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TalkPointList;


