import React from 'react';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';

import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Accessory from '../../components/Accessory';
import speedSvg from '../../assets/acceleration.svg';
import aceletationSvg from '../../assets/force.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';
import Button from '../../components/Button';

const CarDetails: React.FC = () => {
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGoUyRN7LrlgVTUs8jDNdv0DhcBUVywEgCw&usqp=CAU',
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamboguini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={aceletationSvg} />
          <Accessory name="800Hp" icon={forceSvg} />
          <Accessory name="Gasoline" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 Pessoas" icon={peopleSvg} />
        </Accessories>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de indutado na
          praça real Maestranza de Sevilla. É um belíssimo carro para quem gosta
          de acelerar
        </About>
      </Content>
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
};

export default CarDetails;
