import styled from '@emotion/styled';
import SlideItem from './SlideItem';
import { useEffect, useState } from 'react';
import { Common } from '@styles/globalStyle';
import { storeList } from './data';

const Swiper = () => {
  const [carouselList, setCarouselList] = useState(storeList);
  const [slideNumber, setSlideNumber] = useState<number>(1);
  const [isEndSlide, setIsEndSlide] = useState(false);

  useEffect(() => {
    const startData = storeList[0];
    const endData = storeList[storeList.length - 1];
    const newList = [endData, ...storeList, startData];
    setCarouselList(newList);
  }, [storeList]);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setSlideNumber(index);
      setIsEndSlide(true);
    }, 500);
  };

  const clickRightArrow = () => {
    if (slideNumber === carouselList.length - 2) {
      setSlideNumber(slideNumber + 1);
      moveToNthSlide(1);
    } else {
      if (isEndSlide) setIsEndSlide(false);
      setSlideNumber(slideNumber + 1);
    }
  };

  const clickLeftArrow = () => {
    if (slideNumber === 1) {
      setSlideNumber(slideNumber - 1);
      moveToNthSlide(carouselList.length - 2);
    } else {
      if (isEndSlide) setIsEndSlide(false);
      setSlideNumber(slideNumber - 1);
    }
  };

  return (
    <SwiperWrapper>
      <LeftArrow onClick={() => clickLeftArrow()}>&lt;</LeftArrow>
      <Slide slideNumber={slideNumber} endSlide={isEndSlide}>
        {carouselList.map((store, index) => {
          let isCenter = false;
          if (index === slideNumber) isCenter = true;
          return (
            <SlideItem
              key={store.key}
              category={store.category}
              title={store.storeName}
              address={store.pickUpLocation}
              center={isCenter}
              endSlide={isEndSlide}
            />
          );
        })}
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
  overflow: hidden;
  position: relative;
  padding: 30px;
`;

const Slide = styled.div(
  ({ slideNumber, endSlide }: { slideNumber: number; endSlide: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    transform:
      slideNumber === 1
        ? `translateX(calc(${slideNumber}*-420px))`
        : `translateX(calc(-420px + ${slideNumber - 1}*-480px))`,
    transition: endSlide ? '' : 'all 0.5s ease-in-out',
  }),
);

const LeftArrow = styled.div`
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  left: 30px;
  top: 40%;
  z-index: ${Common.zIndex.common};
`;

const RightArrow = styled.div`
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 40%;
`;
