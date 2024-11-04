import styled from 'styled-components';
import OrderListItem from '@components/OrderHistory/OrderListItem';
import { useLocation } from 'react-router-dom';

import Menubar from '@components/mypage/Menubar';
import OrderDetailCreater from '@components/OrderHistoryDetail/OrderDetailCreater';
import OrderDetailMember from '@components/OrderHistoryDetail/OrderDetailMember';

import { OrderDetailCreator } from '@components/OrderHistoryDetail/data';

const OrderDetailPage = () => {
  const location = useLocation();
  const isCreater: boolean = location.state.createrModeData;

  return (
    <Wrapper>
      <InnerWrapper>
        <Menubar />
        <OrderListItem
          category={OrderDetailCreator.category}
          storeName={OrderDetailCreator.storeName}
          pickUpLocation={OrderDetailCreator.pickUpLocation}
        />
      </InnerWrapper>
      <InnerWrapper>
        {isCreater ? <OrderDetailCreater /> : <OrderDetailMember />}
      </InnerWrapper>
    </Wrapper>
  );
};
export default OrderDetailPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
