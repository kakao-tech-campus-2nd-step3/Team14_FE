import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button';
import { Common } from '@styles/globalStyle';

const MyPoint: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
  };

  return (
    <Container>
      <Title>My Point</Title>
      <PointBalance>
        {selectedAmount ? `${selectedAmount.toLocaleString()} P` : '0 P'}
      </PointBalance>
      <AmountOptions>
        {[5000, 10000, 20000, 30000].map((amount) => (
          <AmountOption key={amount}>
            <input
              type="radio"
              id={`amount-${amount}`}
              name="amount"
              value={amount}
              checked={selectedAmount === amount}
              onChange={() => handleAmountClick(amount)}
            />
            <label htmlFor={`amount-${amount}`}>
              {amount.toLocaleString()}P
            </label>
          </AmountOption>
        ))}
        <Button
          label="충전"
          bgColor={Common.colors.primary}
          radius="30px"
          padding="10px 20px"
        />
      </AmountOptions>
    </Container>
  );
};

export default MyPoint;

const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-family: 'PaperlogyBold';
  text-align: left;
`;

const PointBalance = styled.div`
  background-color: ${Common.colors.primary};
  color: white;
  font-size: 1.5rem;
  font-family: 'PaperlogyBold';
  padding: 25px;
  border-radius: 10px;
  text-align: left;
`;

const AmountOptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
`;

const AmountOption = styled.div`
  display: flex;
  align-items: center;

  input[type='radio'] {
    margin-right: 5px;
  }

  label {
    font-size: 1rem;
    color: #888;
    cursor: pointer;
  }

  input[type='radio']:checked + label {
    color: #6a0dad;
    font-family: 'PaperlogyBold';
  }
`;
