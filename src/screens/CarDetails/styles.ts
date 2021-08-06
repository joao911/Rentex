import styled from 'styled-components/native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import colors from '../../styles/color';
import {rh} from '../../utils/responsive';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: ${rh(24)}px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 35}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${rh(38)}px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  color: ${colors.text_detail};
  font-size: ${rh(10)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  color: ${colors.title};
  font-size: ${rh(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  color: ${colors.text_detail};
  font-size: ${rh(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  color: ${colors.main};
  font-size: ${rh(25)}px;
`;

export const About = styled.Text`
  color: ${colors.text};
  font-size: ${rh(15)}px;
  text-align: justify;
  margin-top: ${rh(23)}px;
  line-height: ${rh(25)}px;
`;

export const Accessories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: ${rh(16)}px;
`;
export const Footer = styled.View`
  background-color: ${colors.background_primary};
  padding: ${rh(24)}px ${rh(24)}px ${getBottomSpace() + 24}px;
`;
