import styled from 'styled-components/native';
import colors from '../../styles/color';
import {rh} from '../../utils/responsive';

export const Container = styled.TouchableOpacity`
  width: ${rh(80)}px;
  height: ${rh(56)}px;
  background-color: ${colors.shape_dark};
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${colors.shape};
  font-size: ${rh(15)}px;
`;
