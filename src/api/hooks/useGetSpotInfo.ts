import { fetchInstance } from '@api/instance';
import { useQuery } from '@tanstack/react-query';

interface RequestParams {
  lat: number;
  lng: number;
}

const getPath = ({ lat, lng }: RequestParams) => {
  return `http://3.34.191.43:8080/api/v1/spot/${lat}/${lng}`;
};

const getSpotInfo = async ({ lat, lng }: RequestParams) => {
  return await fetchInstance.get(getPath({ lat, lng }));
};

export const useGetSpotInfo = ({ lat, lng }: RequestParams) => {
  return useQuery({
    queryKey: [{ lat, lng }],
    queryFn: () => getSpotInfo({ lat, lng }),
  });
};
