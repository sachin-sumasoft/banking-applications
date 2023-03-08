import { TextField } from "@mui/material";
import React from "react";

const CustomInput = ({
  inputProps,
  error,
  helperText,
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      inputProps={inputProps}
      error={error}
      helperText={helperText}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInput;
