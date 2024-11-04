import styled from 'styled-components';
import { useState, useRef } from 'react';
import Button from '@components/common/Button';
import { Common } from '@styles/globalStyle';

import Modal from '@components/common/Modal';
import { OrderDetailCreator } from '@components/OrderHistoryDetail/data';
import OrderHistoryDetailItem from '@components/OrderHistoryDetail/OrderHistoryDetailItem';
import RecruitDialog from '@components/spot/RecruitDialog';
import { SearchSpotProvider } from '@provider/SearchSpot';
import { TbPointFilled } from 'react-icons/tb';

const OrderDetailCreater = () => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [uploadImgUrl, setUploadImgUrl] = useState<string>('');
  const [uploadFileName, setUploadFileName] = useState<string>('');

  const [recruitIsOpen, setRecruitIsOpen] = useState(false);
  const [completeModalIsOpen, setCompleteModalIsOpen] = useState(false);

  const [tipIsOpen, setTipIsOpen] = useState(false);

  const onchangeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const uploadFile = files?.[0];

    if (uploadFile) {
      setUploadFileName(uploadFile.name);
    }

    if (!uploadFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        setUploadImgUrl(result);
      }
    };
  };

  const handleUploadClick = () => {
    imageInput.current?.click();
  };

  return (
    <Wrapper>
      <ButtonContainer>
        <span>{uploadFileName}</span>
        <Space1 />
        <Button
          label="+ 결제 주문서 등록"
          radius="20px"
          bgColor={Common.colors.primary}
          onClick={handleUploadClick}
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={onchangeImageUpload}
          ref={imageInput}
        />
        <Space1 />
        <Button
          label="?"
          radius="50%"
          bgColor={Common.colors.button3}
          onClick={() => setTipIsOpen(true)}
        />
      </ButtonContainer>
      <Modal
        size="big"
        type="transparent"
        isOpen={recruitIsOpen}
        onRequestClose={() => setRecruitIsOpen(false)}
        title="모집"
        content={
          <SearchSpotProvider>
            <RecruitDialog
              onRequestClose={() => setRecruitIsOpen(false)}
              onRequestConfirm={() => setCompleteModalIsOpen(true)}
            />
          </SearchSpotProvider>
        }
      />
      <Modal
        size="big"
        title="알아보기"
        type="transparent"
        isOpen={tipIsOpen}
        onRequestClose={() => setTipIsOpen(false)}
        content={
          <ModalWrapper>
            <ExImage src="/image/example.png" />
            <DesWrapper>
              <Des>
                <TbPointFilled />
                해당 이미지가 잘 보이도록 화면을 캡쳐해주세요.
              </Des>
              <Des>
                <TbPointFilled />
                결제 주문서 등록 버튼을 클릭 후 이미지를 업로드 해주세요.
              </Des>
            </DesWrapper>
          </ModalWrapper>
        }
      />
      <ParticipantContainer>
        {OrderDetailCreator.memberInfo.map((data) => (
          <OrderHistoryDetailItem
            deliveryName={data.deliveryName}
            price={data.price}
            isPayed={data.isPayed}
          />
        ))}
      </ParticipantContainer>
      <Button
        label="수정하기"
        radius="20px"
        bgColor={Common.colors.primary}
        onClick={() => setRecruitIsOpen(true)}
      />
      <Space2 />
      <Button
        label="삭제하기"
        radius="20px"
        bgColor={Common.colors.primary05}
      />
    </Wrapper>
  );
};

export default OrderDetailCreater;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 10px;
`;

const Space1 = styled.div`
  width: 10px;
`;
const Space2 = styled.div`
  height: 10px;
`;

const ParticipantContainer = styled.div`
  width: 100%;
  margin: 20px 0 30px;
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 50px;
`;
const ExImage = styled.img`
  width: 300px;
`;

const DesWrapper = styled.div`
display: flex
flex-direction: column;`;

const Des = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
`;
