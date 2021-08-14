import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, Header, TotalCars, HeaderContent, CarList} from './styles';

import Car from '../../components/Car';
import Logo from '../../assets/logo.svg';
import {rh, rw} from '../../utils/responsive';
import api from '../../services/api';
import {CarDto} from '../../dtos/CarDto';
import Load from '../../components/Load';

const Home: React.FC = () => {
  const [cars, setCars] = useState<CarDto[]>([]);
  const [load, setLoad] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    fetchCars();
  }, []);

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
      {load ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Car data={item} onPress={handleNavigation} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
