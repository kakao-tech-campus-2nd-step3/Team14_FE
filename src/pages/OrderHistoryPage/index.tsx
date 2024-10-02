import styled from '@emotion/styled';
import { useState } from 'react';

import Menubar from '@components/mypage/Menubar';
import OrderListItem from '@components/OrderHistory/OrderListItem';

import { orderList } from '@components/OrderHistory/data';
// import { storeList } from '@components/spot/swiper/data';

interface Post {
  category: string;
  storeName: string;
  pickUpLocation: string;
  price: number;
}

const OrderHistoryPage = () => {
  const posts: Post[] = orderList.content;

  return (
    <Wrapper>
      <InnerWrapper>
        <Menubar />
        <OrderListContainer>
          {posts.map((post) => (
            <OrderListItem
              category={post.category}
              storeName={post.storeName}
              pickUpLocation={post.pickUpLocation}
              price={post.price}
            />
          ))}
        </OrderListContainer>
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

const OrderListContainer = styled.div`
  width: 100%;
`;
