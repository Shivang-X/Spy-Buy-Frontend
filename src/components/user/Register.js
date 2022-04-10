import React, { Fragment, useState, useEffect } from "react";

import MetaData from "../layout/MetaData";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userActions";

const Register = ({ history }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword:""
  });

  const { name, email, password, cpassword } = user;

  const [avatar, setAvatar] = useState("");
  // const [avatarPreview, setAvatarPreview] = useState(
  //   "/images/default_avatar.jpg"
  // );

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error) {
      // alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    if(password === cpassword){
 
      const formData = new FormData();
      formData.set("name", name);
      formData.set("email", email);
      formData.set("password", password);
      formData.set("avatar", avatar);
      
      dispatch(register(formData));
    }
    else{
      alert.error("Passwords do not match")
    }
  };

  console.log(user)

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          // setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      <MetaData title={"Register User"} />

      <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
      <div className="test">
        <section class="login-panel">
          <div class="left-side"><i class="fa fa-user-circle fa-5x" aria-hidden="true"></i></div>
          <div class="right-side">
            <h1>Sign Up</h1>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Name"
              onChange={onChange}
              value={name}
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              onChange={onChange}
              value={email}
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              onChange={onChange}
              value={password}
            />
            <input
              type="password"
              name="cpassword"
              id=""
              placeholder="Password-confirm"
              onChange={onChange}
              value={cpassword}
            />
            <input
              type="submit"
              value="let's go"
              class="submit-btn"
              disabled={loading ? true : false}
            />
          </div>
        </section>
      </div>
      </form>
    </Fragment>
  );
};

export default Register;
