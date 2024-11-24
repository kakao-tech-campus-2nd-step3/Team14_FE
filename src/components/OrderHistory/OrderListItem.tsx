import Logo from '@components/common/Logo';
import styled from '@emotion/styled';

interface Props {
  category: string;
  storeName: string;
  pickUpLocation: string;
  price?: number;
  deliveryStatus: string;
  date: number[];
}

const OrderListItem = ({
  category,
  storeName,
  pickUpLocation,
  price,
  deliveryStatus,
  date,
}: Props) => {
  return (
    <Wrapper>
      <Logo image={`/image/categories/${category.replaceAll(', ', ',')}.png`} />
      <Container>
        <Title>
          [{category}] {storeName}
        </Title>
        <span style={{ color: '#7E7E7E' }}>
          주문 날짜: {date[0]}-{date[1]}-{date[2]} <br />
          픽업장소: {pickUpLocation}
          <br />
          {price && price !== -1 ? `결제금액: ${price}P` : ''}
        </span>
      </Container>
    </Wrapper>
  );
};

export default OrderListItem;

const Wrapper = styled.div`
  width: 700px;
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
