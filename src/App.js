import { useState } from "react";
import { ClientsContext } from "./ClientsContext";
import InputForm from "./components/InputForm";
import ListContainer from "./components/ListContainer";

function App() {
const [clients, setClients] = useState([]);

  return (
    <div className="App p-3">
      <ClientsContext.Provider value={{clients, setClients}}>
        <InputForm/>
        <ListContainer/>
      </ClientsContext.Provider>
    </div>
  );
}

export default App;
