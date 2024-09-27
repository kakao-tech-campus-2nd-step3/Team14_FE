import styled from '@emotion/styled';
import SlideItem from './SlideItem';
import { useState } from 'react';
import { Common } from '@styles/globalStyle';

const storeList = [
  {
    key: 1,
    category: '토스트',
    title: '이삭토스트',
    address: '경기 용인시 수지구 용구대로 2770',
  },
  {
    key: 2,
    category: '족발/보쌈',
    title: '장충동 왕족발',
    address: '경기 용인시 수지구 용구대로 2770',
  },
  {
    key: 3,
    category: '햄버거',
    title: '버거킹',
    address: '경기 용인시 수지구 용구대로 2770',
  },
  {
    key: 4,
    category: '햄버거',
    title: '맥도날드',
    address: '경기 용인시 수지구 용구대로 2770',
  },
];

const Swiper = () => {
  const [slideNumber, setItemNumber] = useState<number>(1);

  const clickLeftArrow = () => {
    if (slideNumber === 1) {
      setItemNumber(storeList.length);
    } else {
      setItemNumber(slideNumber - 1);
    }
  };

  const clickRightArrow = () => {
    if (slideNumber === storeList.length) {
      setItemNumber(1);
    } else {
      setItemNumber(slideNumber + 1);
    }
  };
  return (
    <SwiperWrapper>
      <LeftArrow onClick={() => clickLeftArrow()}>&lt;</LeftArrow>
      <Slide slideNumber={slideNumber}>
        {storeList.map((store) => (
          <SlideItem
            key={store.key}
            category={store.category}
            title={store.title}
            address={store.address}
          />
        ))}
      </Slide>
      <RightArrow onClick={() => clickRightArrow()}>&gt;</RightArrow>
    </SwiperWrapper>
  );
};
export default Swiper;
const SwiperWrapper = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  border: 3px solid black;
  overflow: hidden;
  position: relative;
`;

const Slide = styled.div(({ slideNumber }: { slideNumber: number }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  transform: `translateX(calc(${slideNumber - 1}*-530px))`,
}));

const LeftArrow = styled.div`
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  left: 0;
  z-index: ${Common.zIndex.common};
`;

const RightArrow = styled.div`
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  right: 0;
`;
