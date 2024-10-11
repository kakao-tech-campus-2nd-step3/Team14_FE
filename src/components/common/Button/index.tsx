/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  bgColor?: string;
  radius?: string;
  padding?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  bgColor = '#ffd500',
  radius = '5px',
  padding = '9px 15px',
  ...rest
}) => (
  <StyledButton
    onClick={onClick}
    bgColor={bgColor}
    radius={radius}
    padding={padding}
    {...rest}
  >
    {label}
  </StyledButton>
);

const StyledButton = styled.button<{
  bgColor: string;
  radius: string;
  padding: string;
}>`
  background-color: ${(props) => props.bgColor || '#ffd500'};
  color: white;
  padding: ${(props) => props.padding || '9px 15px'};
  border: none;
  border-radius: ${(props) => props.radius || '5px'};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
