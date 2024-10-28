import styled from '@emotion/styled';
import { useState } from 'react';

import Menubar from '@components/mypage/Menubar';
import ProfileEdit from '@components/mypage/ProfileEdit';
import Profile from '@components/mypage/Profile';

const MyPage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const editMode = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Menubar />
        <MyPageContainer>
          <MyPageContainerTop>
            <ProfileImage src="/image/profile.jpg" alt="프로필 이미지" />
            <PointsBalance>잔여 포인트: 100,000P</PointsBalance>
          </MyPageContainerTop>
          {isEdit ? (
            <ProfileEdit editMode={editMode} />
          ) : (
            <Profile editMode={editMode} />
          )}
        </MyPageContainer>
      </InnerWrapper>
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  width: 60%;
  margin-bottom: 20px;
`;
const MyPageContainer = styled.div`
  width: 100%;
`;

const MyPageContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 25%;
  border-radius: 50%;
`;

const PointsBalance = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
