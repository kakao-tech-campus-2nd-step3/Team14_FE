import React from 'react';
import styled from '@emotion/styled';

export const HEADER_HEIGHT = '64px';

const Wrapper = styled.header`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: #059770;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: -80px;
`;

const Logo = styled.img`
  height: 45px;
  margin-right: 10px;
`;

const Location = styled.span`
  font-size: 25px;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 16px;
  margin-left: 25px;
  cursor: pointer;
  padding: 15px;
`;

interface DropdownMenuProps {
  isOpen: boolean;
}

interface DropdownItemProps {
  transparent?: boolean;
}

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  top: 100%;
  left: 25px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;
  display: ${(props) => {
    return props.isOpen ? 'block' : 'none';
  }};
  z-index: 9999;
  min-width: 160px;
`;

const DropdownItem = styled.div<DropdownItemProps>`
  padding: 8px 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: ${(props) => {
    return props.transparent ? 'rgba(0, 0, 0, 0.4)' : '#000000';
  }};
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const LoginButton = styled.button`
  background-color: #ffd500;
  color: white;
  padding: 9px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #e6c200;
  }
`;

export const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Wrapper>
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <LogoWrapper href="/">
            <Logo src="/image/logo.png" alt="로고" />
            <Location>여기먹때</Location>
          </LogoWrapper>

          <DropdownContainer>
            <Dropdown onClick={toggleDropdown}>
              용봉동 {isDropdownOpen ? '▲' : '▼'}
            </Dropdown>
            <DropdownMenu isOpen={isDropdownOpen}>
              <DropdownItem>용봉동</DropdownItem>
              <DropdownItem transparent>내 동네 설정</DropdownItem>
            </DropdownMenu>
          </DropdownContainer>
        </div>

        <LoginButton>로그인</LoginButton>
      </Container>
    </Wrapper>
  );
};
