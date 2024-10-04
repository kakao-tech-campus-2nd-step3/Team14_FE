import styled from '@emotion/styled';

import Menubar from '@components/mypage/Menubar';

const MyPage = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Menubar />
      </InnerWrapper>
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  width: 60%;
`;
