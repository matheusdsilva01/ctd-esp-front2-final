import { useState } from 'react';
import { NomesSimpsons, INFO_SIMPSONS } from './constants';
import {
  BioContainer,
  BioDescription,
  BioImage,
  BioNome,
  Botao,
  ContainerBotoes,
} from './styled';
import styles from './styles.module.css';

const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const onClick: (nome: NomesSimpsons) => void = (nome) =>
    setBioActive(INFO_SIMPSONS[nome]);

  const criarBotoes = () => {
    return Object.keys(INFO_SIMPSONS).map((nome: string) => (
      <Botao
        key={nome as string}
        onClick={() => onClick(nome as NomesSimpsons)}
        active={bioActive.id === nome}
      >
        {nome}
      </Botao>
    ));
  };

  return (
    <BioContainer>
      <ContainerBotoes>{criarBotoes()}</ContainerBotoes>
      <div>
        <div>
          <BioImage src={bioActive.image} alt={bioActive.nome} />
        </div>
        <div>
          <BioNome>{bioActive.nome}</BioNome>
          <BioDescription className={styles.bioDescription}>
            {bioActive.description}
          </BioDescription>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
