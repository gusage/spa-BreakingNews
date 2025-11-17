import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled";
import { TextLimit } from "../TextLimit/TextLimit.jsx";

export function Card(props) {
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <CardHeader top={props.$top}>
                        <h2>{props.title}</h2>
                        <TextLimit content={props.content} limit={150} />
                    </CardHeader>

                    <CardFooter>
                        <section>
                            <i className="bi bi-hand-thumbs-up"></i>
                            <span>{props.likes?.length}</span>
                        </section>
                        <section>
                            <i className="bi bi-chat-text"></i>
                            <span>{props.comments?.length}</span>
                        </section>
                    </CardFooter>
                </div>

                <img src={props.bannerImage} alt='Imagem' />

            </CardBody>


        </CardContainer>
    );
}
