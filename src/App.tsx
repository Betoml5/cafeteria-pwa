import "./App.css";
import DayMenu from "./components/menu/DayMenu";
import products from "./data.json";
function App() {
  return (
    <>
      <DayMenu products={products} />
    </>
  );
}

export default App;
