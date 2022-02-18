import React from 'react'
import { 
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedbackBase,
  Keyboard
} from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import theme from '../../styles/theme';

import { 
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer
} from './styles';

export function SignIn() {
  return (
    <KeyboardAvoidingView behavior='position' enabled >
      <TouchableWithoutFeedbackBase onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar 
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          <Header>
            <Title>
              Estamos{'\n'} 
              quase lá.
            </Title>
            <SubTitle>
              Faça seu login para começar{'\n'}
              Uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input 
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
            />

            <PasswordInput
              iconName='lock'
              placeholder='Senha'
            />
          </Form>

          <Footer>
            <Button 
              title='Login'
              onPress={() => {}}
              enabled={false}
              loading={false}
            /> 

            <Button 
              title='Criar conta Gratuita'
              color={theme.colors.background_secondary}
              light
              onPress={() => {}}
              enabled={false}
              loading={false}
            /> 
          </Footer>

        </Container>
      </TouchableWithoutFeedbackBase>
    </KeyboardAvoidingView>
  );
}