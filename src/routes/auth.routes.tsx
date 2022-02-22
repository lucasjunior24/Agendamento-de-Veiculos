import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Confirmation } from '../screens/Confirmation';
import { SignIn } from '../screens/SignIn';
import { Splash } from '../screens/Splash';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';

const { Screen, Navigator } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator headerMode='none' initialRouteName='SignIn' >
      <Screen
        name='Splash'
        component={Splash}
      />
      <Screen
        name='SignIn'
        component={SignIn}
      />
      <Screen
        name='SignUpSecondStep'
        component={SignUpSecondStep}
      />
      <Screen
        name='SignUpFirstStep'
        component={SignUpFirstStep}
      />
      <Screen
        name='Confirmation'
        component={Confirmation}
      />
    </Navigator>
  );
}