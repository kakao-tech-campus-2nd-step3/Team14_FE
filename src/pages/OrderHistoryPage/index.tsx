import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import Menubar from '@components/mypage/Menubar';
import OrderListItem from '@components/OrderHistory/OrderListItem';

import { orderList } from '@components/OrderHistory/data';

interface Post {
  category: string;
  storeName: string;
  pickUpLocation: string;
  price: number;
}
interface OrderHistory {
  totalPages: number; //전체 페이지 수
  totalElements: number; //전체 데이터 수
  size: number; //페이지 당 보여줄 데이터 수
}

const OrderHistoryPage = () => {
  const VIEW_PAGE_COUNT = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const posts: Post[] = orderList.content;
  const orderHistory: OrderHistory = orderList;

  const startIdx = (currentPage - 1) * orderHistory.size;
  const endIdx = startIdx + orderHistory.size;
  const currentPosts = posts.slice(startIdx, endIdx);

  const pageNumbers = Array.from(
    { length: orderHistory.totalPages },
    (_, i) => i + 1,
  );

  const startPage =
    Math.floor((currentPage - 1) / VIEW_PAGE_COUNT) * VIEW_PAGE_COUNT + 1;
  const endPage = Math.min(
    startPage + VIEW_PAGE_COUNT - 1,
    orderHistory.totalPages,
  );
  const visiblePages = pageNumbers.slice(startPage - 1, endPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= orderHistory.totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Menubar />
        <OrderListContainer>
          {currentPosts.map((post) => (
            <OrderListItem
              category={post.category}
              storeName={post.storeName}
              pickUpLocation={post.pickUpLocation}
              price={post.price}
            />
          ))}
        </OrderListContainer>
      </InnerWrapper>
      <InnerWrapper>
        <PagenationUl>
          {startPage > 1 && (
            <PrevBtn onClick={() => handlePageChange(currentPage - 1)}>
              &lt; 이전
            </PrevBtn>
          )}
          {visiblePages.map((page) => (
            <PageNumber
              key={page}
              onClick={() => handlePageChange(page)}
              isActive={page === currentPage}
            >
              {page}
            </PageNumber>
          ))}
          {endPage < orderHistory.totalPages && (
            <NextBtn onClick={() => handlePageChange(currentPage + 1)}>
              다음 &gt;
            </NextBtn>
          )}
        </PagenationUl>
      </InnerWrapper>
    </Wrapper>
  );
};

export default OrderHistoryPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerWrapper = styled.div`
  width: 60%;
`;

const OrderListContainer = styled.div`
  width: 100%;
`;
const PagenationUl = styled.ul`
  width: 100%;
  list-style: none;
  margin: 40px 0;
  padding-inline-start: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #7e7e7e;
`;
const PrevBtn = styled.li`
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;
`;

const NextBtn = styled.li`
  cursor: pointer;
  margin-left: 10px;
  font-weight: bold;
`;

const PageNumber = styled.li<{ isActive: boolean }>`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#FFF' : '#7E7E7E')};
  background-color: ${(props) => (props.isActive ? '#059770' : null)};
  border-radius: 50%;
`;
