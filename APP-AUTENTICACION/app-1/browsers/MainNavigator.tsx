import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import Listalocalscreen from "../screens/ListalocalScreen";
import Listaexternascreen from "../screens/Listaexternascreen";

const Stack = createStackNavigator();
const Top = createMaterialTopTabNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Top">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Top" component={MyTop} />
        </Stack.Navigator>
    );
}

function MyTop() {
    return (
        <Top.Navigator initialRouteName="ListaExterna">
            <Top.Screen name="Listalocal" component={Listalocalscreen} />
            <Top.Screen name="ListaExterna" component={Listaexternascreen} />
        </Top.Navigator>
    );
}

export default function NavegadorPrincipal() {
   return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
   );
}