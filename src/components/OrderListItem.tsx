import React from 'react';
import styled from '@emotion/styled';

const OrderListItem = () => {
  return (
    <Wrapper>
      <img src="/image/restaurant.png" alt="식당 이미지" />
      <Container>
        <div>
          <img src="/image/ing.png" alt="진행중" />
          <ProgressLabel>진행중</ProgressLabel>
        </div>

        <Title>[토스트] 이삭토스트</Title>
        <span style={{ color: '#7E7E7E' }}>
          주문 날짜: 2024-08-13 <br />
          픽업장소: 경기 용인시 수지구 용구대로 2770
          <br />
          결제금액: 11,900P
        </span>
      </Container>
    </Wrapper>
  );
};

export default OrderListItem;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  border: 1px solid #c7c3c3;
  padding: 10px 0;
`;
const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const ProgressLabel = styled.span`
  font-size: 15px;
  margin-left: 10px;
`;
const Title = styled.p`
  font-size: 25px;
  text-align: left;
  margin: 10px 0;
`;
