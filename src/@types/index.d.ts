declare module '*.svg' {
  import React from 'react';
  import {StopProps} from 'react-native-svg';
  const content: React.FC<StopProps>;
  export default content;
}

declare module '*.png';
