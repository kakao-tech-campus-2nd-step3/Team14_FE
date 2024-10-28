/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface BackgroundProps {
  left?: boolean;
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ left, children }) => (
  <StyledBackground left={left}>
    {children}
    {!left && (
      <ImageWrapper>
        <Image src="/image/motocycle.png" alt="오토바이" />
      </ImageWrapper>
    )}
  </StyledBackground>
);

export default Background;

const backgroundStyles = (left?: boolean) => css`
  width: ${left ? '70%' : '30%'};
  background-color: ${left ? '#f3f3f3' : 'white'};
  display: flex;
  justify-content: ${left ? 'flex-start' : 'center'};
  align-items: ${left ? 'flex-start' : 'flex-end'};
  padding: ${left ? '200px 180px' : '0'};
  position: relative;
  ${left && 'border-bottom-right-radius: 300px;'}
`;

const StyledBackground = styled.div<{ left?: boolean }>`
  ${(props) => backgroundStyles(props.left)}
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
