import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

export const Menubar = () => {
  const location = useLocation();
  const pagePath = location.pathname;

  return (
    <Wrapper>
      <LinkStyle to="/mypage" isActive={pagePath == '/mypage'}>
        프로필
      </LinkStyle>
      <LinkStyle
        to="/mypage/orderhistory"
        isActive={pagePath == '/mypage/orderhistory'}
      >
        주문내역
      </LinkStyle>
      <LinkStyle to="/mypage/point" isActive={pagePath == '/mypage/point'}>
        포인트 충전/환전
      </LinkStyle>
    </Wrapper>
  );
};

export default Menubar;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px 15% 50px;
`;

const LinkStyle = styled(Link)<{ isActive: boolean }>`
  font-size: 20px;
  text-decoration: none;
  color: ${(props) => (props.isActive ? '#000' : '#cccbc9')};
  font-weight: bold;
`;
