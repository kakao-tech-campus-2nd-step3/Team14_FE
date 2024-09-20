import styled from '@emotion/styled';
import { Common } from '@styles/globalStyle';
import { ReactNode } from 'react';

interface Props {
  size?: 'small' | 'big';
  isOpen: boolean;
  title: string;
  content: ReactNode;
}

const Modal = ({ size = 'small', isOpen, title, content }: Props) => {
  return (
    <Wrapper>
      {isOpen && (
        <Overlay>
          <ModalBox size={size}>
            <Header>
              {size === 'small' ? (
                <SmallHeaderBar>{title}</SmallHeaderBar>
              ) : (
                <BigHeaderBar>{title}</BigHeaderBar>
              )}
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
`;
const ModalBox = styled.div((props: { size: 'small' | 'big' }) => ({
  width: props.size === 'small' ? '650px' : '700px',
  height: props.size === 'small' ? '350px' : '800px',
  backgroundColor: 'white',
  borderRadius: '30px',
}));
const Header = styled.div`
  height: 20%;
  font-weight: bold;
`;
const SmallHeaderBar = styled.div`
  height: 100%;
  border-radius: 30px 30px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  background-color: ${Common.colors.primary};
`;
const BigHeaderBar = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
`;
const Contents = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
