import styled from '@emotion/styled';
import { Common } from '@styles/globalStyle';
import Button from '../Button';
import { ReactNode } from 'react';

interface Props {
  type?: 'alert' | 'complete' | 'warning';
  content: string | ReactNode;
  onRequestClose: () => void;
  onRequestConfirm: () => void;
}
const AlertDialog = ({
  type = 'alert',
  content,
  onRequestClose,
  onRequestConfirm,
}: Props) => {
  const btnBgColor = () => {
    let btnBgColors = {
      cancelBtn: Common.colors.primary05,
      confirmBtn: Common.colors.primary,
    };

    if (type === 'complete') {
      btnBgColors.cancelBtn = Common.colors.complete05;
      btnBgColors.confirmBtn = Common.colors.complete;
    } else if (type === 'warning') {
      btnBgColors.cancelBtn = Common.colors.warning05;
      btnBgColors.confirmBtn = Common.colors.warning;
    }

    return btnBgColors;
  };
  return (
    <div>
      <Content>{content}</Content>
      <Wrapper>
        <Button
          label="취소"
          onClick={onRequestClose}
          bgColor={btnBgColor().cancelBtn}
          padding="10px 30px"
          radius="20px"
        />
        <Button
          label="확인"
          onClick={onRequestConfirm}
          bgColor={btnBgColor().confirmBtn}
          padding="10px 30px"
          radius="20px"
        />
      </Wrapper>
    </div>
  );
};

const Content = styled.div`
  font-size: 24px;
  margin: 80px 80px 100px;
  text-align: center;
  line-height: 1.5;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
  display: flex;
  gap: 10px;
  justify-content: end;
`;

export default AlertDialog;
