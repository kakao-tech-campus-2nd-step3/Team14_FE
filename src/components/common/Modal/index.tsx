import styled from '@emotion/styled';
import { Common } from '@styles/globalStyle';
import { ReactNode } from 'react';

interface Props {
  size?: 'small' | 'big';
  isOpen: boolean;
  onRequestClose: () => void;
  title: string | ReactNode;
  type?: 'alert' | 'complete' | 'warning' | 'transparent';
  content: ReactNode;
}

const Modal = ({
  size = 'small',
  type = 'alert',
  isOpen,
  onRequestClose,
  title,
  content,
}: Props) => {
  return (
    <Wrapper>
      {isOpen && (
        <Overlay onClick={onRequestClose}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <Header size={size} type={type}>
              {title}
            </Header>
            <Contents>{content}</Contents>
          </ModalBox>
        </Overlay>
      )}
    </Wrapper>
  );
};
export default Modal;

const Wrapper = styled.div``;
const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${Common.zIndex.modal};
`;

const ModalBox = styled.div`
  background-color: white;
  border-radius: 30px;
`;

const Header = styled.div<{
  size: 'small' | 'big';
  type?: 'alert' | 'complete' | 'warning' | 'transparent';
}>((props) => ({
  height: props.size === 'small' ? '50px' : '80px',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '30px 30px 0 0',
  fontSize: props.size === 'small' ? '24px' : '36px',
  color: props.size === 'small' ? '#fff' : 'black',
  backgroundColor: (() => {
    if (props.type === 'alert') {
      return Common.colors.primary;
    } else if (props.type === 'complete') {
      return Common.colors.complete;
    } else if (props.type === 'warning') {
      return Common.colors.warning;
    }
    return 'transparent';
  })(),
}));

const Contents = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
