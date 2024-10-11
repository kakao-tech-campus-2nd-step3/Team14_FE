import React from 'react';
import styled from '@emotion/styled';
import Background from '@components/common/Background/index';
import { HEADER_HEIGHT } from '@components/features/Layout/Header';

const LoginPage: React.FC = () => (
  <Wrapper>
    <Background left>
      <Content>
        <Title>LOGIN</Title>
        <SubTitle>다같이 시켜먹어요</SubTitle>
        <HighlightText>요기 먹때에서</HighlightText>
        <ButtonWrapper>
          <KakaoButton>
            <KakaoIcon src="/image/kakaoLogin.png" alt="카카오 로그인" />
          </KakaoButton>
        </ButtonWrapper>
      </Content>
    </Background>
    <Background />
  </Wrapper>
);

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - ${HEADER_HEIGHT});
  position: relative;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 400px;
  height: 100%;
`;

const Title = styled.h1`
  font-family: PaperlogyBold;
  font-size: 70px;
  margin: 0;
`;

const SubTitle = styled.p`
  font-family: PaperlogyLight;
  font-size: 45px;
  color: #505050;
  margin-bottom: 0;
`;

const HighlightText = styled.p`
  font-family: PaperlogyBold;
  font-size: 45px;
  color: #059770;
  margin-top: 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const KakaoButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 400px;
  height: 71px;
`;
