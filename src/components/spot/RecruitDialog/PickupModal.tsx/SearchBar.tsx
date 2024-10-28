import InputField from '@components/common/InputField';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { Common } from '@styles/globalStyle';
import { useContext, useState } from 'react';
import { SearchSpotContext } from '@provider/SearchSpot';

interface Props {
  onRequestClose: () => void;
}

const SearchBar = ({ onRequestClose }: Props) => {
  const { setBound } = useContext(SearchSpotContext);
  const [keyword, setKeyword] = useState<string>();

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleKeydown = (e: React.KeyboardEvent) => {
    if (keyword && e.keyCode === 13) {
      // keyword를 이용하여 주소 찾아 나열
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(keyword, (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();

          data.map((loc) => {
            bounds.extend(new kakao.maps.LatLng(Number(loc.y), Number(loc.x)));
          });

          //@ts-ignore
          setBound(bounds);
        }
      });
    }
  };

  return (
    <Wrapper>
      <InputField
        style={{ paddingLeft: '40px' }}
        onChange={(e) => handleSearchInput(e)}
        onKeyDown={handleKeydown}
      />
      <SearchIcon>
        <BsSearch />
      </SearchIcon>
      <CloseBtn onClick={onRequestClose}>X</CloseBtn>
    </Wrapper>
  );
};
export default SearchBar;

const Wrapper = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SearchIcon = styled.div`
  color: black;
  position: absolute;
  left: 8px;
  top: 8px;
`;

const CloseBtn = styled.div`
  color: ${Common.colors.button2};
  cursor: pointer;
`;
