import { HEADER_HEIGHT } from '@components/features/Layout/Header';
import styled from '@emotion/styled';
import { Map } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  return (
    <MapWrapper>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: '100%', height: '100%' }}
        level={3}
      />
    </MapWrapper>
  );
};
export default KakaoMap;
const MapWrapper = styled.div`
  width: 60%;
  height: calc(100vh - ${HEADER_HEIGHT});
`;
