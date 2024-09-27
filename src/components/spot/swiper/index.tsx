import styled from '@emotion/styled';
import SlideItem from './SlideItem';
import { useEffect, useState } from 'react';
import { Common } from '@styles/globalStyle';
import { storeList } from './data';

const Swiper = () => {
  const [carouselList, setCarouselList] = useState(storeList);
  const [slideNumber, setItemNumber] = useState<number>(1);
  const [isEndSlide, setIsEndSlide] = useState(false);

  //자동으로 3초에 한번 슬라이드 넘어가는 코드
  // setInterval(() => {
  //   if (slideNumber === storeList.length) {
  //     setItemNumber(1);
  //   } else {
  //     setItemNumber(slideNumber + 1);
  //   }
  // }, 3000);

  useEffect(() => {
    const startData = storeList[0];
    const endData = storeList[storeList.length - 1];
    const newList = [endData, ...storeList, startData];
    setCarouselList(newList);
  }, [storeList]);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setItemNumber(index);
      setIsEndSlide(true);
    }, 500);
  };

  const clickRightArrow = () => {
    if (slideNumber === carouselList.length - 2) {
      setItemNumber(slideNumber + 1);
      moveToNthSlide(1);
    } else {
      if (isEndSlide) setIsEndSlide(false);
      setItemNumber(slideNumber + 1);
    }
  };

  const clickLeftArrow = () => {
    if (slideNumber === 1) {
      setItemNumber(slideNumber - 1);
      moveToNthSlide(carouselList.length - 2);
    } else {
      if (isEndSlide) setIsEndSlide(false);
      setItemNumber(slideNumber - 1);
    }
  };

  return (
    <SwiperWrapper>
      <LeftArrow onClick={() => clickLeftArrow()}>&lt;</LeftArrow>
      <Slide slideNumber={slideNumber} endSlide={isEndSlide}>
        {carouselList.map((store) => (
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
  width: 530px;
  display: flex;
  align-items: center;
  border: 3px solid black;
  overflow: hidden;
  position: relative;
`;

const Slide = styled.div(
  ({ slideNumber, endSlide }: { slideNumber: number; endSlide: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    // gap: '10px',
    transform: `translateX(calc(${slideNumber}*-530px))`,
    transition: endSlide ? '' : 'all 0.5s ease-in-out',
  }),
);

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
