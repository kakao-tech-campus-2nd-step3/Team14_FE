import styled from '@emotion/styled';
import { Common } from '@styles/globalStyle';

interface ModalProps {
  style?: 'alert' | 'description';
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ style = 'alert', isOpen, setIsOpen }: ModalProps) => {
  return (
    <Wrapper>
      {isOpen && (
        <Overlay>
          <ModalBox>
            {style === 'alert' ? <Header>헤어딩</Header> : <></>}
            <Close onClick={() => setIsOpen(false)}>X</Close>
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
`;
const ModalBox = styled.div`
  width: 650px;
  height: 350px;
  background-color: white;
  border-radius: 30px;
`;
const Header = styled.div`
  height: 20%;
  border-radius: 30px 30px 0 0;
  background-color: ${Common.colors.primary};
`;
const Close = styled.button`
  color: ${Common.colors.primary};
`;
