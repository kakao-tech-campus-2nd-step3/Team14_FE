import styled from '@emotion/styled';
import Logo from './Logo';

const Card = () => {
  return (
    <Container>
      <Logo image={'/image/restaurant.png'} />
      <Wrapper>
        <Category>[토스트]</Category>
        <Title>이삭토스트</Title>
        <Address>픽업 | 경기 용인시 수지구 용구대로 2770</Address>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 530px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #fff;
  opacity: 0.8;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-left: 20px;
`;

const Category = styled.div`
  font-size: 20px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const Address = styled.div``;

export default Card;
