import 'react-native-gesture-handler'

import React from "react";

import Navigation from './comps/Navigation';
import UserContext from './UserContext';
import HomeScreen from "./screen/HomeScreen";
import { PropsService } from '@ui-kitten/components/devsupport';

//************ testing tutorial  ***************
import TutorialScreen from './screen/TutorialScreen';

export default function App() {
  return (
    <UserContext.Provider>
      <TutorialScreen />
    </UserContext.Provider>
  );
}


