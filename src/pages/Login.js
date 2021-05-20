import {Component} from "react";
import {Redirect} from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'dyos',
      password: '',
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  signIn() {
    this.setState({
      error: false
    });

    if (this.state.username === "dyos" && this.state.password === "dyos") {
      return this.props.history.push('/')
      // return <Redirect to='/'/>
    } else {
      this.setState({
        error: true
      });
    }

  }

  render() {
    return (
        <div className="p-4 mt-md-5">
          <div className="row">
            <div className="card col-md-5 m-auto p-0">
              <div className="card-header">
                Se connecter
              </div>
              <div className="card-body">
                {this.state.error ? (
                    <div className="alert alert-danger">
                      Identifiant ou mot de passe incorrect
                    </div>
                ) : ''}
                <div className="form-group">
                  <label htmlFor="username" className="sr-only">Username</label>
                  <input type="text" name="username" id="username" className="form-control mt-1" placeholder="Username"
                         value={this.state.username} onChange={this.handleChange} autoFocus/>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input type="password" name="password" id="password" className="form-control mt-1" placeholder="Password"
                         value={this.state.password} onChange={this.handleChange}/>
                </div>

                <div className="mt-3">
                  <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="submit">Sign in</button>
                </div>
                <p className="mt-5 mb-3 text-muted">&copy; {(new Date()).getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}