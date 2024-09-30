import React from 'react';
import styled from '@emotion/styled';

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

interface InputFieldProps {
  placeholder?: string;
  value?: string;
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
}) => (
  <StyledInput
    placeholder={placeholder}
    value={value}
    bgColor={bgColor}
    radius={radius}
    width={width}
  />
);

InputField.defaultProps = {
  placeholder: '입력해 주세요',
  value: '',
  bgColor: '#ffffff',
  radius: '8px',
  width: '100%',
};

export default InputField;
