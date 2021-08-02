import React from 'react';

import {Container, Title} from './styles';

interface ButtonProps {
  title: string;
  color: string;
  OnPress: () => void;
}
const Button: React.FC<ButtonProps> = ({title, color, OnPress}) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
