import React, { useState } from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import DropDownPicker from "react-native-dropdown-picker";

function AppFormDropDownPicker({ items, name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    // const [items, setItems] = useState([
    //   { label: "Apple", value: "apple" },
    //   { label: "Banana", value: "banana" },
    // ]);

  return (
    <>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormDropDownPicker;
