import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
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
import {rh} from '../../utils/responsive';
import colors from '../../styles/color';

const SchedulingDetails: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('SchedulingComplete');
  };
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
        <RentalPeriod>
          <CalendarIcon>
            <Icon name="calendar" size={rh(24)} color={colors.shape} />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
          <Icon name="chevron-right" size={rh(10)} color={colors.text} />
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2,900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          color={colors.success}
          onPress={handleNavigation}
        />
      </Footer>
    </Container>
  );
};

export default SchedulingDetails;
