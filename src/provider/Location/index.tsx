import { createContext, ReactNode, useState } from 'react';

interface LocationInfo {
  location: {
    dong: string;
    lat: number;
    lng: number;
  };
  setLocation: React.Dispatch<
    React.SetStateAction<{ dong: string; lat: number; lng: number }>
  >;
}

const defaultLocation = {
  location: {
    dong: '위치설정',
    lat: 33.450701,
    lng: 126.570667,
  },
  setLocation: () => {},
};

export const LocationContext = createContext<LocationInfo>(defaultLocation);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const DEFAULT_LOCATION =
    '{"dong":"위치설정","lat": "33.450701", "lng": "126.570667"}';
  const PRESENT_LOCATION = localStorage.getItem('location');

  const [location, setLocation] = useState(
    JSON.parse(PRESENT_LOCATION || DEFAULT_LOCATION),
  );
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
