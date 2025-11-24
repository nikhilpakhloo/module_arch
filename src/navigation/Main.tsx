import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../modules/profile";
import { Home } from "../modules/home";
import { useTheme } from "../common/providers/ThemeProvider";
import { Icon } from "../common/components";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
      
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ tabBarLabel: "Home" , tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={size} color={color} />
        ),}}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{ tabBarLabel: "Profile" , tabBarIcon: ({ color, size }) => (
          <Icon name="user" size={size} color={color} />
        ),}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
