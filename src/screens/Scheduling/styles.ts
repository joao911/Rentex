import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled, {css} from 'styled-components/native';
import colors from '../../styles/color';
import {rh} from '../../utils/responsive';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background_secondary};
`;

export const Header = styled.View`
  height: ${rh(325)}px;
  background-color: ${colors.header};
  justify-content: center;
  padding: ${rh(25)}px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  color: ${colors.shape};
  font-size: ${rh(34)}px;
  margin-top: ${rh(24)}px;
`;

export const RentalPeriod = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${rh(32)}px 0px;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  color: ${colors.text};
  font-size: ${rh(10)}px;
  text-transform: uppercase;
`;

interface DateValueProps {
  selected: Boolean;
}
export const DateValue = styled.Text<DateValueProps>`
  color: ${colors.shape};
  font-size: ${rh(15)}px;
  text-transform: uppercase;
  ${props =>
    !props.selected &&
    css`
      border-bottom-width: 1px;
      border-color: ${colors.text};
      padding-bottom: ${rh(5)}px;
    `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: ${rh(24)}px;
`;
