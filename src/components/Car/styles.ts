import styled from 'styled-components/native';
import colors from '../../styles/color';
import {rh, rw} from '../../utils/responsive';

export const Container = styled.View`
  height: ${rh(126)}px;
  background-color: ${colors.background_secondary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${24}px;
  margin-bottom: ${rh(16)}px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  color: ${colors.text_detail};
  font-size: ${rh(10)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  color: ${colors.title};
  font-size: ${rh(15)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${rh(16)}px;
`;

export const Rent = styled.View`
  margin-right: ${rh(24)}px;
`;

export const Period = styled.Text`
  color: ${colors.text_detail};
  font-size: ${rh(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  color: ${colors.main};
  font-size: ${rh(15)}px;
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: ${rw(167)}px;
  height: ${rh(85)}px;
`;
