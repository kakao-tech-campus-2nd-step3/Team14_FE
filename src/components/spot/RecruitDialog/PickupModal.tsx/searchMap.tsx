import { LocationContext } from '@provider/Location';
import { useContext, useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { SearchSpotContext } from '@provider/SearchSpot';
import styled from 'styled-components';
import { Common } from '@styles/globalStyle';
import Button from '@components/common/Button';

interface Props {
  onRequestClose: () => void;
}

const SearchMap = ({ onRequestClose }: Props) => {
  const { location } = useContext(LocationContext);
  const { bound, address, setAddress } = useContext(SearchSpotContext);

  const [map, setMap] = useState();
  const [marker, setMarker] = useState({
    lat: location.lat,
    lng: location.lng,
  });

  const dragEnd = (marker: any) => {
    //위도(lat,Ma), 경도(lng,La)
    const { La, Ma } = marker.getPosition();
    setAddress({ lat: Ma, lng: La, address: '' });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      let geocoder = new kakao.maps.services.Geocoder();
      if (address) {
        geocoder.coord2Address(address.lng, address.lat, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            setAddress({ ...address, address: result[0].address.address_name });
          }
        });
      }
    } catch (e) {
      //TODO: 에러 발생시 대체 코드 구현 필요
    } finally {
      onRequestClose();
    }
  };

  useEffect(() => {
    if (bound) {
      //@ts-ignore
      map?.setBounds(bound);
      //@ts-ignore
      const lng = (map?.getBounds(bound).oa + map?.getBounds(bound).ha) / 2;
      //@ts-ignore
      const lat = (map?.getBounds(bound).pa + map?.getBounds(bound).qa) / 2;
      setMarker({ lat: lat, lng: lng });
      setAddress({ lat: lat, lng: lng, address: '' });
    }
  }, [bound]);

  return (
    <Map
      center={{ lat: location.lat, lng: location.lng }}
      style={{
        width: '800px',
        height: '600px',
        borderRadius: '0 0 30px 30px',
      }}
      level={3}
      //@ts-ignore
      onCreate={setMap}
    >
      <Explain>배달 받을 장소를 검색 또는 핀을 이동 시켜 선택해보세요.</Explain>
      <MapMarker
        position={{
          lat: marker.lat,
          lng: marker.lng,
        }}
        draggable={true}
        onDragEnd={(marker) => dragEnd(marker)}
      />
      <BtnWrapper>
        <Button
          label="확인"
          bgColor={Common.colors.primary}
          padding="10px 20px"
          radius="20px"
          onClick={handleClick}
        />
      </BtnWrapper>
    </Map>
  );
};
export default SearchMap;

const Explain = styled.div`
  z-index: ${Common.zIndex.common};
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${Common.colors.primary08};
  padding: 10px;
  color: white;
`;

const BtnWrapper = styled.div`
  z-index: ${Common.zIndex.common};
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
