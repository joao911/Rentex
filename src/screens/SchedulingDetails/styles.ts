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

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${rh(40)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.line};
  padding-bottom: ${rh(16)}px;
`;

export const CalendarIcon = styled.View`
  width: ${rh(48)}px;
  height: ${rh(48)}px;
  background-color: ${colors.main};
  justify-content: center;
  align-items: center;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  color: ${colors.text_detail};
  font-size: ${rh(10)}px;
  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  color: ${colors.title};
  font-size: ${rh(15)}px;
  text-transform: uppercase;
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: ${rh(16)}px;
`;

export const RentalPriceLabel = styled.Text`
  color: ${colors.text_detail};
  font-size: ${rh(10)}px;
  text-transform: uppercase;
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuota = styled.Text`
  color: ${colors.title};
  font-size: ${rh(15)}px;
`;

export const RentalPriceTotal = styled.Text`
  color: ${colors.success};
  font-size: ${rh(25)}px;
`;
