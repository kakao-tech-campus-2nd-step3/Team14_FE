import styled from '@emotion/styled';
import { Common } from '@styles/globalStyle';

interface Props {
  content: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AlertDialog = ({ content, setIsOpen }: Props) => {
  return (
    <div>
      <Content>{content}</Content>
      <Wrapper>
        <Button cancle onClick={() => setIsOpen(false)}>
          취소
        </Button>
        <Button>확인</Button>
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

// TODO:버튼 컴포넌트 생성 전 임시로 사용
const Button = styled.div((props: { cancle?: boolean }) => ({
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
