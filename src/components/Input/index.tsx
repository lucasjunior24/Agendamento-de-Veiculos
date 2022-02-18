import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Alert, TextInputProps } from 'react-native';

import { 
  Container, 
  IconContainer,
  InputText 
} from './styles';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({
  iconName,
  value,
  ...rest
  }: Props) {
  const [isFocused, setFIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();
  
  function handleInputFocus() {
    setFIsFocused(true);
  }
  function handleInputBlur() {
    setFIsFocused(false);
    setIsFilled(!!value);
  }
  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather 
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
        />
      </IconContainer>
      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
       {...rest} 
      />
    </Container>
  );
}