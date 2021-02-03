import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from './ProtectedRoute'
import {Secrets} from './Secrets'

import { Home } from "./Home";
import { About } from "./About";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Company } from "./Company";
import { EditCompany } from "./EditCompany";
import { CreateCompany } from "./CreateCompany";

import { ViewFleet } from "./ViewFleet";
import { ViewVehicle } from "./ViewVehicle";
import { DeleteVehicle } from "./DeleteVehicle";
import { AddVehicle } from "./AddVehicle";
import { EditVehicle } from "./EditVehicle";
import { VehicleReports } from "./VehicleReports";

import { ViewDrivers } from "./ViewDrivers";
import { ViewDriver } from "./ViewDriver";
import { DriverTracks } from "./DriverTracks";
import { DriverReports } from "./DriverReports";
import { AllReports } from "./AllReports";

import {AllCompanies} from './AllCompanies'

function App() {
  return (
    <Switch>
      <ProtectedRoute exact path='/Secrets' component={Secrets} />
      
      <Route exact path="/" component={Home} />
      <ProtectedRoute path="/company" component={Company} />
      <Route path="/edit" component={EditCompany} />
      <Route path="/About" component={About} />
      <Route path="/login" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/CreateCompany" component={CreateCompany} />

      <Route path="/ViewFleet" component={ViewFleet} />
      <ProtectedRoute path="/ViewVehicle" component={ViewVehicle} />
      <ProtectedRoute path="/DeleteVehicle" component={DeleteVehicle} />
      <ProtectedRoute path="/AddVehicle" component={AddVehicle} />
      <ProtectedRoute path="/EditVehicle" component={EditVehicle} />
      <ProtectedRoute path="/VehicleReports" component={VehicleReports} />

      <ProtectedRoute path="/ViewDrivers" component={ViewDrivers} />
      <ProtectedRoute path="/ViewDriver" component={ViewDriver} />
      <ProtectedRoute path="/DriverTracks" component={DriverTracks} />
      <ProtectedRoute path="/DriverReports" component={DriverReports} />
      <ProtectedRoute path="/AllReports" component={AllReports} />

      <ProtectedRoute path="/AllCompanies" component={AllCompanies} />
     
    </Switch>
  );
}

export default App;
