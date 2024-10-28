import { createContext, ReactNode, useState } from 'react';

interface Bounds {
  ha: number;
  oa: number;
  pa: number;
  qa: number;
}

interface Address {
  lat: number;
  lng: number;
  address: string;
}

interface SearchSpotInfo {
  bound: Bounds;
  setBound: React.Dispatch<React.SetStateAction<Bounds>>;
  address: Address;
  setAddress: React.Dispatch<React.SetStateAction<Address>>;
}

export const SearchSpotContext = createContext<SearchSpotInfo>(
  {} as SearchSpotInfo,
);
export const SearchSpotProvider = ({ children }: { children: ReactNode }) => {
  const [bound, setBound] = useState<Bounds>();
  const [address, setAddress] = useState<Address>();

  const value = { bound, setBound, address, setAddress };
  return (
    //@ts-ignore
    <SearchSpotContext.Provider value={value}>
      {children}
    </SearchSpotContext.Provider>
  );
};
