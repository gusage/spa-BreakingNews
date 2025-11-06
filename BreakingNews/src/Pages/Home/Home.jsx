import { Card } from '../../Components/Card/Card.jsx'
import { Navbar } from '../../Components/Navbar/Navbar.jsx'
import { news } from '../../Datas.jsx'
import { HomeBody } from './HomeStyled.jsx';

export default function Home() {
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