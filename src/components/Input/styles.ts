import styled from "styled-components/native";
import { TextInput } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface ButtonProps extends RectButtonProps {
  color?: string;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;

  margin-right: 2px;

  background: ${({ theme }) => theme.colors.background_secondary};
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_secondary};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};

  padding: 0 23px;
`;