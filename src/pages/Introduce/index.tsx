import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Common } from '@styles/globalStyle';
import Button from '@components/common/Button';
import Background from '@components/common/Background/index';

const IntroducePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Background left>
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
                onClick={() => navigate('/spot')}
              />
            </ButtonWrapper>
          </TextWrapper>
        </Content>
      </Background>
      <Background />
    </Wrapper>
  );
};

export default IntroducePage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
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
