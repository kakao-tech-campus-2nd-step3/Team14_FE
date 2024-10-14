import { LocationContext } from '@provider/Location';
import { useContext, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { BsPlusCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { Common } from '@styles/globalStyle';
import Modal from '@components/common/Modal';

const KakaoMap = () => {
  const { location } = useContext(LocationContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Map
      center={{ lat: location.lat, lng: location.lng }}
      style={{ width: '100%', height: '100%' }}
      level={3}
    >
      <PlusBtn onClick={() => setIsOpen(true)}>
        <BsPlusCircleFill size="50" />
      </PlusBtn>
      <MapMarker
        position={{
          lat: location.lat,
          lng: location.lng,
        }}
      />
      <Modal
        size="big"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        title="모집"
        content={<div></div>}
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
