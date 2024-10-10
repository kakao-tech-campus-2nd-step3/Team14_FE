import styled from '@emotion/styled';
import { storeList } from '../swiper/data';
import Store from './store';
import { Common } from '@styles/globalStyle';

const StoreList = () => {
  return (
    <Wrapper>
      {storeList.map((store) => (
        <div key={store.key}>
          <Store
            image={store.image}
            category={store.category}
            storeName={store.storeName}
            address={store.pickUpLocation}
          />
          <Line />
        </div>
      ))}
    </Wrapper>
  );
};
export default StoreList;

const Wrapper = styled.div`
  height: 50%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Line = styled.hr`
  border: 1px dashed ${Common.colors.lightGray};
  width: 100%;
`;
