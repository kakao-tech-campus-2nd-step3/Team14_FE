import styled from '@emotion/styled';
import SlideItem from './SlideItem';
import { useEffect, useState } from 'react';
import { Common } from '@styles/globalStyle';
import { storeList } from './data';

import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

const Swiper = () => {
  const getDeadlineImminentList = () => {
    const calculateDiff = (deadlineHour: number, deadlineMinute: number) => {
      const date = new Date();
      const nowHour = date.getHours();
      const nowMinute = date.getMinutes();

      const nowTotalMinute = nowHour * 60 + nowMinute;
      const deadlineTotalMinute = deadlineHour * 60 + deadlineMinute;

      return deadlineTotalMinute - nowTotalMinute;
    };

    return storeList.filter((store) => {
      const hour = Number(store.deadlineTime.split(':')[0]);
      const minute = Number(store.deadlineTime.split(':')[1]);

      const timeDiff = calculateDiff(hour, minute);
      if (timeDiff <= 30 && timeDiff >= 0) return store;
    });
  };

  const [carouselList, setCarouselList] = useState(getDeadlineImminentList());
  const [slideNumber, setSlideNumber] = useState<number>(1);
  const [isEndSlide, setIsEndSlide] = useState(true);

  useEffect(() => {
    if (carouselList.length === 0) return;
    const startData = { ...carouselList[0] };
    const endData = { ...carouselList[carouselList.length - 1] };

    startData.id = startData.id + '_fake';
    endData.id = endData.id + '_fake';

    const newList = [endData, ...carouselList, startData];
    setCarouselList(newList);
  }, []);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setSlideNumber(index);
      setIsEndSlide(true);
    }, 500);
  };

  const clickRightArrow = () => {
    if (slideNumber === carouselList.length - 2) {
      if (isEndSlide) setIsEndSlide(false);
      setSlideNumber(slideNumber + 1);
      moveToNthSlide(1);
    } else {
      if (isEndSlide) setIsEndSlide(false);
      setSlideNumber(slideNumber + 1);
    }
  };

  const clickLeftArrow = () => {
    if (slideNumber === 1) {
      if (isEndSlide) setIsEndSlide(false);
      setSlideNumber(slideNumber - 1);
      moveToNthSlide(carouselList.length - 2);
    } else {
      if (isEndSlide) setIsEndSlide(false);
      setSlideNumber(slideNumber - 1);
    }
  };

  return (
    <Wrapper>
      {carouselList.length > 0 ? (
        <SwiperWrapper>
          <LeftArrow onClick={() => clickLeftArrow()}>
            <BsChevronLeft size="40" />
          </LeftArrow>
          <Slide slideNumber={slideNumber} endSlide={isEndSlide}>
            {carouselList.map((store, index) => {
              return (
                <SlideItem
                  key={store.id}
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
      ) : (
        <Description>주문 마감 30분 전 스팟이 존재하지 않습니다.</Description>
      )}
    </Wrapper>
  );
};
export default Swiper;

const Wrapper = styled.div`
  width: 100%;
`;
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
      slideNumber === 0
        ? `translateX(calc(10%))`
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

const Description = styled.div`
  width: 90%;
  height: 200px;
  margin: 30px auto;
  background-color: white;
  border-radius: 20px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
