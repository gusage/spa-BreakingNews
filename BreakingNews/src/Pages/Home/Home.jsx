import { useState, useEffect } from 'react';
import { Card } from '../../Components/Card/Card.jsx'
import { Navbar } from '../../Components/Navbar/Navbar.jsx'
/*import { news } from '../../Datas.jsx'*/
import { getAllNews } from '../../services/newsService.js';
import { HomeBody } from './HomeStyled.jsx';

export default function Home() {

    const [news, setNews] = useState([]);

    async function findAllNews() {
        const response = await getAllNews();
        setNews(response.data.results);
    };

    useEffect(() => {
        findAllNews();
    }, []);

    return (
        <>
            <Navbar />
            <HomeBody>
                {news.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        content={item.content}
                        bannerImage={item.bannerImage}
                        likes={item.likes.length}
                        comments={item.comments.length}
                    />
                ))}
            </HomeBody>
        </>
    );
}