import styled from 'styled-components/native';
import colors from '../../styles/color';
import {rh} from '../../utils/responsive';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.header};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: ${rh(50)}px;
`;
export const Title = styled.Text`
  font-size: ${rh(30)}px;
  color: ${colors.shape};
  margin-top: ${rh(40)}px;
`;

export const Message = styled.Text`
  font-size: ${rh(15)}px;
  color: ${colors.text_detail};
  text-align: center;
  margin-top: ${rh(16)}px;
  line-height: ${rh(25)}px;
`;
export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin: ${rh(80)}px 0px;
`;
