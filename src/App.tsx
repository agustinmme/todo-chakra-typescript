import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  Image
} from "@chakra-ui/react";
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./types";

interface Props {
  title: string;
}

const App: React.FC<Props> = ({ title }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const newAddTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteATask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <Container
      backgroundColor="white"
      borderRadius="sm"
      maxWidth="container.xl"
      padding={4}
    >
      <Stack mt={10} spacing={4} align="stretch">
        <Flex>
          <Heading>{title}</Heading>
          <Spacer />
          <HStack>
            <Image h={10} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"} alt={"Typescript"} />
            <Image h={10} src={"https://avatars.githubusercontent.com/u/54212428?s=200&v=4"} alt={"Chakra-ui"}/>
            <Image h={10} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"} alt={"React"}/>
          </HStack>
        </Flex>

        <TaskForm newAddTask={newAddTask} />
        <TaskList
          tasks={tasks}
          deleteATask={deleteATask}
          completeTask={completeTask}
        />
      </Stack>
    </Container>
  );
};

export default App;
