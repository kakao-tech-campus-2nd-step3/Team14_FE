import styled from '@emotion/styled';

import { IoClose } from 'react-icons/io5';

const PointListItem = () => {
  return (
    <Container>
      <DateTitle>08.13</DateTitle>
      <DetailContainer>
        <Point>20,000P</Point>
        <Time>19:25</Time>
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
  width: 80%;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  border-top: 1px solid #ccc;
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
const Time = styled.span`
  font-size: 13px;
  color: #909090;
`;

const CloseDiv = styled.div`
  position: absolute;
  right: 20px;
`;
