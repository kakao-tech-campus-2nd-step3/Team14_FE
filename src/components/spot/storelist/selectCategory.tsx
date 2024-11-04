import styled from 'styled-components';
import { categories } from './category';
import { ClickedLocation } from '@provider/ClickedLocation';

interface Props {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setClickedLocation?: React.Dispatch<
    React.SetStateAction<ClickedLocation | undefined>
  >;
}
const SelectCategory = ({ setCategory, setClickedLocation }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    if (setClickedLocation) setClickedLocation(undefined);
  };

  return (
    <Selector onChange={(e) => handleChange(e)}>
      <option>카테고리 선택</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Selector>
  );
};
export default SelectCategory;

const Selector = styled.select`
  border: none;
  border-bottom: 2px solid black;
  padding: 10px 0;
  background-color: transparent;
  font-family: PaperlogyMedium;
  font-size: 16px;
  outline: none;
`;
