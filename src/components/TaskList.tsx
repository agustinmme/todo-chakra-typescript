import { Grid } from "@chakra-ui/react";
import { Task } from "../types";
import TaskCard from "./TaskCard";
interface Props {
  tasks: Task[];
  deleteATask: (id: number) => void;
  completeTask: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ tasks, deleteATask,completeTask }) => {
  return (
    <>
      <Grid
        gridGap={8}
        templateColumns={{
          base: "repeat(auto-fill, minmax(240px, 1fr))",
          sm: "repeat(auto-fill, minmax(360px, 1fr))",
        }}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} deleteATask={deleteATask} completeTask={completeTask}/>
        ))}
      </Grid>
    </>
  );
};
export default TaskList;
