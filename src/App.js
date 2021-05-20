import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import AuthService from "./utils/AuthService";

export default function App() {
  return (
    <div>
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login} />
                    <Route component={Error}/>
                </Switch>
            </div>
        </Router>
    </div>
  );
}


/*
class AuthenticatedRoute extends Component {
    //spread operator
    render(){
        if(AuthService.isUserLogged()) {
            return <Route {...this.props}/>
        }else{
            return <Redirect to="/login"/>

        }
    }
}
*/
