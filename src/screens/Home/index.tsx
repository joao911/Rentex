import React from 'react';
import {StatusBar} from 'react-native';

import {Container, Header, TotalCars, HeaderContent, CarList} from './styles';

import Car from '../../components/Car';
import Logo from '../../assets/logo.svg';
import {rh, rw} from '../../utils/responsive';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const carData = {
    brand: 'audi',
    name: 'RS Coupe',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGoUyRN7LrlgVTUs8jDNdv0DhcBUVywEgCw&usqp=CAU',
  };
  const handleNavigation = () => {
    navigation.navigate('CarDetails');
  };

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={rw(120)} height={rh(68)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1]}
        keyExtractor={item => String(item)}
        renderItem={() => <Car data={carData} onPress={handleNavigation} />}
      />
    </Container>
  );
};

export default Home;
