import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../theme/colors';

const ButtonContainer = styled.TouchableOpacity({
  padding: 16,
  borderRadius: 24,
  backgroundColor: Colors.white,
  justifyContent: 'center',
  width: 160,
});

const ButtonText = styled.Text({
  fontSize: 16,
  textAlign: 'center',
  color: Colors.black,
});

// font-family: ${(props) => props.theme.fonts.body};
// font-size: ${(props) => props.theme.fontSizes.button};
interface PressableButtonProps {
  onPress: () => void;
  title: string;
}

export const PressableButton = ({onPress, title}: PressableButtonProps) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
