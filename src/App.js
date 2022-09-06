import ToDoBoard from "./components/ToDoBoard";

function App() {
  const DUMMY_TASKS = [
    {
      id: 1,
      task: "Give dog a bath",
      complete: true,
    },
    {
      id: 2,
      task: "Do laundry",
      complete: true,
    },
    {
      id: 3,
      task: "Vacuum floor",
      complete: false,
    },
  ];

  return <ToDoBoard />;
}

export default App;
