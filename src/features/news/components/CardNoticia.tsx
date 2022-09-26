import { INoticiasNormalizadas } from "../Noticias";
import { ImageCardNoticia, TituloCardNoticia, DateCardNoticia, DescriptionCardNoticia, BotaoLeitura, DivCardNoticia } from "../styled";

interface CardNoticiaProps extends INoticiasNormalizadas {
    onCLick: (noticia: INoticiasNormalizadas) => void
}
const CardNoticia = (noticia: CardNoticiaProps) => {
    return (
        <DivCardNoticia>
            <ImageCardNoticia src={noticia.image} />
            <TituloCardNoticia>{noticia.titulo}</TituloCardNoticia>
            <DateCardNoticia>{noticia.date}</DateCardNoticia>
            <DescriptionCardNoticia>
                {noticia.descriptionCurto}
            </DescriptionCardNoticia>
            <BotaoLeitura onClick={() => noticia.onCLick(noticia)}>Ver más</BotaoLeitura>
        </DivCardNoticia>
    )
}

export default CardNoticia;