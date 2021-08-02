import styled from 'styled-components/native';
import {rh} from '../../utils/responsive';
import colors from '../../styles/color';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background_primary};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  height: ${rh(113)}px;
  background-color: ${colors.header};
  justify-content: flex-end;
  padding: ${rh(32)}px ${rh(24)}px;
`;

export const TotalCars = styled.Text`
  font-size: ${rh(15)}px;
  color: ${colors.text};
`;

export const CarList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
