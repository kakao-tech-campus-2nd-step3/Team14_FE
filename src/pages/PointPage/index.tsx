import styled from '@emotion/styled';

import Menubar from '@components/mypage/Menubar';
import PointListItem from '@components/point/PointListItem';
import Button from '@components/common/Button/Button';

import { pointData } from '@components/point/data';

const PointPage = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Menubar />
        <PaymentBox>
          <Button label="충전하기" radius="20px" />
          <Space />
          <Button label="환전하기" radius="20px" />
        </PaymentBox>
        <FilterBox>
          <Button label="충전" radius="20px" />
          <Space />
          <Button label="결제" radius="20px" />
          <Space />
          <Button label="환전" radius="20px" />
        </FilterBox>
        <PointList>
          <PointListItem
            date={pointData.date}
            point={pointData.point}
            filter={pointData.filter}
          />
        </PointList>
      </InnerWrapper>
    </Wrapper>
  );
};

export default PointPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const FilterBox = styled.div`
  width: 80%;
  display: flex;
`;

const PointList = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin: 20px 0 20px;
`;

const Space = styled.div`
  width: 15px;
`;
