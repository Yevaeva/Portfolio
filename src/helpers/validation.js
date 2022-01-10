import * as Yup from "yup";

// messages
export const validationMessages = {
  required: "Required field",
};
//Yup schemas
export const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required(validationMessages.required),
  message: Yup.string().required(validationMessages.required),
  email: Yup.string()
    .email(validationMessages.emailFormat)
    .required(validationMessages.required),
});
