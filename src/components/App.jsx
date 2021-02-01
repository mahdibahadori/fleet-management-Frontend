import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { LogIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Company } from "./Company";
import { EditCompany } from "./EditCompany";
import { CreateCompany } from "./CreateCompany";

import {ViewFleet} from './ViewFleet'
import {ViewVehicle} from './ViewVehicle'
import {DeleteVehicle} from './DeleteVehicle'
import {ViewDrivers} from './ViewDrivers'
import {ViewDriver} from './ViewDriver'
import {DeleteDriver} from './DeleteDriver'

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
      
      <Route path="/ViewFleet" component={ViewFleet} />
      <Route path="/ViewVehicle" component={ViewVehicle} />
      <Route path="/DeleteVehicle" component={DeleteVehicle} />
      <Route path="/ViewDrivers" component={ViewDrivers} />
      <Route path="/ViewDriver" component={ViewDriver} />
      <Route path="/DeleteDriver" component={DeleteDriver} />
    </Switch>
  );
}

export default App;
