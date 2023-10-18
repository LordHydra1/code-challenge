import React from 'react';

interface IconProps {
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ Component, color, className }) => (
  <Component className={`w-[28px] h-[28px] object-contain ${className ? className : ''}`} fill={color} />
);
export default Icon;