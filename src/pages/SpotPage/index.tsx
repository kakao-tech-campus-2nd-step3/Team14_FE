import { HEADER_HEIGHT } from '@components/features/Layout/Header';
import KakaoMap from '@components/spot/map';
import StoreList from '@components/spot/storelist';
import Swiper from '@components/spot/swiper';
import styled from '@emotion/styled';
import { Common } from '@styles/globalStyle';

const SpotPage = () => (
  <Wrapper>
    <LeftWrapper>
      <TitleWrapper>
        <Title>마. 감. 임. 박. !</Title>
        <SubTitle>
          주문 마감 <Impact>30분</Impact> 전!
        </SubTitle>
      </TitleWrapper>
      <Swiper />
      <Line />
      {/* TODO: 카테고리 */}
      <StoreList />
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin: 30px 0;
`;

const Title = styled.div`
  font-family: PaperlogyBold;
  font-size: 40px;
`;

const SubTitle = styled.div`
  font-size: 30px;
`;

const Impact = styled.span`
  color: red;
`;

const Line = styled.hr`
  border: 1px dashed ${Common.colors.lightGray};
  width: 100%;
`;
