import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/color';
import {rh} from '../../utils/responsive';

import {Container} from './styles';
interface BackButtonProps extends TouchableOpacityProps {
  color?: string;
}
const BackButton: React.FC<BackButtonProps> = ({color, ...rest}) => {
  return (
    <Container {...rest}>
      <Icon
        name="chevron-left"
        color={color ? color : colors.text}
        size={rh(18)}
      />
    </Container>
  );
};

export default BackButton;
