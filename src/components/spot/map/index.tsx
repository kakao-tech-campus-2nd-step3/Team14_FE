import { LocationContext } from '@provider/Location';
import { useContext } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { BsPlusCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { Common } from '@styles/globalStyle';

const KakaoMap = () => {
  const { location } = useContext(LocationContext);

  return (
    <Map
      center={{ lat: location.lat, lng: location.lng }}
      style={{ width: '100%', height: '100%' }}
      level={3}
    >
      <PlusBtn>
        <BsPlusCircleFill size="50" />
      </PlusBtn>
      <MapMarker
        position={{
          lat: location.lat,
          lng: location.lng,
        }}
      />
    </Map>
  );
};
export default KakaoMap;

const PlusBtn = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: ${Common.zIndex.common};
  cursor: pointer;
`;
