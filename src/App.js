import "./App.css";
import { Routing } from "./routing/routing";
import HomeProvider from "./commonContext/homeContext";
function App() {
  return (
    <HomeProvider>
      <Routing />
    </HomeProvider>
  );
}

export default App;
