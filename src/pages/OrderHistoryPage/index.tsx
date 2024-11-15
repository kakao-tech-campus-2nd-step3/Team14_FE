import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Menubar from '@components/mypage/Menubar';
import OrderListItem from '@components/OrderHistory/OrderListItem';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { getDynamicPath } from '@routes/path';
// import { fetchAuthInstance } from '@api/instance';
// import OrderDetailMember from '@components/OrderHistoryDetail/OrderDetailMember';
import { useGetOrderList } from '@api/hooks/useGetOrderList';

interface Post {
  id: number;
  spotId: number;
  category: string;
  storeName: string;
  minimumOrderAmount: number;
  pickUpLocation: string;
  deliveryStatus: string;
  orderDate: number[];
  price?: number;
  isCreator: boolean;
}

interface OrderHistoryData {
  totalPages: number;
  totalElements: number;
  ordersInfo: Post[];
}

const OrderHistoryPage = () => {
  const VIEW_PAGE_COUNT = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const { refetch, data } = useGetOrderList(currentPage);

  const pageNumbers = Array.from(
    { length: data?.totalPages || 0 },
    (_, i) => i + 1,
  );

  const startPage =
    Math.floor((currentPage - 1) / VIEW_PAGE_COUNT) * VIEW_PAGE_COUNT + 1;
  const endPage = Math.min(
    startPage + VIEW_PAGE_COUNT - 1,
    data?.totalPages || 0,
  );
  const visiblePages = pageNumbers.slice(startPage - 1, endPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= (data?.totalPages || 0)) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    refetch();
  }, [currentPage]);

  return (
    <Wrapper>
      <InnerWrapper>
        <Menubar />
        <OrderListContainer>
          {data?.ordersInfo.length === 0 ? (
            <div style={{ width: '100%' }}>주문내역이 없습니다.</div>
          ) : (
            data?.ordersInfo.map((post) => (
              <Link
                key={post.id}
                to={getDynamicPath.orderDetail(post.spotId)}
                state={{ createrModeData: post.isCreator }}
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <OrderListItem
                  category={post.category}
                  storeName={post.storeName}
                  pickUpLocation={post.pickUpLocation}
                  price={post.price}
                  deliveryStatus={post.deliveryStatus}
                  date={post.orderDate}
                />
              </Link>
            ))
          )}
        </OrderListContainer>
      </InnerWrapper>
      <InnerWrapper>
        <PagenationUl>
          {startPage > 1 && (
            <PrevBtn onClick={() => handlePageChange(currentPage - 1)}>
              <HiChevronLeft />
              이전
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
          {endPage < (data?.totalPages || 0) && (
            <NextBtn onClick={() => handlePageChange(currentPage + 1)}>
              다음 <HiChevronRight />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OrderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;
`;

const NextBtn = styled.li`
  display: flex;
  align-items: center;
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
