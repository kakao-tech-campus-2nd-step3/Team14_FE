import styled from 'styled-components';
import { Common } from '@styles/globalStyle';

import Button from '@components/common/Button';

interface Props {
  deliveryName: string;
  price: number;
  isPayed: boolean;
}

const OrderHistoryDetailItem = ({ deliveryName, price, isPayed }: Props) => {
  const stringPrice = price.toLocaleString('ko-KR');
  return (
    <ListItem>
      <InfoWrapper>
        <CheckBox type="checkbox" />
        {isPayed ? (
          <Text>
            &apos;{deliveryName}&apos;님이 {stringPrice}P 결제 완료했습니다.
          </Text>
        ) : (
          <Text>&apos;{deliveryName}&apos;님 미결제입니다.</Text>
        )}
      </InfoWrapper>
      {isPayed ? (
        <Button label="완료" radius="20px" bgColor={Common.colors.primary} />
      ) : (
        <Button label="결제요청" radius="20px" />
      )}
    </ListItem>
  );
};

export default OrderHistoryDetailItem;

const ListItem = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #9e9e9e;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  appearance: none;
  width: 30px;
  height: 30px;
  border: 1.5px solid ${Common.colors.primary};
  border-radius: 5px;
  margin-right: 10px;

  &:checked {
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${Common.colors.primary};
    background-image: url("data:image/svg+xml,%3csvg viewBox='2.5 2.5 11 11' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  }
`;

const Text = styled.p`
  font-size: 20px;
`;
