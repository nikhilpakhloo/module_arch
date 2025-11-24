import home from "../../assets/svg/home.svg";
import user from "../../assets/svg/user.svg";

export const svgMap = {
  "home": home,
  "user": user,
} as const;

export type SvgName = keyof typeof svgMap;
