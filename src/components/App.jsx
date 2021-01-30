
import {Route, Switch} from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import {LogIn} from './SignIn'
import {SignUp} from './SignUp'

function App() { 

  return (  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/About" component={About} />
      <Route  path="/login" component={LogIn} />
      <Route  path="/sign-up" component={SignUp} />       
    </Switch>  
  );
}

export default App;
