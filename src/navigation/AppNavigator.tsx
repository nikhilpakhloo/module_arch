import TabNavigator from "./Main"
import LoginStack from "./Auth"
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../modules/auth/hooks/useAuth";

export default function AppNavigator() {
    const { isAuthenticated } = useAuth();
    return (
        <NavigationContainer>
            {isAuthenticated ? <TabNavigator /> : <LoginStack />}
        </NavigationContainer>
    )
}