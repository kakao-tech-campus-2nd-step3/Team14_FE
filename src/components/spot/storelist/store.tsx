import Button from '@components/common/Button';
import Logo from '@components/common/Logo';
import Modal from '@components/common/Modal';
import AlertDialog from '@components/common/Modal/AlertDialog';
import styled from '@emotion/styled';
import { Common } from '@styles/globalStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@routes/path';

interface Props {
  image: string;
  storeName: string;
  address: string;
  category: string;
}
const Store = ({ image, storeName, address, category }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <Wrapper>
      <Logo image={image} />
      <DescriptWrapper>
        <Category>[{category}]</Category>
        <Title>{storeName}</Title>
        주문마감 :<Address>픽업 | {address}</Address>
      </DescriptWrapper>
      <Button
        label="선택"
        bgColor={Common.colors.primary}
        radius="20px"
        onClick={() => setIsOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        title="로그인이 필요한 서비스입니다."
        content={
          <AlertDialog
            content="로그인 페이지로 이동하시겠습니까?"
            onRequestClose={() => setIsOpen(false)}
            onRequestConfirm={() => navigate(RouterPath.login)}
          />
        }
      />
    </Wrapper>
  );
};
export default Store;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
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
