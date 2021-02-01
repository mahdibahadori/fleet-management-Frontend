import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { LogIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Company } from "./Company";
import { EditCompany } from "./EditCompany";
import { CreateCompany } from "./CreateCompany";
import { EditDriver } from "./EditDriver";
import {RemoveDriver} from './RemoveDriver'
import {ViewFleet} from './ViewFleet'
import {ViewVehicle} from './ViewVehicle'
import {DeleteVehicle} from './DeleteVehicle'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/company" component={Company} />
      <Route path="/edit" component={EditCompany} />
      <Route path="/About" component={About} />
      <Route path="/login" component={LogIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/CreateCompany" component={CreateCompany} />
      <Route path="/EditDriver" component={EditDriver} />
      <Route path="/RemoveDriver" component={RemoveDriver} />
      <Route path="/ViewFleet" component={ViewFleet} />
      <Route path="/ViewVehicle" component={ViewVehicle} />
      <Route path="/DeleteVehicle" component={DeleteVehicle} />
    </Switch>
  );
}

export default App;
