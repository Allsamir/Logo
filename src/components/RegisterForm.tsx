import { useState } from "react";
import { IoEye, IoEyeOffOutline } from "react-icons/io5";
import SubmitButton from "./SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import useAuth from "../hooks/useAuth";
import { auth } from "../config/firebase.config";
type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  checked: boolean;
};
const RegisterForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    if (!data.checked) {
      Swal.fire({
        title: "Terms of Service",
        text: "Please accept these terms of service",
        icon: "info",
      });
      return;
    }
    if (data.password !== data.confirmPassword) {
      Swal.fire({
        title: "Passwords do not match",
        text: "Please re-enter your password",
        icon: "error",
      });
      return;
    }
    createUser(data.email, data.password)
      .then(() => {
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: data.name,
          }).then(() => {
            Swal.fire({
              title: "Registration Successful",
              text: "You have successfully signed up!",
              icon: "success",
            }).then(() => {
              navigate("/");
            });
            e?.target.reset();
          });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: `${errorCode}`,
          text: errorMessage,
          icon: "error",
        });
      });
  };
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isPasswordVisible2, setPasswordVisible2] = useState(false);
  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-heading font-medium">Name</span>
        </label>
        <input
          type="text"
          placeholder="@username"
          className="input input-bordered"
          required
          {...register("name")}
        />
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
      <div className="form-control relative">
        <label className="label">
          <span className="label-text text-heading font-medium">
            Confirm Password
          </span>
        </label>
        <input
          type={isPasswordVisible2 ? "text" : "password"}
          placeholder="Re-type password"
          className="input input-bordered"
          required
          {...register("confirmPassword")}
        />
        <button
          onClick={() => setPasswordVisible2(!isPasswordVisible2)}
          className="absolute right-2 bottom-3"
          type="button"
        >
          {isPasswordVisible2 ? <IoEye /> : <IoEyeOffOutline />}
        </button>
      </div>
      <div className="form-control mt-4">
        <label className="label cursor-pointer justify-start gap-4">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            {...register("checked")}
          />
          <span className="label-text text-buttonBg">
            Accept Terms of Service
          </span>
        </label>
      </div>
      <SubmitButton text="Sign up" />
      <div className="mt-6 text-center">
        <p className="sm:text-base text-sm">
          Already Have an Account?{" "}
          <Link to={`/login`} className="text-buttonBg">
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
