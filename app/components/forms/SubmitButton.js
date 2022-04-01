import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      title={title}
      style={{ borderRadius: 5 }}
      onPress={handleSubmit}
      color="secondary"
    />
  );
}

export default SubmitButton;
