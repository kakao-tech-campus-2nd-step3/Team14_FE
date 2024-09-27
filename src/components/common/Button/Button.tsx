import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button<{ bgColor: string; radius: string }>`
  background-color: ${(props) => props.bgColor || '#ffd500'};
  color: white;
  padding: 9px 15px;
  border: none;
  border-radius: ${(props) => props.radius || '5px'};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: ${(props) =>
      props.bgColor === '#ffd500' ? '#e6c200' : '#d4b000'};
  }
`;

interface ButtonProps {
  label: string;
  onClick?: () => void;
  bgColor?: string;
  radius?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  bgColor = '#ffd500',
  radius = '5px',
}) => (
  <StyledButton onClick={onClick} bgColor={bgColor} radius={radius}>
    {label}
  </StyledButton>
);

Button.defaultProps = {
  onClick: undefined,
  bgColor: '#ffd500',
  radius: '5px',
};

export default Button;
