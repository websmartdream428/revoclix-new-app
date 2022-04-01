import React, { useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/navigation/rootNavigation";
import AuthContext from "./app/context/AuthContext";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <StatusBar />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
        <AuthNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
