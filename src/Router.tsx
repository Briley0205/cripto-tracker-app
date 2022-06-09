import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cripto-tracker-app/:coinId">
          <Coin />
        </Route>
        <Route path="/cripto-tracker-app">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
