import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormButton, FormContainer, Input, Label } from './FormContacts.styled';

const nameReg = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const numReg =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameReg, 'Name is not valid')
    .required('Required field'),
  number: yup
    .string()
    .matches(numReg, 'Phone number is not valid')
    .required('Required field'),
});

export class FormContacts extends Component {
  state = { name: '', number: '' };
  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={this.props.onSubmitForm}
      >
        <FormContainer>
          <Label>
            Name
            <Input type="text" name="name" placeholder="John" />
            <ErrorMessage name="name" component={'p'} />
          </Label>
          <Label>
            Number
            <Input type="tel" name="number" placeholder="123-45-67" />
            <ErrorMessage name="number" component={'p'} />
          </Label>
          <FormButton type="submit">Add contact</FormButton>
        </FormContainer>
      </Formik>
    );
  }
}
