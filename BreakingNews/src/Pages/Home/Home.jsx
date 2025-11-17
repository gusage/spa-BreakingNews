import { useState, useEffect } from 'react';
import { Card } from '../../Components/Card/Card.jsx'
import { Navbar } from '../../Components/Navbar/Navbar.jsx'
/*import { news } from '../../Datas.jsx'*/
import { getAllNews, getTopNews } from '../../services/newsService.js';
import { HomeBody, HomeHeader } from './HomeStyled.jsx';

export default function Home() {

    const [news, setNews] = useState([]);
    const [topNews, setTopNews] = useState(null);
    const [loading, setLoading] = useState(true);

    async function findNews() {
        const responseNews = await getAllNews();
        setNews(responseNews.data.results);

        const responseTop = await getTopNews();
        setTopNews(responseTop.data.news);

        setLoading(false);
    };

    useEffect(() => {
        findNews();
    }, []);

    return (
        <>
            <Navbar />

            {loading ? (
                <p>Carregando...</p>
            ) : (
                <>
                    <HomeHeader>
                        <Card
                            top={true}
                            title={topNews.title}
                            content={topNews.content}
                            bannerImage={topNews.bannerImage}
                            likes={topNews.likes}
                            comments={topNews.comments}
                        />
                    </HomeHeader>

                    <HomeBody>
                        {news.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                content={item.content}
                                bannerImage={item.bannerImage}
                                likes={item.likes}
                                comments={item.comments}
                            />
                        ))}
                    </HomeBody>
                </>
            )}
        </>
    );
};

/*    return (
        <>
            <Navbar />
            <HomeHeader>
                <Card
                    title={topNews.title}
                    content={topNews.content}
                    bannerImage={topNews.bannerImage}
                    likes={topNews.likes}
                    comments={topNews.comments}
                />
            </HomeHeader>
            <HomeBody>
                {news.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        content={item.content}
                        bannerImage={item.bannerImage}
                        likes={item.likes}
                        comments={item.comments}
                    />
                ))}
            </HomeBody>
        </>
    );
}*/