import { Link } from "react-router-dom";
import img from "../images/login.svg";
import logo from "../images/vep-logo.svg";

export default function Login() {
  return (
    <div className="mt-24 flex justify-evenly items-center font-raleway ">
      <div>
        <span className="font-semibold text-2xl">Hey!</span>
        <br />
        <span className="font-bold text-3xl">Welcome back.</span>
        <br />
        <img src={img} alt="Login Icon" className="mt-8" />
      </div>

      <div className="h-80 w-0.5 bg-gray-300 top-10"></div>

      <div className="mx-12 w-96">
        <div className="absolute top-24">
          <div>
            <img src={logo} alt="Logo" className="mb-8" />
            <span className="font-semibold text-2xl">
              Login to your account.
            </span>
            <br />
            <br />
            <span className="font-normal text-base">
              Enter your registered email ID and password.
            </span>
            <br />
          </div>

          <div className="mt-7 min-w-[25rem]">
            <div className="flex items-center rounded-2xl mt-5 bg-[#F2F2F2]">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-4"
              >
                <path
                  d="M15.5 4.57471C16.163 4.57471 16.7989 4.8381 17.2678 5.30694C17.7366 5.77578 18 6.41167 18 7.07471V15.0747C18 15.7377 17.7366 16.3736 17.2678 16.8425C16.7989 17.3113 16.163 17.5747 15.5 17.5747H4.5C3.83696 17.5747 3.20107 17.3113 2.73223 16.8425C2.26339 16.3736 2 15.7377 2 15.0747V7.07471C2 6.41167 2.26339 5.77578 2.73223 5.30694C3.20107 4.8381 3.83696 4.57471 4.5 4.57471H15.5ZM17 8.53571L10.254 12.5057C10.1902 12.5432 10.1189 12.566 10.0453 12.5726C9.9716 12.5791 9.8974 12.5693 9.828 12.5437L9.746 12.5057L3 8.53771V15.0747C3 15.4725 3.15804 15.8541 3.43934 16.1354C3.72064 16.4167 4.10218 16.5747 4.5 16.5747H15.5C15.8978 16.5747 16.2794 16.4167 16.5607 16.1354C16.842 15.8541 17 15.4725 17 15.0747V8.53571ZM15.5 5.57471H4.5C4.10218 5.57471 3.72064 5.73274 3.43934 6.01405C3.15804 6.29535 3 6.67688 3 7.07471V7.37671L10 11.4947L17 7.37471V7.07471C17 6.67688 16.842 6.29535 16.5607 6.01405C16.2794 5.73274 15.8978 5.57471 15.5 5.57471Z"
                  fill="#787878"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter email ID"
                className="text-sm w-full py-4 bg-transparent outline-none font-normal border-none"
                required
              />
            </div>
            <div className="flex items-center rounded-2xl mt-5 font-normal bg-[#F2F2F2]">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-4"
              >
                <path
                  d="M10 2.57471C10.7957 2.57471 11.5587 2.89078 12.1213 3.45339C12.6839 4.016 13 4.77906 13 5.57471V6.57471H14C14.5304 6.57471 15.0391 6.78542 15.4142 7.16049C15.7893 7.53557 16 8.04427 16 8.57471V15.5747C16 16.1051 15.7893 16.6138 15.4142 16.9889C15.0391 17.364 14.5304 17.5747 14 17.5747H6C5.46957 17.5747 4.96086 17.364 4.58579 16.9889C4.21071 16.6138 4 16.1051 4 15.5747V8.57471C4 8.04427 4.21071 7.53557 4.58579 7.16049C4.96086 6.78542 5.46957 6.57471 6 6.57471H7V5.57471C7 4.77906 7.31607 4.016 7.87868 3.45339C8.44129 2.89078 9.20435 2.57471 10 2.57471ZM14 7.57471H6C5.73478 7.57471 5.48043 7.68006 5.29289 7.8676C5.10536 8.05514 5 8.30949 5 8.57471V15.5747C5 15.8399 5.10536 16.0943 5.29289 16.2818C5.48043 16.4693 5.73478 16.5747 6 16.5747H14C14.2652 16.5747 14.5196 16.4693 14.7071 16.2818C14.8946 16.0943 15 15.8399 15 15.5747V8.57471C15 8.30949 14.8946 8.05514 14.7071 7.8676C14.5196 7.68006 14.2652 7.57471 14 7.57471ZM10 11.0747C10.2652 11.0747 10.5196 11.1801 10.7071 11.3676C10.8946 11.5551 11 11.8095 11 12.0747C11 12.3399 10.8946 12.5943 10.7071 12.7818C10.5196 12.9693 10.2652 13.0747 10 13.0747C9.73478 13.0747 9.48043 12.9693 9.29289 12.7818C9.10536 12.5943 9 12.3399 9 12.0747C9 11.8095 9.10536 11.5551 9.29289 11.3676C9.48043 11.1801 9.73478 11.0747 10 11.0747ZM10 3.57471C9.46957 3.57471 8.96086 3.78542 8.58579 4.16049C8.21071 4.53557 8 5.04427 8 5.57471V6.57471H12V5.57471C12 5.04427 11.7893 4.53557 11.4142 4.16049C11.0391 3.78542 10.5304 3.57471 10 3.57471Z"
                  fill="#787878"
                />
              </svg>
              <input
                type="password"
                placeholder="Set Password"
                className="font-normal text-sm w-full py-4 bg-transparent outline-none border-none"
                required
              />
              <svg
                width="20"
                height="13"
                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-4"
              >
                <path
                  d="M1.912 8.49711C2.7304 4.56711 6.1516 1.77471 10 1.77471C13.8472 1.77471 17.2684 4.56711 18.088 8.49711C18.1205 8.65306 18.2135 8.78972 18.3468 8.87704C18.48 8.96435 18.6425 8.99517 18.7984 8.96271C18.9543 8.93024 19.091 8.83716 19.1783 8.70394C19.2656 8.57071 19.2965 8.40825 19.264 8.25231C18.3316 3.78231 14.4316 0.574707 10 0.574707C5.5684 0.574707 1.6684 3.78231 0.735996 8.25231C0.703533 8.40825 0.73435 8.57071 0.821667 8.70394C0.908984 8.83716 1.04565 8.93024 1.2016 8.96271C1.35754 8.99517 1.52 8.96435 1.65322 8.87704C1.78645 8.78972 1.87953 8.65306 1.912 8.49711ZM10 4.17471C8.88609 4.17471 7.8178 4.61721 7.03015 5.40486C6.2425 6.19251 5.8 7.2608 5.8 8.37471C5.8 9.48862 6.2425 10.5569 7.03015 11.3446C7.8178 12.1322 8.88609 12.5747 10 12.5747C11.1139 12.5747 12.1822 12.1322 12.9698 11.3446C13.7575 10.5569 14.2 9.48862 14.2 8.37471C14.2 7.2608 13.7575 6.19251 12.9698 5.40486C12.1822 4.61721 11.1139 4.17471 10 4.17471ZM7 8.37471C7 7.57906 7.31607 6.816 7.87868 6.25339C8.44129 5.69078 9.20435 5.37471 10 5.37471C10.7956 5.37471 11.5587 5.69078 12.1213 6.25339C12.6839 6.816 13 7.57906 13 8.37471C13 9.17036 12.6839 9.93342 12.1213 10.496C11.5587 11.0586 10.7956 11.3747 10 11.3747C9.20435 11.3747 8.44129 11.0586 7.87868 10.496C7.31607 9.93342 7 9.17036 7 8.37471Z"
                  fill="#333333"
                />
              </svg>
            </div>

            <Link to="/dashboard">
              <input
                type="submit"
                value="Login"
                className="bg-[#BF13BF] w-full mt-5 border-none rounded-2xl py-4 text-white text-sm uppercase font-medium cursor-pointer"
              />
            </Link>
            <br />
            <div className="mt-5 text-sm">
              <div>
                <span className="cursor-default">Forgot Password? </span>
                <span className="uppercase text-[#BF13BF] font-medium cursor-pointer">
                  Reset Password
                </span>
              </div>
              <Link to="/signup">
                <div className="mt-10 text-center">
                  <span className="cursor-default">Don't have account? </span>
                  <span className="uppercase text-[#BF13BF] font-medium cursor-pointer">
                    Sign Up
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
