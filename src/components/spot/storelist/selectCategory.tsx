import styled from 'styled-components';
import { categories } from './category';

interface Props {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SelectCategory = ({ setCategory }: Props) => {
  return (
    <Selector onChange={(e) => setCategory(e.target.value)}>
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
  margin-left: 40px;
  background-color: transparent;
  font-family: PaperlogyMedium;
  font-size: 16px;
  outline: none;
`;
