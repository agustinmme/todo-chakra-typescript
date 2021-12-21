import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Field, useField } from "formik";

interface Props {
  name: string;
  label: string;
  placeholder:string;
  type:string;
  chakraComp: React.ReactNode;
}

const FieldChakra: React.FC<Props> = ({ label, chakraComp, ...props }) => {
  const [field, meta] = useField(props.name);
  return (
    <FormControl isInvalid={meta.error && meta.touched ? true : false}>
      <FormLabel mt={3}>{label}</FormLabel>
      <Field as={chakraComp} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default FieldChakra;
