import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../modules/auth";
const Stack = createNativeStackNavigator();
function LoginStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}
export default LoginStack;