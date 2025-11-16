import { CardBody, CardContainer, CardFooter } from "./CardStyled";
import { TextLimit } from "../TextLimit/TextLimit.jsx";

export function Card(props) {
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{props.title}</h2>
                    <img src={props.bannerImage} alt='Imagem' />

                </div>
                <TextLimit content={props.content} limit={150}/>
            </CardBody>

            <CardFooter>
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{props.likes}</span>
                </div>
                <div>
                    <i className="bi bi-chat-text"></i>
                    <span>{props.comments}</span>
                </div>
            </CardFooter>
        </CardContainer>
    );
}
