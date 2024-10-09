import styled from '@emotion/styled';

import { IoClose } from 'react-icons/io5';

interface Props {
  date: string;
  point: number;
  filter: string;
}

const PointListItem = ({ date, point, filter }: Props) => {
  const newDate: string[] = date.split('T')[0].split('-');
  const newTime: string[] = date.split('T')[1].split(':');
  const newPoint: string = point.toLocaleString('ko-KR');

  return (
    <Container>
      <DateTitle>{newDate[1] + '.' + newDate[2]}</DateTitle>
      <DetailContainer>
        <Point>{newPoint}P</Point>
        <PointInfo>
          <Time>
            {newTime[0] + ':' + newTime[1]} {filter}
          </Time>
        </PointInfo>
      </DetailContainer>
      <CloseDiv>
        <IoClose size="30px" color="#6A6863" />
      </CloseDiv>
    </Container>
  );
};

export default PointListItem;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
`;

const DateTitle = styled.p`
  font-size: 13px;
  color: #909090;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`;

const Point = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const PointInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Time = styled.span`
  font-size: 13px;
  color: #909090;
`;

const CloseDiv = styled.div`
  position: absolute;
  right: 20px;
`;
