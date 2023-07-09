import * as yup from 'yup';

export const noteValidationSchema = yup.object().shape({
  content: yup.string().required(),
  therapist_id: yup.string().nullable(),
  client_id: yup.string().nullable(),
});
