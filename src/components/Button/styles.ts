import styled from 'styled-components/native';
import colors from '../../styles/color';
import {rh} from '../../utils/responsive';

export const Container = styled.View`
  padding: ${rh(19)}px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: ${rh(15)}px;
  color: ${colors.shape};
`;
