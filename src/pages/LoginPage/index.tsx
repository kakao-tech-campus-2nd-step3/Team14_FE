import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Background from '@components/common/Background/index';
import { HEADER_HEIGHT } from '@components/features/Layout/Header';
import { fetchInstance } from '@api/instance/index';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthContext } from '@provider/AuthProvider';
import Modal from '@components/common/Modal';
import AlertDialog from '@components/common/Modal/AlertDialog';

import { RouterPath } from '@routes/path';

const KAKAO_CLIENT_ID = '709c9edf5275cd3bedfb03c7f92e7af5';
const KAKAO_REDIRECT_URI = 'https://team14-fe-livid.vercel.app/login';
const KAKAO_AUTH_URL = 'https://kauth.kakao.com/oauth/authorize';

const LoginPage: React.FC = () => {
  const location = useLocation();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [isCodeProcessed, setIsCodeProcessed] = useState(false);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false); // Modal state
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get('code');

    if (code && !isCodeProcessed) {
      if (sessionStorage.getItem('codeProcessed')) return;

      setIsCodeProcessed(true);
      sessionStorage.setItem('codeProcessed', 'true');

      // http://3.39.23.121:8080/api/v1/auth/login
      // https://order-together.duckdns.org/api/v1/auth/login
      // http://43.203.132.224:8080/api/v1/auth/login
      fetchInstance
        .get(`/auth/login`, {
          headers: {
            Authorization: `Bearer ${code}`,
            'Content-Type': 'application/json',
          },
          maxRedirects: 0,
        })
        .then((response) => {
          if (response.status === 302) {
            window.location.href = response.data.redirectURL;
          }
          const accessToken = response.data.data.token;
          if (accessToken) {
            Cookies.set('access_token', accessToken);
            setIsLoggedIn(true);

            navigate(RouterPath.root);
            navigate(0);
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 404) {
              const redirectUrl = error.request.responseURL;
              if (redirectUrl) {
                window.location.href = redirectUrl;
              }
            } else {
              navigate(RouterPath.root);
            }
          } else {
            navigate(RouterPath.root);
          }
        });
    }
  }, [location.search, isCodeProcessed, setIsLoggedIn]);

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

      <Modal
        size="small"
        type="warning"
        isOpen={errorModalIsOpen}
        onRequestClose={() => setErrorModalIsOpen(false)}
        title={<div style={{ color: 'white' }}>에러 발생</div>}
        content={
          <AlertDialog
            type="warning"
            content="로그인을 실패하였습니다."
            onRequestConfirm={() => setErrorModalIsOpen(false)}
          />
        }
      />
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
