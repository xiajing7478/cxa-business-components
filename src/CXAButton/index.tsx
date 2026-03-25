import React from "react";
import { Button } from "antd";
export interface CXAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const CXAButton = ({
  children,
  variant = "primary",
}: CXAButtonProps) => {
  const buttonType = variant === "primary" ? "primary" : "link";
  return <Button type={buttonType}>{children}</Button>;
};
