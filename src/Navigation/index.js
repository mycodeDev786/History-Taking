import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../Welcome/welcome";
import { Home } from "../Home/home";
import { SubScreenList } from "../SublistScreen/subscreenlist";
import { DataScreen } from "../DataScreen/DataScreen";
const Stack = createNativeStackNavigator();
const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SubScreenList"
          component={SubScreenList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DataScreen"
          component={DataScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Nav };
