import styled from 'styled-components/native';
import colors from '../../styles/color';
import {rh} from '../../utils/responsive';

interface ContainerProps {
  color: string;
}
export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: ${rh(19)}px;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.color ? props.color : colors.main)};
`;
export const Title = styled.Text`
  font-size: ${rh(15)}px;
  color: ${colors.shape};
`;
