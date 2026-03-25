import React from "react";
import { Button } from "antd";
export interface CXAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  callback?: () => void;
}

export const CXAButton = ({
  children,
  variant = "primary",
  callback,
}: CXAButtonProps) => { 
  const buttonType = variant === "primary" ? "primary" : "link";
  return <Button type={buttonType} onClick={()=>callback}>{children}</Button>;
};
