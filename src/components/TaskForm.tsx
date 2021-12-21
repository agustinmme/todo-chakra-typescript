import React from "react";
import { Box, Text, Input, Button, Textarea } from "@chakra-ui/react";

import * as Yup from "yup";
import FieldChakra from "./FieldChakra";
import { Formik, FormikProps, FormikHelpers } from "formik";
import { Task } from "../types";

interface Values {
  title: string;
  description: string;
}

interface Props {
  newAddTask: (task: Task) => void;
}

const TaskForm: React.FC<Props> = ({ newAddTask }) => {
  
  const getCurrentTimestamp = (): number => new Date().getTime();

  const onSubmit = (values: Values, { resetForm }: FormikHelpers<Values>) => {
    try {
      newAddTask({
        id: getCurrentTimestamp(),
        title: values.title,
        description: values.description,
        completed: false,
      });
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues: Values = {
    title: "",
    description: "",
  };

  const validationSchema: Yup.SchemaOf<Values> = Yup.object({
    title: Yup.string().required("Please enter a title"),
    description: Yup.string().required("Please enter a text"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isSubmitting }: FormikProps<Values>) => (
        <Box
          borderWidth="1px"
          rounded="lg"
          bg={"white"}
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          p={{ base: 5, md: 7 }}
          as="form"
          onSubmit={handleSubmit as any}
        >
          <Box
            display={"d-flex"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Text fontSize={36} fontWeight="600" my="auto">
              NEW TASK
            </Text>
          </Box>

          <FieldChakra
            name="title"
            label={"Title"}
            chakraComp={Input}
            placeholder="Los 10 mosqueteros"
            type="title"
          />

          <FieldChakra
            name="description"
            label={"Description"}
            chakraComp={Textarea}
            placeholder="Soy una descripcion"
            type="description"
          />

          <Button
            isLoading={isSubmitting}
            colorScheme="green"
            w={"100%"}
            mt={5}
            type="submit"
          >
            Save
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default TaskForm;
