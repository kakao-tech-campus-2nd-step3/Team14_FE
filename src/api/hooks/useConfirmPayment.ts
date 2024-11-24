import Cookies from 'js-cookie';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

interface PaymentResponse {
  message: string;
  data?: any;
}

interface ConfirmPaymentParams {
  orderId: string;
  amount: number;
  paymentKey: string | null;
}

const confirmPayment = async ({
  orderId,
  amount,
  paymentKey,
}: ConfirmPaymentParams): Promise<PaymentResponse> => {
  const accessToken = Cookies.get('access_token');
  if (!accessToken) {
    throw new Error('인증 토큰이 없습니다. 다시 로그인해주세요.');
  }

  const response = await axios.post(
    'http://3.36.88.170:8080/api/v1/payments/confirm',
    { orderId, amount, paymentKey },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return response.data;
};

const useConfirmPayment = () =>
  useMutation<PaymentResponse, Error, ConfirmPaymentParams>({
    mutationFn: confirmPayment,
  });

export default useConfirmPayment;
