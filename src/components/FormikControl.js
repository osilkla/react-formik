import React from "react";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import Select from "./ui/Select";
import RadioButtons from "./ui/RadioButtons";
import CheckboxGroup from "./ui/CheckboxGroup";
import DatePicker from "./ui/DatePicker";
import ChakraInput from "./ui/ChakraInput";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "chakraInput":
      return <ChakraInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
