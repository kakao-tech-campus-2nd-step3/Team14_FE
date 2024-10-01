import KakaoMap from '@components/spot/map';
import Swiper from '@components/spot/swiper';
import styled from '@emotion/styled';

const MainPage = () => (
  <Wrapper>
    <Swiper />
    <KakaoMap />
  </Wrapper>
);

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;
