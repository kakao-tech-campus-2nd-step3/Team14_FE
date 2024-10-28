import styled from 'styled-components';

import { Common } from '@styles/globalStyle';
import Button from '@components/common/Button';

interface Props {
  editMode: () => void;
}

const Profile = ({ editMode }: Props) => {
  return (
    <div>
      <MyPageContainerMiddle>
        <MyPageInfoDescription>
          <LeftContent>닉네임</LeftContent>
          <br />
          <LeftContent>전화번호</LeftContent>
        </MyPageInfoDescription>
        <MyPageInfo>
          <RightContent>우먹마</RightContent>
          <br />
          <RightContent>010-0000-0000</RightContent>
        </MyPageInfo>
      </MyPageContainerMiddle>
      <MyPageContainerBottom>
        <Button
          label="수정하기"
          bgColor={Common.colors.button2}
          onClick={editMode}
          radius="20px"
        />
        <Space />
        <Button
          label="탈퇴하기"
          bgColor={Common.colors.button3}
          radius="20px"
        />
      </MyPageContainerBottom>
    </div>
  );
};
export default Profile;

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

const Space = styled.div`
  height: 10px;
`;
