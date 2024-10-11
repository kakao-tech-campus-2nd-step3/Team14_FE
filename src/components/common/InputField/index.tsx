/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  bgColor?: string;
  radius?: string;
  width?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  bgColor = '#ffffff',
  radius = '8px',
  width = '100%',
  ...rest
}) => (
  <StyledInput
    placeholder={placeholder}
    value={value}
    bgColor={bgColor}
    radius={radius}
    width={width}
    {...rest}
  />
);

const StyledInput = styled.input<{
  bgColor: string;
  radius: string;
  width: string;
}>`
  background-color: ${(props) => props.bgColor || '#ffffff'};
  border: 1px solid #e0e0e0;
  border-radius: ${(props) => props.radius || '8px'};
  padding: 10px 15px;
  width: ${(props) => props.width || '100%'};
  font-size: 16px;
  color: #333333;
  outline: none;

  &::placeholder {
    color: #b0b0b0;
  }

  &:focus {
    border-color: #a0a0a0;
  }
`;

export default InputField;
