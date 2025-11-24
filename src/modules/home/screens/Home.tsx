import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../common/providers/ThemeProvider";

const Home = () => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Text style={{ color: theme.colors.text }}>
        Home
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
