import styled from 'styled-components';
export const SectionWrapper = styled.section`
  width: 450px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 16px;
  border-radius: 7px;
  box-shadow: blue 0 0 7px;

  & h2 {
    color: #1035ac;
    text-align: center;
  }
  &:first-child {
    box-shadow: blue 0 0 7px;
    margin: 25px auto;
  }
`;
