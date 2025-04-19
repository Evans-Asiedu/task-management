import { useParams } from "react-router-dom";
import Header from "src/components/layout/Header";

const TaskDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Header showActions={true} title="Detail Task" />
      <main className="h-full flex bg-n-2">
        <h1>details of task {id}</h1>
      </main>
    </>
  );
};

export default TaskDetail;
