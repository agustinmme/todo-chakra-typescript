import { Text, Box, Stack, Button } from "@chakra-ui/react";
import { Task } from "../types";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
  completeTask: (id: number) => void;
}
const TaskCard: React.FC<Props> = ({ task, deleteATask, completeTask }) => {
  return (
    <Box
      display={"d-flex"}
      borderRadius={"lg"}
      bgColor={task.completed ? "green.200" : "blackAlpha.100"}
      justifyContent={"center"}
      alignContent={"center"}
      p={5}
    >
      <Stack w={"full"}>
        <Text fontWeight={"600"}>{task.title}</Text>
        <Text fontWeight={"600"}>{task.description}</Text>
        {task.completed ? (
          <Button
            colorScheme={"red"}
            size={"sm"}
            onClick={() => task.id && deleteATask(task.id)}
          >
            Delete
          </Button>
        ) : null}
        {!task.completed ? (
          <Button
            colorScheme={"blue"}
            size={"sm"}
            onClick={() => task.id && completeTask(task.id)}
          >
            Complete
          </Button>
        ) : null}
      </Stack>
    </Box>
  );
};
export default TaskCard;
