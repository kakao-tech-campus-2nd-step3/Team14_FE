import Button from '@components/common/Button';
import Logo from '@components/common/Logo';
import Modal from '@components/common/Modal';
import AlertDialog from '@components/common/Modal/AlertDialog';
import styled from '@emotion/styled';
import { Common } from '@styles/globalStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDynamicPath, RouterPath } from '@routes/path';

interface Props {
  spotId: string;
  category: string;
  storeName: string;
  deadlineTime: string;
  address: string;
}
const Store = ({
  spotId,
  storeName,
  address,
  deadlineTime,
  category,
}: Props) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [sendLinkIsOpen, setSendLinkIsOpen] = useState(false);
  //TODO: 로그인 여부 확인 만들어질 때까지 임시 사용
  const [login, setLogin] = useState(true);

  const navigate = useNavigate();

  const handleClick = () => {
    if (login) {
      //로그인이 되어있을 경우
      setSendLinkIsOpen(true);
    } else {
      //로그인이 안되어 있을 경우
      setIsLoginOpen(true);
    }
  };
  return (
    <Wrapper>
      <Logo image={`/image/categories/${category}.png`} />
      <DescriptWrapper>
        <Category>[{category}]</Category>
        <Title>{storeName}</Title>
        주문마감 : {deadlineTime}
        <Address>픽업 | {address}</Address>
      </DescriptWrapper>
      <Button
        label="선택"
        bgColor={Common.colors.primary}
        radius="20px"
        onClick={handleClick}
      />
      <Modal
        isOpen={isLoginOpen}
        onRequestClose={() => setIsLoginOpen(false)}
        title="로그인이 필요한 서비스입니다."
        content={
          <AlertDialog
            content="로그인 페이지로 이동하시겠습니까?"
            onRequestClose={() => setIsLoginOpen(false)}
            onRequestConfirm={() => navigate(RouterPath.login)}
          />
        }
      />
      <Modal
        isOpen={sendLinkIsOpen}
        onRequestClose={() => setSendLinkIsOpen(false)}
        title={<div>[{storeName}] 주문이 맞으신가요?</div>}
        content={
          <AlertDialog
            content={
              <div>
                가입하신 번호로 배민 함께주문 링크를
                <br /> 전송해드리겠습니다.
              </div>
            }
            onRequestClose={() => setSendLinkIsOpen(false)}
            onRequestConfirm={() =>
              navigate(getDynamicPath.orderDetail(Number(spotId)))
            }
          />
        }
      />
    </Wrapper>
  );
};
export default Store;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin: 20px 0;
  line-height: 1.3;
`;

const DescriptWrapper = styled.div`
  margin-right: 10px;
`;

const Category = styled.div`
  font-size: 20px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const Address = styled.div``;
