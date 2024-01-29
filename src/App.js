import { Provider } from "react-redux";
import ProductList from "./comp/ProductList";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h4>Welcome</h4>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
