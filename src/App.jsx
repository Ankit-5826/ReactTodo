import TodoAllUi from "./Components/TodoAllUi";
function App() {
  let listOfTodo = [
    { text: "Buy food for dogs", dateString: "16/02/2024" },
    { text: "Wash Cloths today night", dateString: "16/02/2024" },
    { text: "Make file c list", dateString: "14/02/2024" },
    { text: "Buy food for dogs", dateString: "12/02/2024" },
    { text: "Buy car for kids ", dateString: "16/02/2024" },
    { text: "Go to the gym", dateString: "14/02/2024" },
    { text: "clean home", dateString: "17/02/2024" },
    { text: "Buy food for dogs for fun", dateString: "16/02/2024" },
    { text: "Buy a food for dogs", dateString: "16/02/2024" },
  ];
  return (
    <>
      <TodoAllUi list={listOfTodo} />
    </>
  );
}

export default App;
