import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
import { MyCars } from '../screens/MyCars';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator headerMode='none' initialRouteName='Home' >
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
        name='Home'
        component={Home}
      />
      <Screen
        name='CarDetails'
        component={CarDetails}
      />
      <Screen
        name='Scheduling'
        component={Scheduling}
      />
      <Screen
        name='SchedulingDetails'
        component={SchedulingDetails}
      />
      <Screen
        name='Confirmation'
        component={Confirmation}
      />
      <Screen
        name='MyCars'
        component={MyCars}
      />
    </Navigator>
  );
}