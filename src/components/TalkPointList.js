import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TalkPoint from './TalkPoint'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TalkPointList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            //const response = await axios.get('https://newsapi.org/v2/everything?q=sports&apiKey=88eb9075015140278498bc7d74079dda')
            const response = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: 'sports',
                        apiKey: `${process.env.REACT_APP_API_KEY}`,
                        pageSize: 5  // Limit the number of articles to 5
                    }
                });
            setArticles(response.data.articles)
        }
        getArticles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div>
            <h1>Dinner Table Talk</h1>
            <h2>Never run out of things to say with family and colleagues</h2>
            <Slider {...settings}>
                {articles.map((article, index) => (
                    <div key={index}>
                        <TalkPoint
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TalkPointList