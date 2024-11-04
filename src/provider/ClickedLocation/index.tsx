import { createContext, ReactNode, useState } from 'react';

export interface ClickedLocation {
  lat: number;
  lng: number;
}

interface LocationInfo {
  clickedLocation: ClickedLocation | undefined;
  setClickedLocation: React.Dispatch<
    React.SetStateAction<ClickedLocation | undefined>
  >;
}

export const ClickedLocationContext = createContext<LocationInfo>(
  {} as LocationInfo,
);

export const ClickedLocationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [clickedLocation, setClickedLocation] = useState<ClickedLocation>();
  return (
    <ClickedLocationContext.Provider
      value={{ clickedLocation, setClickedLocation }}
    >
      {children}
    </ClickedLocationContext.Provider>
  );
};
