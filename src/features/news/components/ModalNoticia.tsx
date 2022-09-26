import { CloseButton as Close } from "../../../assets";

import { CardModal, CloseButton, ContainerModal, ContainerTexto, DescriptionModal, ImageModal, TituloModal } from "../styled";

interface ModalNoticiaProps {
    titulo: string;
    description: string;
    image: string;
    changeModal: (value: null) => void
}

const ModalNoticia = (n: ModalNoticiaProps) => {
    return (
        <ContainerModal>
            <CardModal>
                <CloseButton onClick={() => n.changeModal(null)}>
                    <img src={Close} alt="close-button" />
                </CloseButton>
                <ImageModal src={n.image} alt="news-image" />
                <ContainerTexto>
                    <TituloModal>{n.titulo}</TituloModal>
                    <DescriptionModal>{n.description}</DescriptionModal>
                </ContainerTexto>
            </CardModal>
        </ContainerModal>
    )
}

export default ModalNoticia;