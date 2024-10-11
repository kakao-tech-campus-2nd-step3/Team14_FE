import styled from '@emotion/styled';
import { storeList } from '../swiper/data';
import Store from './store';
import { Common } from '@styles/globalStyle';
import SelectCategory from './selectCategory';
import { useState } from 'react';

const StoreList = () => {
  const [category, setCategory] = useState('카테고리 선택');

  const filterList =
    category === '카테고리 선택'
      ? storeList
      : storeList.filter((store) => category === store.category);

  return (
    <Wrapper>
      <SelectCategory setCategory={setCategory} />
      {filterList.length > 0 ? (
        filterList.map((store) => (
          <div key={store.key}>
            <Store
              image={store.image}
              category={store.category}
              storeName={store.storeName}
              address={store.pickUpLocation}
            />
            <Line />
          </div>
        ))
      ) : (
        <Description>해당 카테고리의 배달 목록이 없습니다.</Description>
      )}
    </Wrapper>
  );
};
export default StoreList;

const Wrapper = styled.div`
  height: 50%;
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Line = styled.hr`
  border: 1px dashed ${Common.colors.lightGray};
  width: 100%;
`;

const Description = styled.div`
  margin: 30px;
  text-align: center;
`;
