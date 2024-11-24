import styled from 'styled-components';

import { Common } from '@styles/globalStyle';
import Button from '@components/common/Button';
import Cookies from 'js-cookie';
import { fetchAuthInstance } from '@api/instance';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@routes/path';
import { useContext } from 'react';
import { AuthContext } from '@provider/AuthProvider';

interface Props {
  name: string;
  phoneNumber: string;
  editMode: () => void;
}

const Profile = ({ editMode, name, phoneNumber }: Props) => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const deleteUser = () => {
    const token = Cookies.get('access_token');
    fetchAuthInstance
      .delete('/members', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200 && response.data) {
          Cookies.remove('access_token');
          sessionStorage.removeItem('codeProcessed');
          setIsLoggedIn(false);
          navigate(RouterPath.introduce);
        }
      });
  };
  return (
    <div>
      <MyPageContainerMiddle>
        <MyPageInfoDescription>
          <LeftContent>닉네임</LeftContent>
          <br />
          <LeftContent>전화번호</LeftContent>
        </MyPageInfoDescription>
        <MyPageInfo>
          <RightContent>{name}</RightContent>
          <br />
          <RightContent>
            {phoneNumber
              .replace(/-/g, '')
              .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
          </RightContent>
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
          onClick={deleteUser}
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
