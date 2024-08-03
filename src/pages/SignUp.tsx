import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import MobileSlider from "../components/MobileSlider";

const SignUp: React.FC = () => {
  return (
    <>
      <div className="container mx-auto lg:px-8 px-4 sm:block hidden">
        <div className="lg:flex gap-10 my-20">
          <div className="SignUp-form lg:w-[40%] w-full">
            <div className="form-content">
              <img src="LOGO.png" alt="" />
              <div className="content mt-8">
                <h3 className="text-heading text-[30px] font-semibold">
                  Sign In To Your Account
                </h3>
                <p className="text-paragraph font-normal text-base leading-[28px] mt-6">
                  Welcome Back! By click the sign up button, you're agree to
                  Zenitood Terms and Service and acknlowledge the{" "}
                  <Link to={`/`} className="text-buttonBg">
                    Privacy and Policy
                  </Link>
                </p>
              </div>
            </div>
            <RegisterForm />
          </div>
          <div className="slider flex-1 relative lg:mt-0 mt-12">
            <Slider>
              {["Group 1000001746.png", "Group 1000001697.png"].map((i) => (
                <img src={i} key={i} className="mx-auto" />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="sm:hidden block relative">
        <MobileSlider />
      </div>
    </>
  );
};

export default SignUp;
