import React from 'react';
import styled from '@emotion/styled';
import { Common } from '../../styles/globalStyle';
import Button from '../../components/common/Button/Button';

const IntroducePage: React.FC = () => {
  return (
    <Wrapper>
      <LeftBackground>
        <Content>
          <TextWrapper>
            <Title>다같이 시켜먹어요</Title>
            <HighlightText>요기 먹때에서</HighlightText>
            <Description>
              함께 주문을 통해 배달팁을 줄이고, 최소 주문금액을 맞춰요!!
            </Description>
            <ButtonWrapper>
              <Button
                label="주문하러가기"
                bgColor={Common.colors.yellow}
                radius="25px"
              />
            </ButtonWrapper>
          </TextWrapper>
        </Content>
      </LeftBackground>
      <RightBackground>
        <ImageWrapper>
          <Image src="/image/motocycle.png" alt="오토바이 이미지" />
        </ImageWrapper>
      </RightBackground>
    </Wrapper>
  );
};

export default IntroducePage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const LeftBackground = styled.div`
  width: 70%;
  background-color: #f3f3f3;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 200px 180px;
  border-bottom-right-radius: 300px;
`;

const RightBackground = styled.div`
  width: 30%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

const Content = styled.div`
  max-width: 600px;
  padding: 50px;
`;

const TextWrapper = styled.div`
  max-width: 100%;
`;

const Title = styled.h1`
  font-size: 70px;
  color: #505050;
  font-weight: 50;
  margin-bottom: 0;
`;

const HighlightText = styled.h2`
  font-size: 75px;
  color: ${Common.colors.primary};
  font-weight: bold;
  margin: 0 0 20px 0;
`;

const Description = styled.p`
  font-size: 22px;
  color: #666;
  margin-bottom: 60px;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
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
