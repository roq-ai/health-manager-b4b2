import * as yup from 'yup';

export const therapistValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
