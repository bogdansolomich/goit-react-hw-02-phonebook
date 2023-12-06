import styled from 'styled-components';

export const ContactsList = styled.ul`
  width: 579px;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;

  border-radius: 18px;
  border: 2px solid #111;
  background-color: #f6f6f6;
`;

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  &:not(:last-child) {
    margin-bottom: 28px;
  }

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 40px;
  border: 2px solid #111;
  outline: none;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;
  background-color: #fff;
`;
