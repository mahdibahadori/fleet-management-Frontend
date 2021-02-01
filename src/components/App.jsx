
import {Route, Switch} from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import {LogIn} from './SignIn'
import {SignUp} from './SignUp'
import {Company} from './Company'
import {EditCompany} from './EditCompany'
import {CreateCompany} from './CreateCompany'


function App() { 

  return (  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/company" component={Company} />       
      <Route  path='/edit' component={EditCompany} />
      <Route  path="/About" component={About} />
      <Route  path="/login" component={LogIn} />
      <Route  path="/sign-up" component={SignUp} /> 
      <Route  path='/CreateCompany' component={CreateCompany} />
    </Switch>  
  );
}

export default App;
