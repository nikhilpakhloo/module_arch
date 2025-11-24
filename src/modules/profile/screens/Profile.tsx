import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../common/providers/ThemeProvider";

const Profile = () => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Text style={{ color: theme.colors.text }}>
        Profile
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
