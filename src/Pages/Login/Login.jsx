import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthPrvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.form?.pathname || "/";
console.log('state in the location',location.state)
  const { login } = useContext(AuthContext);
  // const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `user Login by ${user.email}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: true,
        });
      });
  };
  // captcha validation
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) === true) {
      console.log("captcha validate");
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    // console.log(value);
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Log In</title>
      </Helmet>

      <div>
        <div className="hero bg-base-200  min-h-screen">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <div className="text-center md:w-1/2 lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    {" "}
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    onBlur={handleValidateCaptcha}
                    // ref={captchaRef}
                    placeholder="Type the text above"
                    name="captcha"
                    className="input input-bordered"
                    required
                  />
                  <div className="form-control">
                    <label className="label cursor-pointer flex justify-start items-center gap-3">
                      <input type="checkbox" className="checkbox" required />
                      <span className="label-text">Are you Human</span>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={disabled}
                    className="btn btn-primary "
                    type="submit"
                    value="Login"
                  />
                  <p className="text-left">
                    {" "}
                    <small>
                      New here?
                      <Link to={"/signup"} className="underline text-blue-500">
                        Create an account
                      </Link>
                    </small>
                  </p>
                </div>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
