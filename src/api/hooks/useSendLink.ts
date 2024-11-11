import { fetchAuthInstance } from '@api/instance';
import { useMutation } from '@tanstack/react-query';

interface PostData {
  spotId: string;
}

const getPath = () => {
  return `/api/v1/spot/sms`;
};

const sendLink = async (postData: PostData) => {
  return await fetchAuthInstance.post(getPath(), postData);
};

export const useSendLink = (postData: PostData) => {
  return useMutation({
    mutationFn: () => sendLink(postData),
  });
};
