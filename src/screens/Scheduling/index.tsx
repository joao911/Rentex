import React from 'react';
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

const Scheduling: React.FC = () => {
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
      <Content />
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
};

export default Scheduling;
