/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';

interface BackgroundProps {
  left?: boolean;
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ left, children }) => (
  <StyledBackground left={left}>
    {children}
    {!left && (
      <ImageWrapper>
        <Image src="/image/motocycle.png" alt="오토바이 이미지" />
      </ImageWrapper>
    )}
  </StyledBackground>
);

export default Background;

const StyledBackground = styled.div<{ left?: boolean }>`
  width: ${(props) => (props.left ? '70%' : '30%')};
  background-color: ${(props) => (props.left ? '#f3f3f3' : 'white')};
  display: flex;
  justify-content: ${(props) => (props.left ? 'flex-start' : 'center')};
  align-items: ${(props) => (props.left ? 'flex-start' : 'flex-end')};
  padding: ${(props) => (props.left ? '200px 180px' : '0')};
  position: relative;
  ${(props) => props.left && 'border-bottom-right-radius: 300px;'}
`;

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 700px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
