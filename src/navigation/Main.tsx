import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../modules/profile";
import { Home } from "../modules/home";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    
  )
}
function ProfileStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}
const TabNavigator = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="HomeStack" component={HomeStack} />
          <Tab.Screen name="ProfileStack" component={ProfileStack} />
        </Tab.Navigator>
    );
};
export default TabNavigator;