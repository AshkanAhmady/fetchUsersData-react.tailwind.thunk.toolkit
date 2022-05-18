import { Provider } from "react-redux";
import UsersList from "./Components/UsersList";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}

export default App;
