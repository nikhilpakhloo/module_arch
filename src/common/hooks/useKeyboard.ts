import { useEffect, useState } from "react";
import { Keyboard, KeyboardEvent } from "react-native";
import { isIOS } from "../utils";

interface KeyboardState {
  keyboardShown: boolean;
  keyboardHeight: number;
}

export const useKeyboard = (): KeyboardState => {
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showEvent = isIOS ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = isIOS ? "keyboardWillHide" : "keyboardDidHide";

    const handleShow = (event: KeyboardEvent) => {
      setKeyboardShown(true);
      setKeyboardHeight(event.endCoordinates.height);
    };

    const handleHide = () => {
      setKeyboardShown(false);
      setKeyboardHeight(0);
    };

    const showSub = Keyboard.addListener(showEvent, handleShow);
    const hideSub = Keyboard.addListener(hideEvent, handleHide);

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return { keyboardShown, keyboardHeight };
};
