import { fetchAuthInstance } from '@api/instance';
import { useMutation } from '@tanstack/react-query';

interface PostData {
  lat: number;
  lng: number;
  category: string;
  storeName: string;
  minimumOrderAmount: number;
  togetherOrderLink: string;
  pickUpLocation: string;
}

const getPath = () => {
  return `http://3.34.191.43:8080/api/v1/spot`;
};

const postSpot = async (postData: PostData) => {
  return await fetchAuthInstance.post(getPath(), postData);
};

export const usePostSpot = () => {
  return useMutation({
    mutationFn: (postData: PostData) => postSpot(postData),
  });
};
