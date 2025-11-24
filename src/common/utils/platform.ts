import { Platform } from "react-native";

export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const isWeb = Platform.OS === "web";

export const platformSelect = <T,>(options: {
  ios?: T;
  android?: T;
  web?: T;
  default?: T;
}): T => {
  switch (Platform.OS) {
    case "ios":
      return (options.ios ?? options.default)!;
    case "android":
      return (options.android ?? options.default)!;
    case "web":
      return (options.web ?? options.default)!;
    default:
      return options.default as T;
  }
};

export const deviceInfo = {
  isIOS,
  isAndroid,
  isWeb,
  version: Platform.Version,
};
