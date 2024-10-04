import { LocationContext } from '@provider/Location';
import { useContext } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  const { location } = useContext(LocationContext);

  return (
    <Map
      center={{ lat: location.lat, lng: location.lng }}
      style={{ width: '100%', height: '100%' }}
      level={3}
    >
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
