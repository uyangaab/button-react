import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  color: 'primary' | 'secondary' | 'destructive' | 'gray';
  size: 'small' | 'medium' | 'large';
  variant: 'filled' | 'outline' | 'text';
  state: 'default' | 'hovered' | 'focused' | 'pressed' | 'disabled';
}

export const Button = ({
  label,
  size = "large",
  color = "primary",
  variant = "text",
  state = "default",
  ...props
}: ButtonProps) => {
  const mode = color === 'primary' ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
