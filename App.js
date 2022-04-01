import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/navigation/rootNavigation";

import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
        <AuthNavigator />
      </NavigationContainer>
    </React.Fragment>
  );
}
