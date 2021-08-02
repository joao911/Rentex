import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/color';
import {rh, rw} from '../../utils/responsive';

export const Container = styled.View``;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: ${rh(24)}px;
`;
interface ImageIndex {
  active?: string;
}
export const ImageIndex = styled.View<ImageIndex>`
  width: ${rw(6)}px;
  height: ${rh(6)}px;
  background-color: ${props => (props.active ? colors.title : colors.shape)};
  margin-left: ${rh(8)}px;
  border-radius: ${rh(3)}px;
`;
export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${rh(123)}px;
  justify-content: center;
  align-items: center;
`;
export const CarImage = styled.Image`
  width: ${rw(280)}px;
  height: ${rh(132)}px;
`;
