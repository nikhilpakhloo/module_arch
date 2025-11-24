import React from "react";
import { SvgProps } from "react-native-svg";
import { svgMap, SvgName } from "../../assets/svg/svgMap";

interface IconProps extends SvgProps {
  name: SvgName;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color, ...props }) => {
  const SvgComponent = svgMap[name];
  return <SvgComponent width={size} height={size} fill={color} {...props} />;
};
