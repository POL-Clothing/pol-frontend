import React from "react";
import { TextField } from "@material-ui/core";
// import { Field, useFormikContext } from 'formik';

import { Error } from "./FormikInput.styles";

const FormikInput = ({ field: { ...fields }, form: { touched, errors }, styles, ...props }) => (
  <>
    <TextField
      selectedTheme="dark"
      {...props}
      {...fields}
      invalid={Boolean(touched[fields.name] && errors[fields.name])}
      variant="outlined"
    />
    {touched[fields.name] && errors[fields.name] ? <Error>{errors[fields.name]}</Error> : ""}
  </>
);
export default FormikInput;
