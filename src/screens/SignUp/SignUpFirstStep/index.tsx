import React from 'react';
import { useNavigation } from '@react-navigation/native'

import { 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';

import {
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle
} from './styles';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

export function SignUpFirstStep() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }
  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>
            Crie sua{'\n'}conta
          </Title>
          <Subtitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </Subtitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input iconName='user' placeholder='Nome' />
            <Input iconName='mail' placeholder='E-mail' />
            <Input iconName='credit-card' placeholder='CNH' />
          </Form>

          <Button 
            title='Proximo'
            />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}