import { AssinarImage, CloseButton as Close } from "../../../assets";
import { BotaoAssinar, CardModal, CloseButton, ContainerModal, ContainerTexto, DescriptionModal, ImageModal, TituloModal } from "../styled";

interface ModalNewsletterProps {
    changeModal: (value: null) => void
}

const ModalNewsletter = ({ changeModal }: ModalNewsletterProps) => {
    return (
        <ContainerModal>
            <CardModal>
                <CloseButton onClick={() => changeModal(null)}>
                    <img src={Close} alt="close-button" />
                </CloseButton>
                <ImageModal src={AssinarImage} alt="mr-burns-excelent" />
                <ContainerTexto>
                    <TituloModal>Assine a nossa newsletter</TituloModal>
                    <DescriptionModal>
                        Assine nossa newsletter e receba novidades de nossos
                        personagens favoritos
                    </DescriptionModal>
                    <BotaoAssinar
                        onClick={() =>
                            setTimeout(() => {
                                alert("Suscripto!");
                                changeModal(null);
                            }, 1000)
                        }
                    >
                        Assinar
                    </BotaoAssinar>
                </ContainerTexto>
            </CardModal>
        </ContainerModal>
    )
}

export default ModalNewsletter;