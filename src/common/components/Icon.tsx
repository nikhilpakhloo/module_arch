import React from "react";
import { SvgProps } from "react-native-svg";
import { svgMap, SvgName } from "../../assets/svg/svgMap";

interface IconProps extends SvgProps {
  name: SvgName;
  size?: number;      
  color?: string;  
  stroke?: string;    
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  stroke,
  ...props
}) => {
  const SvgComponent = svgMap[name];

  if (!SvgComponent) {
    console.warn(`Icon "${name}" not found in svgMap`);
    return null;
  }

  return (
    <SvgComponent
      width={size}
      height={size}
      fill={color}
      stroke={stroke}
      {...props}
    />
  );
};
