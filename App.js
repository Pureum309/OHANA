import 'react-native-gesture-handler'

import React from "react";

import Navigation from './comps/Navigation';
import UserContext from './UserContext';
import HomeScreen from "./screen/HomeScreen";
import { PropsService } from '@ui-kitten/components/devsupport';

export default function App() {
  return (
    <UserContext.Provider>
      <Navigation />
    </UserContext.Provider>
  );
}


