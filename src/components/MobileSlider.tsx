import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const MobileSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper min-h-[100vh]"
      >
        <SwiperSlide
          style={{
            backgroundImage: "url('iPhone 14 & 15 Pro Max - 6.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          <div className="content mt-16 px-4">
            <img
              src="LOGO.png"
              alt=""
              style={{ width: "109px", margin: "0 auto" }}
            />
            <p className="text-center text-heading font-semibold text-2xl mt-8 my-4">
              Sign In To Your Account
            </p>
            <p className="text-[#fff] font-normal text-sm leading-[28px]">
              Welcome Back! By click the sign up button, you're agree to
              Zenitood Terms and Service and acknlowledge the{" "}
              <Link to={`/`} className="text-buttonBg">
                Privacy and Policy
              </Link>
            </p>
            <div className="little-container mt-20 bg-[#1F2833] bg-opacity-70 px-4 py-7 rounded-xl mb-[443px]">
              <p className="text-[22px] font-semibold leading-[35px] text-[#fff]">
                <span className="text-buttonBg">Create Account</span> <br />{" "}
                Fill in Your Information
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url('iPhone 14 & 15 Pro Max - 6.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="content mt-16">
            <img
              src="LOGO.png"
              alt=""
              style={{ width: "109px", margin: "0 auto" }}
            />
            <p className="text-[#fff] font-medium text-lg mt-6 mb-16">
              <span className="font-semibold">Create Account</span>
              <br /> Fill in Your Information
            </p>
            <div className="form bg-[#fff] rounded-t-[40px] py-8 px-4">
              <p className="text-heading text-[28px] font-semibold text-center">
                Sign Up
              </p>
              <RegisterForm />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url('iPhone 14 & 15 Pro Max - 6.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="content mt-16">
            <img
              src="LOGO.png"
              alt=""
              style={{ width: "109px", margin: "0 auto" }}
            />
            <p className="text-[#fff] font-medium text-lg mt-6 mb-16 px-4">
              <span className="font-semibold">Sign In to view all the</span>
              <br /> massage therapists
            </p>
            <div className="form bg-[#fff] rounded-t-[40px] py-8 px-4">
              <p className="text-heading text-[22px] font-semibold text-center">
                Log In To Your Account
              </p>
              <p className="text-center text-[#5C635A] text-xs mt-4">
                Welcome Back! Select a method to log in:
              </p>
              <LoginForm />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MobileSlider;
