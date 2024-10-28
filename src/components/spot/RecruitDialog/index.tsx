import Button from '@components/common/Button';
import InputField from '@components/common/InputField';
import { Common } from '@styles/globalStyle';
import styled from 'styled-components';
import SelectCategory from '../storelist/selectCategory';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { BsGeoAltFill } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react';
import Modal from '@components/common/Modal';
import SearchBar from './PickupModal.tsx/SearchBar';
import SearchMap from './PickupModal.tsx/SearchMap';
import { SearchSpotContext } from '@provider/SearchSpot';

interface Props {
  onRequestClose: () => void;
  onRequestConfirm: () => void;
}

interface FormValues {
  category: string;
  storename: string;
  price: number;
  endHour: number;
  endMinute: number;
  orderLink: string;
  address: string;
}

const RecruitDialog = ({ onRequestClose, onRequestConfirm }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { address } = useContext(SearchSpotContext);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const createRecruit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // 정상적으로 폼 전송이 완료 됐다면 폼꺼지고, 완료 폼 켜짐
    onRequestClose();
    onRequestConfirm();
  };

  const preventKeydown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (address) {
      setValue('address', address.address);
    }
  }, [address]);

  return (
    <Form onSubmit={handleSubmit(createRecruit)} onKeyDown={preventKeydown}>
      <Controller
        name="category"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <SelectCategory setCategory={field.onChange} />}
      />
      <Label>가게 이름</Label>
      <InputField
        placeholder="가게 이름을 입력해주세요."
        {...register('storename', { required: true })}
      />

      <Label>최소 주문 금액</Label>
      <InputField
        placeholder="주문에 필요한 최소한의 가격을 입력해주세요."
        {...register('price', { required: true })}
      />

      <Label>주문 마감 시간</Label>
      <TimeWrpper>
        <InputField
          type="number"
          {...register('endHour', { required: true })}
        />
        시{' '}
        <InputField
          type="number"
          {...register('endMinute', { required: true })}
        />
        분
      </TimeWrpper>

      <Label>함께 주문 링크</Label>
      <InputField
        placeholder="배민 함께 주문 링크를 입력해주세요."
        {...register('orderLink', { required: true })}
      />

      <Label>픽업 장소</Label>
      <LocationWrapper>
        <InputField
          placeholder="픽업 장소를 선택해주세요."
          // value={address?.address}
          disabled
          {...register('address', { required: true })}
        />
        <LocationPinIcon onClick={() => setIsOpen(true)}>
          <BsGeoAltFill size={20} />
        </LocationPinIcon>

        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          title={<SearchBar onRequestClose={() => setIsOpen(false)} />}
          content={<SearchMap onRequestClose={() => setIsOpen(false)} />}
        />
      </LocationWrapper>

      {Object.keys(errors).length > 0 && (
        <ErrorMsg>모든 항목을 채워주세요.</ErrorMsg>
      )}

      <BtnWrapper>
        <Button
          label="취소"
          bgColor={Common.colors.primary05}
          padding="9px 25px"
          radius="20px"
          onClick={onRequestClose}
        />
        <Button
          label="완료"
          bgColor={Common.colors.primary}
          padding="9px 25px"
          radius="20px"
        />
      </BtnWrapper>
    </Form>
  );
};
export default RecruitDialog;

const Form = styled.form`
  margin: 50px 50px 120px;
`;

const Label = styled.div`
  font-size: 20px;
  margin: 15px 0;
`;

const TimeWrpper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LocationWrapper = styled.div`
  position: relative;
`;

const LocationPinIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${Common.colors.primary};
  cursor: pointer;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  right: 50px;
  bottom: 40px;
`;

const ErrorMsg = styled.div`
  text-align: center;
  margin-top: 10px;
  color: ${Common.colors.warning};
`;
