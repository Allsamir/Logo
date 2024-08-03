import React from "react";
import Slider from "../components/Slider";
import LoginForm from "../components/LoginForm";
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
                  Log In To Your Account
                </h3>
                <p className="text-paragraph font-normal text-base leading-[28px] mt-6">
                  Welcome Back! Select a method to log in:
                </p>
              </div>
            </div>
            <LoginForm />
          </div>
          <div className="slider flex-1 relative lg:mt-0 mt-12">
            <Slider isSecond={true}>
              {["Group 1000001746.png", "Group 1000001697.png"].map(
                (i, index) => (
                  <>
                    <img src={i} key={index} className="mx-auto" />
                  </>
                ),
              )}
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
