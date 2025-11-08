import { Card } from '../../Components/Card/Card.jsx'
import { Navbar } from '../../Components/Navbar/Navbar.jsx'
import { news } from '../../Datas.jsx'
import { getAllNews } from '../../services/newsService.js';
import { HomeBody } from './HomeStyled.jsx';

export default function Home() {

    async function findAllNews() {
        const response = await getAllNews();
        console.log(response.data.results);
    };

    findAllNews();

    return (
        <>
            <Navbar />
            <HomeBody>
                {news.map((item, index) => (
                    <Card key={index} news={item} />
                ))}
            </HomeBody>
        </>
    );
}