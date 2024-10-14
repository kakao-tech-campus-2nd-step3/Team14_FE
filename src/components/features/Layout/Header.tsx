import React, { useContext, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { LocationContext } from '@provider/Location';
import Button from '@components/common/Button';
import { Common } from '@styles/globalStyle';
import { useNavigate } from 'react-router-dom';

export const HEADER_HEIGHT = '64px';

interface DropdownMenuProps {
  isOpen: boolean;
}

interface DropdownItemProps {
  transparent?: boolean;
}

export const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const { location, setLocation } = useContext(LocationContext);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.coord2Address(longitude, latitude, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          setLocation({
            dong: result[0].address.region_3depth_name,
            lat: latitude,
            lng: longitude,
          });
          localStorage.setItem(
            'location',
            JSON.stringify({
              dong: result[0].address.region_3depth_name,
              lat: latitude,
              lng: longitude,
            }),
          );
        }
      });
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <HeaderLeft>
          <LogoWrapper href="/">
            <Logo src="/image/logo.png" alt="로고" />
            <Location>요기 먹때</Location>
          </LogoWrapper>

          <DropdownContainer ref={dropdownRef}>
            <Dropdown onClick={toggleDropdown}>
              {location.dong} {isDropdownOpen ? '▲' : '▼'}
            </Dropdown>
            <DropdownMenu isOpen={isDropdownOpen}>
              <DropdownItem>{location.dong}</DropdownItem>
              <DropdownItem transparent onClick={() => getLocation()}>
                내 동네 설정
              </DropdownItem>
            </DropdownMenu>
          </DropdownContainer>
        </HeaderLeft>

        <Button
          label="로그인"
          bgColor="#ffd500"
          radius="5px"
          onClick={() => navigate('/login')}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  box-sizing: border-box;
  position: fixed;
  z-index: ${Common.zIndex.header};
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: ${Common.colors.primary};
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

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
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
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 9999;
  min-width: 160px;
`;

const DropdownItem = styled.div<DropdownItemProps>`
  padding: 8px 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: ${(props) => (props.transparent ? 'rgba(0, 0, 0, 0.4)' : '#000000')};
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Header;
