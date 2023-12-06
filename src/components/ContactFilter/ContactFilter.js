import { FilterInput, FilterText } from './ContactFilter.styled';

export const ContactFilter = ({ filter, onfilterContactsByName }) => {
  return (
    <>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput
        type="text"
        value={filter}
        onChange={evt => {
          onfilterContactsByName(evt.target.value);
        }}
      />
    </>
  );
};
