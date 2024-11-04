import styled from '@emotion/styled';

import Menubar from '@components/mypage/Menubar';
import PointListItem from '@components/point/PointListItem';
import Button from '@components/common/Button';
import MyPoint from '@components/common/MyPoint';

import { pointDataSet } from '@components/point/data';
import { useState } from 'react';
import { Common } from '@styles/globalStyle';

const PointPage = () => {
  type PointFilter = '충전' | '결제' | '환전';
  const [pointFilterValue, setPointFilterValue] = useState<PointFilter>('충전');

  const changePointFilter = (filter: PointFilter) => {
    setPointFilterValue(filter);
  };

  const filteredPointData = pointDataSet.filter(
    (pointData) => pointData.filter === pointFilterValue,
  );

  return (
    <Wrapper>
      <InnerWrapper>
        <Menubar />
        <MyPoint />
        <PaymentBox>
          <Button
            label="충전하기"
            radius="20px"
            bgColor={Common.colors.primary}
            padding="9px 25px"
          />
          <Space />
          <Button
            label="환전하기"
            radius="20px"
            bgColor={Common.colors.primary05}
            padding="9px 25px"
          />
        </PaymentBox>
        <FilterBox>
          <Button
            label="충전"
            radius="20px"
            onClick={() => changePointFilter('충전')}
            bgColor={pointFilterValue === '충전' ? '#000' : '#FFF'}
            style={{
              color: pointFilterValue === '충전' ? '#FFF' : '#000',
              border: '1px solid #000',
            }}
          />
          <Space />
          <Button
            label="결제"
            radius="20px"
            onClick={() => changePointFilter('결제')}
            bgColor={pointFilterValue === '결제' ? '#000' : '#FFF'}
            style={{
              color: pointFilterValue === '결제' ? '#FFF' : '#000',
              border: '1px solid #000',
            }}
          />
          <Space />
          <Button
            label="환전"
            radius="20px"
            onClick={() => changePointFilter('환전')}
            bgColor={pointFilterValue === '환전' ? '#000' : '#FFF'}
            style={{
              color: pointFilterValue === '환전' ? '#FFF' : '#000',
              border: '1px solid #000',
            }}
          />
        </FilterBox>
        <PointList>
          {filteredPointData.map((pointData) => (
            <PointListItem
              date={pointData.date}
              point={pointData.point}
              filter={pointData.filter}
            />
          ))}
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
