import React from 'react';
import styled from '@emotion/styled';
import Background from '@components/common/Background/index';
import { HEADER_HEIGHT } from '@components/features/Layout/Header';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';

const KAKAO_CLIENT_ID = '26fa7f4117f85e9410f59d4fb651ef16';
const KAKAO_REDIRECT_URI = 'http://localhost:3000';
const BACKEND_API_URL = 'http://3.39.23.121:8080/api/v1/auth/login';
const KAKAO_AUTH_URL = 'https://kauth.kakao.com/oauth/authorize';

const LoginPage: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get('code');

    if (code) {
      axios
        .post(
          BACKEND_API_URL,
          { code },
          { headers: { 'Content-Type': 'application/json' } },
        )
        .then((response) => {
          const accessToken = response.data.access_token;
          Cookies.set('access_token', accessToken);
        })
        .catch((error) => {
          console.error('로그인 실패:', error);
        });
    }
  }, [location]);

  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `${KAKAO_AUTH_URL}?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <Wrapper>
      <Background left>
        <Content>
          <Title>LOGIN</Title>
          <SubTitle>다같이 시켜먹어요</SubTitle>
          <HighlightText>요기 먹때에서</HighlightText>
          <ButtonWrapper>
            <KakaoButton onClick={handleKakaoLogin}>
              <KakaoIcon src="/image/kakaoLogin.png" alt="카카오 로그인" />
            </KakaoButton>
          </ButtonWrapper>
        </Content>
      </Background>
      <Background />
    </Wrapper>
  );
};

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
