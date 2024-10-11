import styled from '@emotion/styled';
import SlideItem from './SlideItem';
import { useEffect, useState } from 'react';
import { Common } from '@styles/globalStyle';
import { storeList } from './data';

import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

const Swiper = () => {
  const [carouselList, setCarouselList] = useState(storeList);
  const [slideNumber, setSlideNumber] = useState<number>(1);
  const [isEndSlide, setIsEndSlide] = useState(false);

  useEffect(() => {
    const startData = { ...storeList[0] };
    const endData = { ...storeList[storeList.length - 1] };

    startData.key = startData.key + '_fake';
    endData.key = endData.key + '_fake';

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
      <LeftArrow onClick={() => clickLeftArrow()}>
        <BsChevronLeft size="40" />
      </LeftArrow>
      <Slide slideNumber={slideNumber} endSlide={isEndSlide}>
        {carouselList.map((store, index) => {
          return (
            <SlideItem
              key={store.key}
              category={store.category}
              title={store.storeName}
              address={store.pickUpLocation}
              center={index === slideNumber}
              endSlide={isEndSlide}
            />
          );
        })}
      </Slide>
      <RightArrow onClick={() => clickRightArrow()}>
        <BsChevronRight size="40" />
      </RightArrow>
    </SwiperWrapper>
  );
};
export default Swiper;
const SwiperWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 30px 0;
`;

const Slide = styled.div(
  ({ slideNumber, endSlide }: { slideNumber: number; endSlide: boolean }) => ({
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    transform:
      slideNumber === 1
        ? `translateX(calc(-80%))`
        : `translateX(calc(-80% + -${slideNumber - 1}*90%))`,
    transition: endSlide ? '' : 'all 0.5s ease-in-out',
  }),
);

const LeftArrow = styled.div`
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  left: 30px;
  top: 35%;
  z-index: ${Common.zIndex.common};
`;

const RightArrow = styled.div`
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 35%;
  z-index: ${Common.zIndex.common};
`;
