import React from 'react';
import styled from '@emotion/styled';
import Background from '@components/common/Background/index';
import { HEADER_HEIGHT } from '@components/features/Layout/Header';
import InputField from '@components/common/InputField';
import Button from '@components/common/Button';
import { Common } from '@styles/globalStyle';

const signupPage: React.FC = () => (
  <Wrapper>
    <Background left>
      <Content>
        <Title>회원정보 입력</Title>
        <Form>
          <StyledInputField
            placeholder="전화번호"
            width="90%"
            radius="30px"
            padding="20px 25px"
          />
          <StyledInputField
            placeholder="배달의 민족 닉네임"
            width="90%"
            radius="30px"
            padding="20px 25px"
          />
          <CheckboxWrapper>
            <CheckboxLabelWrapper>
              <input type="checkbox" id="marketingConsent" />
              <Label htmlFor="marketingConsent">
                (필수) 마케팅 정보 수신 동의
              </Label>
            </CheckboxLabelWrapper>
            <Button
              label="완료"
              bgColor={Common.colors.primary}
              radius="20px"
              padding="10px 30px"
            />
          </CheckboxWrapper>
        </Form>
      </Content>
    </Background>
    <Background />
  </Wrapper>
);

export default signupPage;

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
