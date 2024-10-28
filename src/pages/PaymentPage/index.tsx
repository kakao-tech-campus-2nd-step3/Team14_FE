import React, { useState } from 'react';
import styled from 'styled-components';
import MyPoint from '@components/common/MyPoint';
import Button from '@components/common/Button';
import InputField from '@components/common/InputField';
import { Common } from '@styles/globalStyle';

const PaymentPage: React.FC = () => {
  const [paymentAmount, setPaymentAmount] = useState('');

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentAmount(e.target.value);
  };

  return (
    <Container>
      <Title>결제하기</Title>
      <MyPoint />
      <PaymentSection>
        <Label>결제 금액</Label>
        <InputWrapper>
          <StyledInputField
            type="text"
            value={paymentAmount}
            onChange={handlePaymentChange}
            placeholder="결제 금액을 입력하세요"
            width="80%"
            bgColor="#ededed"
          />
          <Currency>원</Currency>
        </InputWrapper>
        <Button
          label="결제하기"
          bgColor={Common.colors.primary}
          radius="20px"
          padding="12px 24px"
        />
      </PaymentSection>
    </Container>
  );
};

export default PaymentPage;

const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 100px;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PaymentSection = styled.div`
  margin-top: 50px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
  font-family: 'PaperlogyBold';
  display: block;
  margin-bottom: 10px;
  text-align: left;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const StyledInputField = styled(InputField)<{ padding?: string }>`
  background-color: #ededed;
  font-family: 'PaperlogyBold';
  border: none !important;
  padding: 17px 30px !important;
`;

const Currency = styled.span`
  font-size: 1.2rem;
  font-family: 'PaperlogyBold';
  margin-left: 10px;
`;
