import React from 'react';
import {useWindowDimensions} from 'react-native';

import {Container, Content, Message, Title, Footer} from './styles';

import Logo from '../../assets/logo_background_gray.svg';
import Done from '../../assets/done.svg';
import ConfirmButton from '../../components/ConfirmButton';

const SchedulingComplete: React.FC = () => {
  const {width} = useWindowDimensions();
  return (
    <Container>
      <Logo width={width} />
      <Content>
        <Done width={80} height={80} />
        <Title>Carro alugado</Title>
        <Message>
          Agora você só precisa ir {'\n'} até a concessionária da RENTEX {'\n'}
          pegar seu automóvel
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" />
      </Footer>
    </Container>
  );
};

export default SchedulingComplete;
