import { LocationContext } from '@provider/Location';
import { useContext } from 'react';
import { Map } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  const { location } = useContext(LocationContext);

  return (
    <Map
      center={{ lat: location.lat, lng: location.lng }}
      style={{ width: '100%', height: '100%' }}
      level={3}
    />
  );
};
export default KakaoMap;
