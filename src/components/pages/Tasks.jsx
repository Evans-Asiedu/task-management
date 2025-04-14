import Header from "src/components/layout/Header";

const Tasks = () => {
  return (
    <>
      <Header showActions={true} title="Tasks" />
      <main className="h-full flex bg-n-2">
        <h1>Tasks page</h1>
      </main>
    </>
  );
};

export default Tasks;
