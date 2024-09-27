import styled from '@emotion/styled';

interface Props {
  image: string;
}
const Logo = ({ image }: Props) => {
  return <Container image={image} />;
};

const Container = styled.div(({ image }: { image: string }) => ({
  width: '100px',
  height: '100px',
  borderRadius: '10px',
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

export default Logo;
