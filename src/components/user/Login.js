import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";

const Login = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (isAuthenticated) {
      history.push(redirect);
    }

    if (error) {
      alert.error(error);
      // alert(error)
      // console.log(error.data.msg)
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Login"} />

          <form className="shadow-lg" onSubmit={submitHandler}>
            <div className="test">
              <section className="login-panel">
                <div className="left-side"><i className="fa fa-user-circle fa-5x" aria-hidden="true"></i></div>
                <div className="right-side">
                  <h1>Login</h1>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="submit"
                    value="let's go"
                    className="submit-btn"
                    disabled={loading ? true : false}
                  />
                  <Link to="/register" className="float-right mt-3">
                    New User?
                  </Link>
                </div>
              </section>
            </div>
          </form>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Login;
