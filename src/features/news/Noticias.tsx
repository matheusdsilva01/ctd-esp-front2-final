import { useEffect, useState } from "react";
import CardNoticia from "./components/CardNoticia";
import ModalNewsletter from "./components/ModalNewsletter";
import ModalNoticia from "./components/ModalNoticia";
import { obterNoticias } from "./fakeRest";
import * as Style from "./styled";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  description: string;
  date: number | string;
  premium: boolean;
  image: string;
  descriptionCurto?: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modalOpen, setModalOpen] = useState<INoticiasNormalizadas | null>(null);

  const transformFirstLetterToUpperCase = (text: string) => {
    return text.split(" ")
      .map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      })
      .join(" ");
  }

  useEffect(() => {
    (async () => {
      const resposta = await obterNoticias();

      const data = resposta.map((n) => {
        const titulo = transformFirstLetterToUpperCase(n.titulo)

        const horarioAtual = new Date();
        const minutosDecorrido = Math.floor(
          (horarioAtual.getTime() - n.date.getTime()) / 60000
        );

        return {
          id: n.id,
          titulo,
          description: n.description,
          date: `Faz ${minutosDecorrido} minutos`,
          premium: n.premium,
          image: n.image,
          descriptionCurto: n.description.substring(0, 100),
        };
      });

      setNoticias(data);
    })();
  }, []);

  return (
    <Style.ContainerNoticias>
      <Style.TituloNoticias>Noticias dos Simpsons</Style.TituloNoticias>
      <Style.ListaNoticias>
        {noticias.map((n) => (
          <CardNoticia
            key={n.id}
            id={n.id}
            titulo={n.titulo}
            description={n.description}
            date={n.date}
            premium={n.premium}
            image={n.image}
            descriptionCurto={n.descriptionCurto}
            onCLick={setModalOpen}
          />
        ))}
        {modalOpen ? (
          modalOpen.premium ? (
            <ModalNewsletter changeModal={setModalOpen} />
          ) : (
            <ModalNoticia
              titulo={modalOpen.titulo}
              description={modalOpen.description}
              image={modalOpen.image}
              changeModal={setModalOpen}
            />
          )
        ) : null}
      </Style.ListaNoticias>
    </Style.ContainerNoticias>
  );
};

export default Noticias;
