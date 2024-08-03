import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOffOutline } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
type Inputs = {
  email: string;
  password: string;
};
const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { loginUser, googleProvider } = useAuth();
  const navigate = useNavigate();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    loginUser(data.email, data.password)
      .then(() => {
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          confirmButtonText: "Okay",
        }).then(() => {
          navigate("/");
        });
        e?.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: `${errorCode}`,
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };
  const handleGoogleLogin = () => {
    googleProvider()
      .then(() => {
        Swal.fire({
          title: "Google Login Successful!",
          icon: "success",
          confirmButtonText: "Okay",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: `${errorCode}`,
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };
  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="social-logins max-w-[432px]">
        <div className="flex justify-between items-center gap-4">
          <div>
            <img
              src="google.png"
              alt=""
              className="hover:cursor-pointer"
              onClick={handleGoogleLogin}
            />
          </div>
          <div className="tooltip" data-tip="Coming Soon!">
            <img src="facebook.png" className="hover:cursor-pointer" alt="" />
          </div>
        </div>
        <p className="text-center my-8 flex items-center sm:text-sm text-xs">
          <span>
            <img src="Vector 4.svg" alt="" />
          </span>
          Or Continue with Email
          <span>
            <img src="Vector 4.svg" alt="" />
          </span>
        </p>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-heading font-medium">Email</span>
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered"
          required
          {...register("email")}
        />
      </div>
      <div className="form-control relative">
        <label className="label">
          <span className="label-text text-heading font-medium">Password</span>
        </label>
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Enter your password"
          className="input input-bordered"
          required
          {...register("password")}
        />
        <button
          onClick={() => setPasswordVisible(!isPasswordVisible)}
          className="absolute right-2 bottom-3"
          type="button"
        >
          {isPasswordVisible ? <IoEye /> : <IoEyeOffOutline />}
        </button>
      </div>
      <div className="form-control justify-between flex-row mt-4">
        <label className="label cursor-pointer justify-start gap-4">
          <input type="checkbox" defaultChecked className="checkbox" />
          <span className="label-text text-sm">Remember me</span>
        </label>
        <label className="label">
          <a
            href="#"
            className="label-text-alt link link-hover text-sm text-buttonBg"
          >
            Forgot password?
          </a>
        </label>
      </div>
      <SubmitButton text="Sign in" />
      <div className="mt-6 text-center">
        <p className="sm:text-base text-sm">
          Don't Have an Account?{" "}
          <Link to={`/sign-up`} className="text-buttonBg">
            Create Account
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
