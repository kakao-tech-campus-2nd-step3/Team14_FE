import styled from '@emotion/styled';

interface Props {
  category: string;
  storeName: string;
  pickUpLocation: string;
  price: number;
}

const OrderListItem = ({
  category,
  storeName,
  pickUpLocation,
  price,
}: Props) => {
  return (
    <Wrapper>
      <img src="/image/restaurant.png" alt="식당 이미지" />
      <Container>
        <div>
          <img src="/image/ing.png" alt="진행중" />
          <ProgressLabel>진행중</ProgressLabel>
        </div>

        <Title>
          [{category}] {storeName}
        </Title>
        <span style={{ color: '#7E7E7E' }}>
          주문 날짜: 2024-08-13 <br />
          픽업장소: {pickUpLocation}
          <br />
          결제금액: {price}P
        </span>
      </Container>
    </Wrapper>
  );
};

export default OrderListItem;

const Wrapper = styled.div`
  width: 100%;
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
