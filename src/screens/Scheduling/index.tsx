import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';

import BackButton from '../../components/BackButton';
import colors from '../../styles/color';
import ArrowSvg from '../../assets/arrow.svg';
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';

const Scheduling: React.FC = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('SchedulingDetails');
  };
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton color={colors.shape} />
        <Title>
          Escolha uma{'\n'} data de inicio e {'\n'}fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false} />
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false} />
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleNavigation} />
      </Footer>
    </Container>
  );
};

export default Scheduling;
