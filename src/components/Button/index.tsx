import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Title} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
}
const Button: React.FC<ButtonProps> = ({title, color, ...rest}) => {
  return (
    <Container color={color} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
