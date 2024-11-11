import styled from '@emotion/styled';
import { Common } from '@styles/globalStyle';
import { useContext, useState } from 'react';
import { ClickedLocationContext } from '@provider/ClickedLocation';
import { useGetSpotInfo } from '@api/hooks/useGetSpotInfo';
import { LocationContext } from '@provider/PresentLocation';
import { storeList } from '../swiper/data';
import Store from './store';
import SelectCategory from './selectCategory';

const StoreList = () => {
  const SELECT_CATEOGRY = '카테고리 선택';
  const [category, setCategory] = useState(SELECT_CATEOGRY);
  const { clickedLocation, setClickedLocation } = useContext(
    ClickedLocationContext,
  );
  const { location } = useContext(LocationContext);

  const filterList = () => {
    if (clickedLocation) {
      return storeList.filter(
        (store) =>
          store.lat === clickedLocation.lat &&
          store.lng === clickedLocation.lng,
      );
    }
    if (category === SELECT_CATEOGRY) {
      return storeList;
    }
    return storeList.filter((store) => category === store.category);
  };

  // const { data } = useGetSpotInfo({ lat: location.lat, lng: location.lng });

  return (
    <Wrapper>
      <SelectCategory
        setCategory={setCategory}
        setClickedLocation={setClickedLocation}
      />
      {filterList().length > 0 ? (
        filterList().map((store) => (
          <div key={store.id}>
            <Store
              spotId={store.id}
              category={store.category}
              storeName={store.storeName}
              deadlineTime={store.deadlineTime}
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
  box-sizing: border-box;
  padding: 0 20px;
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
