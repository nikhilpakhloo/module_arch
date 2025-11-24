import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../common/providers/ThemeProvider";

const Home = () => {
  const { theme , toggleTheme} = useTheme();

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
      <Button title="Toggle Theme" onPress={toggleTheme} />
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
