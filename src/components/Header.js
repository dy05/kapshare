import {Link} from "react-router-dom";

export default function Header() {
  return (
      <div className="p-4 mt-md-5">
          <Link className="me-2" to="/">Home</Link>
          <Link className="me-2" to="login">Login</Link>
      </div>
  );
}
