import styled from '@emotion/styled';
import { useState } from 'react';

import { Common } from '@styles/globalStyle';

import Menubar from '@components/mypage/Menubar';
import Button from '@components/common/Button/Button';
import InputField from '@components/common/Input/InputField';

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
          <MyPageContainerMiddle>
            <MyPageInfoDescription>
              {isEdit ? (
                <LeftContent>닉네임 변경</LeftContent>
              ) : (
                <LeftContent>닉네임</LeftContent>
              )}
              <br />
              {isEdit ? (
                <LeftContent>전화번호 변경</LeftContent>
              ) : (
                <LeftContent>전화번호</LeftContent>
              )}
            </MyPageInfoDescription>
            <MyPageInfo>
              {isEdit ? (
                <InputField width="65%" bgColor="#EDEDED" />
              ) : (
                <RightContent>우먹마</RightContent>
              )}
              <br />
              {isEdit ? (
                <InputField width="65%" bgColor="#EDEDED" />
              ) : (
                <RightContent>010-0000-0000</RightContent>
              )}
            </MyPageInfo>
          </MyPageContainerMiddle>
          <MyPageContainerBottom>
            {isEdit ? (
              <Button
                label="저장하기"
                bgColor={Common.colors.primary}
                onClick={editMode}
                radius="20px"
              />
            ) : (
              <>
                <Button
                  label="수정하기"
                  bgColor={Common.colors.button2}
                  onClick={editMode}
                  radius="20px"
                />
                <Button
                  label="탈퇴하기"
                  bgColor={Common.colors.button3}
                  radius="20px"
                />
              </>
            )}
          </MyPageContainerBottom>
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

const MyPageContainerMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const MyPageInfoDescription = styled.div`
  width: 35%;
`;
const MyPageInfo = styled.div`
  width: 65%;
  margin-left: 30px;
`;

const LeftContent = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: end;
`;

const RightContent = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const MyPageContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
