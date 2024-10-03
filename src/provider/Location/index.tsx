import { createContext, ReactNode, useState } from 'react';

interface LocationInfo {
  location: {
    lat: number;
    lng: number;
  };
  setLocation: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }>
  >;
}

const defaultLocation = {
  location: {
    lat: 33.450701,
    lng: 126.570667,
  },
  setLocation: () => {},
};

// TODO:쿠키에 location 저장하고, 쿠키에 값 있다면 쿠키값으로 default설정하기
// 새로고침시에도 내 동네 설정 될 수 있게
export const LocationContext = createContext<LocationInfo>(defaultLocation);
export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
