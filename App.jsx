import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import Startingpage from "./pages/Startingpage";
import { NavigationContainer } from "@react-navigation/native";
import Duas from "./pages/Duas";
import SplashScreen from "react-native-splash-screen";
import AppOpenAdManager from "./components/AppOpenAdManager";
const Stack = createNativeStackNavigator();


const App = () => {
useEffect(()=>{
  SplashScreen.hide()
},[])
  return (
    <NavigationContainer >
      <AppOpenAdManager/>
      <Stack.Navigator
        initialRouteName="start"
        screenOptions={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#41644A" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="start" component={Startingpage} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="duas" component={Duas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
