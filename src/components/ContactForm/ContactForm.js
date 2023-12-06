import { Formik } from 'formik';
import {
  StyledForm,
  FormField,
  StyledErrorMsg,
  AddBtn,
  FormLabel,
} from './ContactForm.styled';
import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .min(9, 'Phone number must contain at least 9 symbols!')
    .max(13, 'Phone number must contain less than 13 symbols!')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <FormLabel>
          Name
          <FormField name="name" type="text" />
          <StyledErrorMsg component="div" name="name" />
        </FormLabel>

        <FormLabel>
          Number
          <FormField name="number" type="tel" />
          <StyledErrorMsg component="div" name="number" />
        </FormLabel>
        <AddBtn type="submit">Add contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};
