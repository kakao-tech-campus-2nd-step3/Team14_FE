import styled from '@emotion/styled';
import Logo from './Logo';

interface Props {
  key: number;
  category: string;
  title: string;
  address: string;
}
const SlideItem = ({ category, title, address }: Props) => {
  return (
    <Container>
      <Logo image={'/image/restaurant.png'} />
      <Wrapper>
        <Category>[{category}]</Category>
        <Title>{title}</Title>
        <Address>픽업 | {address}</Address>
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
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  flex-shrink: 0;
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

export default SlideItem;
