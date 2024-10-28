import styled from 'styled-components';

import { Common } from '@styles/globalStyle';
import Button from '@components/common/Button';
import InputField from '@components/common/InputField';

interface Props {
  editMode: () => void;
}

const ProfileEdit = ({ editMode }: Props) => {
  return (
    <div>
      <MyPageContainerMiddle>
        <MyPageInfoDescription>
          <LeftContent>닉네임 변경</LeftContent>
          <br />
          <LeftContent>전화번호 변경</LeftContent>
        </MyPageInfoDescription>
        <MyPageInfo>
          <InputField width="65%" bgColor="#EDEDED" />
          <Space />
          <InputField width="65%" bgColor="#EDEDED" />
        </MyPageInfo>
      </MyPageContainerMiddle>
      <MyPageContainerBottom>
        <Button
          label="저장하기"
          bgColor={Common.colors.primary}
          onClick={editMode}
          radius="20px"
        />
      </MyPageContainerBottom>
    </div>
  );
};

export default ProfileEdit;
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

const Space = styled.div`
  height: 45px;
`;

const LeftContent = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: end;
`;

const MyPageContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
