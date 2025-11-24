import { createNavigationContainerRef } from "@react-navigation/native";
import {
  CommonActions,
  StackActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef<any>();

const canNavigate = () => navigationRef.isReady();

export const NavigationService = {
  navigate: (name: string, params?: object) => {
    if (canNavigate()) {
      navigationRef.navigate(name, params);
    }
  },

  push: (name: string, params?: object) => {
    if (canNavigate()) {
      const action = StackActions.push(name, params);
      navigationRef.dispatch(action);
    }
  },

  replace: (name: string, params?: object) => {
    if (canNavigate()) {
      const action = StackActions.replace(name, params);
      navigationRef.dispatch(action);
    }
  },

  goBack: () => {
    if (canNavigate() && navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  },

  popToTop: () => {
    if (canNavigate()) {
      const action = StackActions.popToTop();
      navigationRef.dispatch(action);
    }
  },

  reset: (routes: { name: string; params?: object }[], index = 0) => {
    if (canNavigate()) {
      navigationRef.dispatch(
        CommonActions.reset({
          index,
          routes,
        })
      );
    }
  },
};
