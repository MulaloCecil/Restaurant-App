import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Card from "./components/Card";
import Receipt from "./components/Receipt";
import Form from "./components/admin/Form";
import ProductsPage from "./components/admin/Products";
import Profile from "./components/Prof";
import Prof from "./components/Prof";
import Forgotpassword from "./components/auth/ForgotPassword";
import { ProfileProvider } from "./components/Profile/Profile";

const Stack = createStackNavigator();

const App = () => {
  return (
    <ProfileProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Card"
            component={Card}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Receipt"
            component={Receipt}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Products"
            component={ProductsPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Form"
            component={Form}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={Forgotpassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Prof"
            component={Prof}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
};

export default App;
