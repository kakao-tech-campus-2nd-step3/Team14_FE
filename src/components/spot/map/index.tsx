import { LocationContext } from '@provider/Location';
import { useContext, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { BsPlusCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { Common } from '@styles/globalStyle';
import Modal from '@components/common/Modal';
import RecruitDialog from '../RecruitDialog';
import { SearchSpotProvider } from '@provider/SearchSpot';
import AlertDialog from '@components/common/Modal/AlertDialog';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@routes/path';

const KakaoMap = () => {
  const { location } = useContext(LocationContext);
  const navigate = useNavigate();

  const [recruitIsOpen, setRecruitIsOpen] = useState(false);
  const [completeModalIsOpen, setCompleteModalIsOpen] = useState(false);

  return (
    <Map
      center={{ lat: location.lat, lng: location.lng }}
      style={{ width: '100%', height: '100%' }}
      level={3}
    >
      <PlusBtnIcon onClick={() => setRecruitIsOpen(true)}>
        <BsPlusCircleFill size="50" />
      </PlusBtnIcon>

      <MapMarker
        position={{
          lat: location.lat,
          lng: location.lng,
        }}
      />
      <Modal
        size="big"
        type="transparent"
        isOpen={recruitIsOpen}
        onRequestClose={() => setRecruitIsOpen(false)}
        title="모집"
        content={
          <SearchSpotProvider>
            <RecruitDialog
              onRequestClose={() => setRecruitIsOpen(false)}
              onRequestConfirm={() => setCompleteModalIsOpen(true)}
            />
          </SearchSpotProvider>
        }
      />
      <Modal
        type="complete"
        isOpen={completeModalIsOpen}
        onRequestClose={() => setCompleteModalIsOpen(false)}
        title="완료"
        content={
          <AlertDialog
            type="complete"
            content={
              <div>
                스팟 생성이 완료됐습니다.
                <br />
                스팟 내역은 마이페이지에서 확인할 수 있습니다.
                <br />
                이동하시겠습니까?
              </div>
            }
            onRequestClose={() => setCompleteModalIsOpen(false)}
            onRequestConfirm={() => {
              navigate(RouterPath.myPageOrderDetail);
            }}
          />
        }
      />
    </Map>
  );
};
export default KakaoMap;

const PlusBtnIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: ${Common.zIndex.common};
  cursor: pointer;
`;
