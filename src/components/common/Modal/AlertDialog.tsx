import styled from '@emotion/styled';
import { Common } from '@styles/globalStyle';
import Button from '../Button/Button';

interface Props {
  content: string;
  onRequestClose: () => void;
}
const AlertDialog = ({ content, onRequestClose }: Props) => {
  return (
    <div>
      <Content>{content}</Content>
      <Wrapper>
        <Button
          label="취소"
          onClick={onRequestClose}
          bgColor={Common.colors.primary05}
        />
        <Button label="확인" bgColor={Common.colors.primary} />
      </Wrapper>
    </div>
  );
};

const Content = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  gap: 10px;
  justify-content: end;
`;

// TODO:Button컴포넌트 style 물어본 뒤에 지울 코드
const Button1 = styled.div((props: { cancle?: boolean }) => ({
  borderRadius: '20px',
  backgroundColor: props.cancle
    ? `${Common.colors.primary05}`
    : `${Common.colors.primary}`,
  fontWeight: 'bold',
  color: 'white',
  width: '100px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    cursor: 'pointer',
  },
}));

export default AlertDialog;
