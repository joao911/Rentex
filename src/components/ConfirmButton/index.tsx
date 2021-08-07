import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Title} from './styles';

interface ConfirmButtonProps extends TouchableOpacityProps {
  title: string;
}
const ConfirmButton: React.FC<ConfirmButtonProps> = ({title, ...rest}) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ConfirmButton;
