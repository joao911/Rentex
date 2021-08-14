import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from '../../styles/color';

const Load: React.FC = () => {
  return (
    <ActivityIndicator color={colors.main} size="large" style={{flex: 1}} />
  );
};

export default Load;
