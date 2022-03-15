import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton
} from './styles';

export function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleSinOut() {
    navigation.goBack();
  }
  
  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton 
            color={theme.colors.shape} 
            onPress={handleBack} 
          />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton onPress={handleSinOut} >
            <Feather
              name="power" 
              size={24} 
              color={theme.colors.shape} />  
          </LogoutButton>
        </HeaderTop>

        <PhotoContainer>
          <Photo source={{ uri:'https://github.com/lucasjunior24.png' }} />
          <PhotoButton onPress={() => {}}>
            <Feather 
              name="camera"
              size={24}
              color={theme.colors.shape} />
          </PhotoButton>
        </PhotoContainer>
      </Header>
    </Container>
  );
}