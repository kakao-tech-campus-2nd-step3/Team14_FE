import Logo from '@components/common/Logo';
import styled from '@emotion/styled';

import { Common } from '@styles/globalStyle';

interface Props {
  key: number;
  category: string;
  title: string;
  address: string;
  center: boolean;
  endSlide: boolean;
}
const SlideItem = ({ category, title, address, center, endSlide }: Props) => {
  return (
    <Container isCenter={center} isEndSlide={endSlide}>
      <Logo image={'/image/restaurant.png'} />
      <Wrapper>
        <Category>[{category}]</Category>
        <Title>{title}</Title>
        <Address>픽업 | {address}</Address>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div(
  (props: { isCenter: boolean; isEndSlide: boolean }) => ({
    flexShrink: 0,
    width: '100%',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    backgroundColor: '#fff',
    opacity: '0.8',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    margin: '0 -5%',
    zIndex: props.isCenter ? Common.zIndex.common : '',
    transform: props.isCenter ? 'translateY(-25px)' : '',
    transition: props.isEndSlide ? '' : 'all 0.5s ease-in-out',
  }),
);

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
