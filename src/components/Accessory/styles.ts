import styled from 'styled-components/native';
import colors from '../../styles/color';
import {rw, rh} from '../../utils/responsive';

export const Container = styled.View`
  width: ${rw(109)}px;
  height: ${rh(92)}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background_primary};
  padding: ${rh(16)}px;
  margin-bottom: ${rh(8)}px;
`;

export const Name = styled.Text`
  font-size: ${rh(13)}px;
  color: ${colors.text};
`;
