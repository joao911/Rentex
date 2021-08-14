import React from 'react';
import {StatusBar, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, Content, Message, Title, Footer} from './styles';

import Logo from '../../assets/logo_background_gray.svg';
import Done from '../../assets/done.svg';
import ConfirmButton from '../../components/ConfirmButton';

const SchedulingComplete: React.FC = () => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Home');
  };
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
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
        <ConfirmButton title="OK" onPress={handleNavigation} />
      </Footer>
    </Container>
  );
};

export default SchedulingComplete;
