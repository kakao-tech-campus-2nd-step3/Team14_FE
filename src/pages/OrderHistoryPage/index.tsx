import styled from '@emotion/styled';

import Menubar from '@components/mypage/Menubar';
import OrderListItem from '@components/OrderHistory/OrderListItem';

const OrderHistoryPage = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Menubar />
        <OrderListItem />
      </InnerWrapper>
    </Wrapper>
  );
};

export default OrderHistoryPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  width: 60%;
`;
