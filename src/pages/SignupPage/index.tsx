import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import Background from '@components/common/Background/index';
import { HEADER_HEIGHT } from '@components/features/Layout/Header';
import InputField from '@components/common/InputField';
import Button from '@components/common/Button';
import { Common } from '@styles/globalStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchInstance } from '@api/instance/index';
import Cookies from 'js-cookie';
import { AuthContext } from '@provider/AuthProvider';
import { RouterPath } from '@routes/path';
import Modal from '@components/common/Modal';
import AlertDialog from '@components/common/Modal/AlertDialog';

const SignupPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [deliveryName, setDeliveryName] = useState<string>('');

  const [isOpen, setIsOpen] = useState(false);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const handleSubmit = () => {
    if (!phoneNumber || !deliveryName) {
      setErrorModalIsOpen(true);
      return;
    }

    if (!checkBox) {
      setIsOpen(true);
      return;
    }

    const query = new URLSearchParams(location.search);
    const email = query.get('email');
    const numericValue = phoneNumber.replace(/[^0-9]/g, '');
    const requestData = {
      deliveryName,
      phoneNumber: numericValue,
    };

    fetchInstance
      .post(`/auth/signup?email=${email}`, requestData)
      .then((response) => {
        if (response.status === 200 && response.data) {
          const accessToken = response.data.data.token;
          Cookies.set('access_token', accessToken);
          setIsLoggedIn(true);
          navigate(RouterPath.root);
          navigate(0);
        }
      })
      .catch((error) => {
        console.log('signup:', error);
      });
  };

  return (
    <Wrapper>
      <Background left>
        <Content>
          <Title>회원정보 입력</Title>
          <Form>
            <Label>숫자만 입력해주세요.</Label>
            <StyledInputField
              placeholder="전화번호"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              width="90%"
              radius="30px"
              padding="20px 25px"
            />
            <StyledInputField
              placeholder="배달의 민족 닉네임"
              value={deliveryName}
              onChange={(e) => setDeliveryName(e.target.value)}
              width="90%"
              radius="30px"
              padding="20px 25px"
            />
            <CheckboxWrapper>
              <CheckboxLabelWrapper>
                <input
                  type="checkbox"
                  id="marketingConsent"
                  checked={checkBox}
                  onClick={() => {
                    if (!checkBox) setIsOpen(true);
                    else setCheckBox(false);
                  }}
                />
                <Label htmlFor="marketingConsent">
                  (필수) 마케팅 정보 수신 동의
                </Label>
              </CheckboxLabelWrapper>
              <Button
                label="완료"
                onClick={handleSubmit}
                bgColor={Common.colors.primary}
                radius="20px"
                padding="10px 100px"
              />
            </CheckboxWrapper>
            <Modal
              size="small"
              type="warning"
              isOpen={errorModalIsOpen}
              onRequestClose={() => setErrorModalIsOpen(false)}
              title={<div style={{ color: 'white' }}>에러 발생</div>}
              content={
                <AlertDialog
                  type="warning"
                  content="회원 정보를 입력해주세요."
                  onRequestConfirm={() => setErrorModalIsOpen(false)}
                />
              }
            />
            <Modal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              title="[요기먹때] 마케팅 정보 수신 동의"
              content={
                <AlertDialog
                  content={
                    <div>
                      개인정보보호법 및 정보통신망 이용촉진 및<br /> 정보보호
                      등에 관한 법률 등 관계법령에 따라
                      <br /> 광고성 정보 전송을 위한 사전 수신동의를 받고
                      있습니다.
                    </div>
                  }
                  onRequestConfirm={() => {
                    setCheckBox(true);
                    setIsOpen(false);
                  }}
                  onRequestClose={() => {
                    setCheckBox(false);
                    setIsOpen(false);
                  }}
                />
              }
            />
          </Form>
        </Content>
      </Background>
      <Background />
    </Wrapper>
  );
};

export default SignupPage;

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
  max-width: 500px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-family: PaperlogyBold;
  font-size: 70px;
  margin: 0;
  color: #333;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  width: 100%;
`;

const StyledInputField = styled(InputField)<{ padding?: string }>`
  padding: ${(props) => props.padding || '20px 25px'};
  border: none;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const CheckboxLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
`;
