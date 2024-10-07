import Modal from '@components/common/Modal';
import AlertDialog from '@components/common/Modal/AlertDialog';
import { HEADER_HEIGHT } from '@components/features/Layout/Header';
import KakaoMap from '@components/spot/map';
import Swiper from '@components/spot/swiper';
import styled from '@emotion/styled';
import { Common } from '@styles/globalStyle';

const SpotPage = () => (
  <Wrapper>
    <LeftWrapper>
      <Swiper />
    </LeftWrapper>
    <KakaoMap />
  </Wrapper>
);

export default SpotPage;

const Wrapper = styled.div`
  max-width: 1700px;
  height: calc(100vh - ${HEADER_HEIGHT});
  margin: 0 auto;
  display: flex;
`;

const LeftWrapper = styled.div`
  background-color: ${Common.colors.yellowBg};
  width: 35%;
`;
