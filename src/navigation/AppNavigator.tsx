import TabNavigator from "./Main"
import LoginStack from "./Auth"
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../modules/auth/hooks/useAuth";
import { navigationRef } from "./navigationService";

export default function AppNavigator() {
    const { isAuthenticated } = useAuth();
    return (
        <NavigationContainer ref={navigationRef}>
            {isAuthenticated ? <TabNavigator /> : <LoginStack />}
        </NavigationContainer>
    )
}