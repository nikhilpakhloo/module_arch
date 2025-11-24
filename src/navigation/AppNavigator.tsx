import TabNavigator from "./Main"
import LoginStack from "./Auth"
import { NavigationContainer } from "@react-navigation/native";

export default function AppNavigator() {
    const isLoggedIn = true;

    return (
        <NavigationContainer>
            {isLoggedIn ? <TabNavigator /> : <LoginStack />}
        </NavigationContainer>
    )
}