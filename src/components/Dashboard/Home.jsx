import Avatar from "../../images/userAvatar.png";
import DashImg from "../../images/dashboard-uno.svg";

export default function Home() {
  return (
    <div className="pr-10">
      <div className="flex items-center justify-between w-[80rem] font-raleway">
        <div className=" flex items-center">
          <img src={Avatar} alt="" className="rounded-full w-16 h-16" />
          <div className="ml-4">
            <span className="font-semibold text-2xl">Hello, Abhijeet!</span>
            <br />
            <span className="font-normal text-base text-[#333333]">
              @abhijeeeeeeet
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center border border-[#BF13BF] mr-5 w-48 justify-center py-2 rounded-2xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.6001 6.0001C3.6001 5.36358 3.85295 4.75313 4.30304 4.30304C4.75313 3.85295 5.36358 3.6001 6.0001 3.6001H14.4001C15.0366 3.6001 15.6471 3.85295 16.0972 4.30304C16.5472 4.75313 16.8001 5.36358 16.8001 6.0001V14.4001H20.4001V16.8001C20.4001 17.7549 20.0208 18.6706 19.3457 19.3457C18.6706 20.0208 17.7549 20.4001 16.8001 20.4001H7.2001C6.24532 20.4001 5.32964 20.0208 4.65451 19.3457C3.97938 18.6706 3.6001 17.7549 3.6001 16.8001V6.0001ZM16.8001 19.2001C17.4366 19.2001 18.0471 18.9472 18.4972 18.4972C18.9472 18.0471 19.2001 17.4366 19.2001 16.8001V15.6001H16.8001V19.2001ZM7.8001 7.2001C7.64097 7.2001 7.48836 7.26331 7.37583 7.37583C7.26331 7.48836 7.2001 7.64097 7.2001 7.8001C7.2001 7.95923 7.26331 8.11184 7.37583 8.22436C7.48836 8.33688 7.64097 8.4001 7.8001 8.4001H12.6001C12.7592 8.4001 12.9118 8.33688 13.0244 8.22436C13.1369 8.11184 13.2001 7.95923 13.2001 7.8001C13.2001 7.64097 13.1369 7.48836 13.0244 7.37583C12.9118 7.26331 12.7592 7.2001 12.6001 7.2001H7.8001ZM7.8001 10.8001C7.64097 10.8001 7.48836 10.8633 7.37583 10.9758C7.26331 11.0884 7.2001 11.241 7.2001 11.4001C7.2001 11.5592 7.26331 11.7118 7.37583 11.8244C7.48836 11.9369 7.64097 12.0001 7.8001 12.0001H12.6001C12.7592 12.0001 12.9118 11.9369 13.0244 11.8244C13.1369 11.7118 13.2001 11.5592 13.2001 11.4001C13.2001 11.241 13.1369 11.0884 13.0244 10.9758C12.9118 10.8633 12.7592 10.8001 12.6001 10.8001H7.8001ZM7.8001 14.4001C7.64097 14.4001 7.48836 14.4633 7.37583 14.5758C7.26331 14.6884 7.2001 14.841 7.2001 15.0001C7.2001 15.1592 7.26331 15.3118 7.37583 15.4244C7.48836 15.5369 7.64097 15.6001 7.8001 15.6001H10.2001C10.3592 15.6001 10.5118 15.5369 10.6244 15.4244C10.7369 15.3118 10.8001 15.1592 10.8001 15.0001C10.8001 14.841 10.7369 14.6884 10.6244 14.5758C10.5118 14.4633 10.3592 14.4001 10.2001 14.4001H7.8001Z"
                fill="#BF13BF"
              />
            </svg>
            <input
              type="button"
              value="Send Invoice"
              className="text-[#BF13BF] text-base font-semibold"
            />
          </div>
          <div className="flex items-center justify-center bg-[#BF13BF] w-48 py-2 rounded-2xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.26504 2.46131L21.691 11.5405C21.7915 11.59 21.8761 11.6667 21.9353 11.7618C21.9945 11.8569 22.0258 11.9667 22.0258 12.0787C22.0258 12.1907 21.9945 12.3005 21.9353 12.3956C21.8761 12.4907 21.7915 12.5674 21.691 12.6169L3.26384 21.6961C3.16061 21.7468 3.04497 21.7668 2.93071 21.7537C2.81644 21.7405 2.70837 21.6948 2.61935 21.622C2.53033 21.5491 2.46412 21.4522 2.42861 21.3428C2.39309 21.2334 2.38977 21.1161 2.41904 21.0049L4.24424 14.1109C4.27383 13.9994 4.33496 13.8987 4.42031 13.821C4.50566 13.7433 4.6116 13.6919 4.72544 13.6729L12.9826 12.2965C13.0318 12.2884 13.0782 12.2681 13.1176 12.2375C13.157 12.2069 13.1882 12.167 13.2082 12.1213L13.2298 12.0493C13.241 11.9826 13.2294 11.914 13.1967 11.8548C13.164 11.7955 13.1123 11.749 13.0498 11.7229L12.9826 11.7037L4.67984 10.3201C4.56622 10.3009 4.46053 10.2494 4.37541 10.1717C4.29029 10.094 4.22934 9.9935 4.19984 9.88211L2.41904 3.15371C2.38947 3.0424 2.39256 2.92492 2.42794 2.81532C2.46333 2.70572 2.52951 2.60862 2.61859 2.53561C2.70767 2.4626 2.81587 2.41677 2.93029 2.4036C3.04471 2.39042 3.1605 2.41046 3.26384 2.46131H3.26504Z"
                fill="white"
              />
            </svg>
            <input
              type="button"
              value="Transfer"
              className="text-white border-none outline-none bg-transparent"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div className="h-60 w-[25rem] shadow-md rounded-2xl overflow-hidden relative">
          <div className="absolute top-8 left-8">
            <span className="font-semibold text-base">Wallet Balance</span>
            <br />
            <br />
            <span className="text-4xl font-semibold">$ 0.00</span>
          </div>
          <div className="absolute bottom-0 w-full h-16 bg-[#FFD6FF] flex items-center justify-evenly">
            <span className="font-bold text-sm text-[#BF13BF] uppercase">
              Withdraw
            </span>
            <div className="h-8 w-0.5 bg-[#CC8FC2]"></div>
            <span className="font-bold text-sm text-[#BF13BF] uppercase">
              Add Balance
            </span>
          </div>
        </div>

        <div className="grid gap-10 grid-cols-2 grid-rows-2">
          <div className="flex items-center shadow-md p-5 overflow-hidden rounded-[32px]">
            <div className="bg-[#333333] rounded-2xl">
              <svg
                width="50"
                height="50"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="p-3"
              >
                <path
                  d="M6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6H29C29.7956 6 30.5587 6.31607 31.1213 6.87868C31.6839 7.44129 32 8.20435 32 9V10.17C32.5852 10.3769 33.0917 10.7602 33.4499 11.267C33.8081 11.7739 34.0003 12.3793 34 13V31C34 31.7956 33.6839 32.5587 33.1213 33.1213C32.5587 33.6839 31.7956 34 31 34H11C9.67392 34 8.40215 33.4732 7.46447 32.5355C6.52678 31.5979 6 30.3261 6 29V9ZM8 9C8 9.26522 8.10536 9.51957 8.29289 9.70711C8.48043 9.89464 8.73478 10 9 10H30V9C30 8.73478 29.8946 8.48043 29.7071 8.29289C29.5196 8.10536 29.2652 8 29 8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9ZM29 22H27C26.7348 22 26.4804 22.1054 26.2929 22.2929C26.1054 22.4804 26 22.7348 26 23C26 23.2652 26.1054 23.5196 26.2929 23.7071C26.4804 23.8946 26.7348 24 27 24H29C29.2652 24 29.5196 23.8946 29.7071 23.7071C29.8946 23.5196 30 23.2652 30 23C30 22.7348 29.8946 22.4804 29.7071 22.2929C29.5196 22.1054 29.2652 22 29 22Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-5">
              <span className="font-medium text-x;">Wallet</span>
              <br />
              <span className="font-medium text-sm text-[#787878]">
                USD Wallet
              </span>
            </div>
          </div>
          <div className="flex items-center shadow-md p-5 overflow-hidden rounded-[32px]">
            <div className="bg-[#333333] rounded-2xl">
              <svg
                width="50"
                height="50"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="p-3"
              >
                <path
                  d="M33.445 10.3211C33.6192 10.4643 33.7595 10.6445 33.8556 10.8486C33.9518 11.0526 34.0014 11.2755 34.001 11.5011C34.0021 11.6973 33.9638 11.8917 33.8882 12.0728C33.8126 12.2539 33.7013 12.4179 33.561 12.5551L27.545 18.5631C27.2638 18.844 26.8825 19.0018 26.485 19.0018C26.0875 19.0018 25.7063 18.844 25.425 18.5631C25.2854 18.4241 25.1747 18.2589 25.0991 18.077C25.0236 17.8951 24.9847 17.7 24.9847 17.5031C24.9847 17.3061 25.0236 17.1111 25.0991 16.9292C25.1747 16.7473 25.2854 16.5821 25.425 16.4431L28.889 13.0011H7.501C7.10318 13.0011 6.72165 12.843 6.44034 12.5617C6.15904 12.2804 6.001 11.8989 6.001 11.5011C6.001 11.1032 6.15904 10.7217 6.44034 10.4404C6.72165 10.1591 7.10318 10.0011 7.501 10.0011H28.869L25.433 6.55706C25.2937 6.41811 25.1832 6.25304 25.1079 6.07132C25.0325 5.88961 24.9937 5.6948 24.9937 5.49807C24.9937 5.30133 25.0325 5.10652 25.1079 4.9248C25.1832 4.74309 25.2937 4.57802 25.433 4.43906C25.7143 4.15816 26.0955 4.00039 26.493 4.00039C26.8905 4.00039 27.2718 4.15816 27.553 4.43906L33.445 10.3231V10.3211ZM6.557 27.3211C6.38277 27.4644 6.24252 27.6445 6.14637 27.8486C6.05022 28.0526 6.00057 28.2755 6.001 28.5011C5.99986 28.6973 6.03822 28.8917 6.11382 29.0728C6.18941 29.2539 6.30068 29.4179 6.441 29.5551L12.457 35.5611C12.7383 35.842 13.1195 35.9998 13.517 35.9998C13.9145 35.9998 14.2958 35.842 14.577 35.5611C14.7166 35.4221 14.8273 35.2569 14.9029 35.075C14.9784 34.8931 15.0173 34.698 15.0173 34.5011C15.0173 34.3041 14.9784 34.1091 14.9029 33.9272C14.8273 33.7453 14.7166 33.5801 14.577 33.4411L11.115 30.0011H32.501C32.8988 30.0011 33.2804 29.843 33.5617 29.5617C33.843 29.2804 34.001 28.8989 34.001 28.5011C34.001 28.1032 33.843 27.7217 33.5617 27.4404C33.2804 27.1591 32.8988 27.0011 32.501 27.0011H11.133L14.569 23.5571C14.7083 23.4181 14.8188 23.253 14.8941 23.0713C14.9695 22.8896 15.0083 22.6948 15.0083 22.4981C15.0083 22.3013 14.9695 22.1065 14.8941 21.9248C14.8188 21.7431 14.7083 21.578 14.569 21.4391C14.2878 21.1582 13.9065 21.0004 13.509 21.0004C13.1115 21.0004 12.7303 21.1582 12.449 21.4391L6.555 27.3231L6.557 27.3211Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-5">
              <span className="font-medium text-x;">Transactions</span>
              <br />
              <span className="font-medium text-sm text-[#787878]">
                209 transactions
              </span>
            </div>
          </div>

          <div className="flex items-center shadow-md p-5 overflow-hidden rounded-[32px]">
            <div className="bg-[#333333] rounded-2xl">
              <svg
                width="50"
                height="50"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="p-3"
              >
                <path
                  d="M18.4557 4.36592C18.9066 4.04592 19.4458 3.87402 19.9987 3.87402C20.5516 3.87402 21.0909 4.04592 21.5417 4.36592L33.2457 12.6699C34.6997 13.7019 33.9717 15.9939 32.1897 15.9979H7.81374C6.02574 15.9979 5.29374 13.7039 6.75374 12.6699L18.4557 4.36592ZM19.9997 11.7479C20.4419 11.7479 20.8659 11.5723 21.1785 11.2597C21.4911 10.947 21.6667 10.523 21.6667 10.0809C21.6667 9.63881 21.4911 9.2148 21.1785 8.90218C20.8659 8.58955 20.4419 8.41392 19.9997 8.41392C19.5576 8.41392 19.1336 8.58955 18.821 8.90218C18.5084 9.2148 18.3327 9.63881 18.3327 10.0809C18.3327 10.523 18.5084 10.947 18.821 11.2597C19.1336 11.5723 19.5576 11.7479 19.9997 11.7479ZM8.99974 17.9999V25.9999H12.9997V17.9999H8.99974ZM5.99974 32.3319C5.99974 29.9379 7.93974 27.9979 10.3317 27.9979H29.6657C30.815 27.9984 31.9171 28.4552 32.7298 29.2679C33.5424 30.0806 33.9992 31.1826 33.9997 32.3319V32.9979C33.9997 33.2631 33.8944 33.5175 33.7068 33.705C33.5193 33.8926 33.265 33.9979 32.9997 33.9979H6.99974C6.73452 33.9979 6.48017 33.8926 6.29263 33.705C6.10509 33.5175 5.99974 33.2631 5.99974 32.9979V32.3319ZM30.9997 17.9979V25.9979H26.9997V17.9999H30.9997V17.9979ZM24.9997 17.9979V25.9979H20.9997V17.9999H24.9997V17.9979ZM18.9997 17.9979V25.9979H14.9997V17.9999H18.9997V17.9979Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-5">
              <span className="font-medium text-x;">Banks Accounts</span>
              <br />
              <span className="font-medium text-sm text-[#787878]">
                03 Bank accounts
              </span>
            </div>
          </div>
          <div className="flex items-center shadow-md p-5 overflow-hidden rounded-[32px]">
            <div className="bg-[#333333] rounded-2xl">
              <svg
                width="50"
                height="50"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="p-3"
              >
                <path
                  d="M5 13C5 11.9391 5.42143 10.9217 6.17157 10.1716C6.92172 9.42143 7.93913 9 9 9H31C32.0609 9 33.0783 9.42143 33.8284 10.1716C34.5786 10.9217 35 11.9391 35 13V16H5V13ZM5 18H35V27C35 28.0609 34.5786 29.0783 33.8284 29.8284C33.0783 30.5786 32.0609 31 31 31H9C7.93913 31 6.92172 30.5786 6.17157 29.8284C5.42143 29.0783 5 28.0609 5 27V18ZM27 26C26.7348 26 26.4804 26.1054 26.2929 26.2929C26.1054 26.4804 26 26.7348 26 27C26 27.2652 26.1054 27.5196 26.2929 27.7071C26.4804 27.8946 26.7348 28 27 28H31C31.2652 28 31.5196 27.8946 31.7071 27.7071C31.8946 27.5196 32 27.2652 32 27C32 26.7348 31.8946 26.4804 31.7071 26.2929C31.5196 26.1054 31.2652 26 31 26H27Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-5">
              <span className="font-medium text-x;">Cards</span>
              <br />
              <span className="font-medium text-sm text-[#787878]">
                03 cards
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-evenly mt-5">
        <div className="w-[25rem] -ml-10">
          <div>
            <span className="text-sm font-semibold text-[#787878]">
              No transactions yet!!!
            </span>
          </div>
          <div>
            <span className="text-xl font-semibold text-[#787878]">
              Start making payments through Vep and now you can send Invoice
              also.
            </span>
          </div>
          <div className="grid gap-3 grid-cols-2 grid-rows-1 mt-5">
            <div className="flex items-center bg-[#BF13BF] justify-center rounded-2xl p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.26528 2.46131L21.6913 11.5405C21.7918 11.59 21.8764 11.6667 21.9355 11.7618C21.9947 11.8569 22.0261 11.9667 22.0261 12.0787C22.0261 12.1907 21.9947 12.3005 21.9355 12.3956C21.8764 12.4907 21.7918 12.5674 21.6913 12.6169L3.26408 21.6961C3.16085 21.7468 3.04521 21.7668 2.93095 21.7537C2.81669 21.7405 2.70861 21.6948 2.61959 21.622C2.53057 21.5491 2.46436 21.4522 2.42885 21.3428C2.39334 21.2334 2.39002 21.1161 2.41928 21.0049L4.24448 14.1109C4.27407 13.9994 4.3352 13.8987 4.42055 13.821C4.5059 13.7433 4.61185 13.6919 4.72568 13.6729L12.9829 12.2965C13.0321 12.2884 13.0785 12.2681 13.1179 12.2375C13.1573 12.2069 13.1884 12.167 13.2085 12.1213L13.2301 12.0493C13.2413 11.9826 13.2296 11.914 13.1969 11.8548C13.1642 11.7955 13.1125 11.749 13.0501 11.7229L12.9829 11.7037L4.68008 10.3201C4.56646 10.3009 4.46078 10.2494 4.37566 10.1717C4.29054 10.094 4.22958 9.9935 4.20008 9.88211L2.41928 3.15371C2.38971 3.0424 2.3928 2.92492 2.42819 2.81532C2.46357 2.70572 2.52976 2.60862 2.61883 2.53561C2.70791 2.4626 2.81612 2.41677 2.93053 2.4036C3.04495 2.39042 3.16074 2.41046 3.26408 2.46131H3.26528Z"
                  fill="white"
                />
              </svg>
              <span className="text-white">{"  "}Transfer</span>
            </div>
            <div className="flex items-center shadow-md justify-center rounded-2xl p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.6001 6.0001C3.6001 5.36358 3.85295 4.75313 4.30304 4.30304C4.75313 3.85295 5.36358 3.6001 6.0001 3.6001H14.4001C15.0366 3.6001 15.6471 3.85295 16.0972 4.30304C16.5472 4.75313 16.8001 5.36358 16.8001 6.0001V14.4001H20.4001V16.8001C20.4001 17.7549 20.0208 18.6706 19.3457 19.3457C18.6706 20.0208 17.7549 20.4001 16.8001 20.4001H7.2001C6.24532 20.4001 5.32964 20.0208 4.65451 19.3457C3.97938 18.6706 3.6001 17.7549 3.6001 16.8001V6.0001ZM16.8001 19.2001C17.4366 19.2001 18.0471 18.9472 18.4972 18.4972C18.9472 18.0471 19.2001 17.4366 19.2001 16.8001V15.6001H16.8001V19.2001ZM7.8001 7.2001C7.64097 7.2001 7.48836 7.26331 7.37583 7.37583C7.26331 7.48836 7.2001 7.64097 7.2001 7.8001C7.2001 7.95923 7.26331 8.11184 7.37583 8.22436C7.48836 8.33688 7.64097 8.4001 7.8001 8.4001H12.6001C12.7592 8.4001 12.9118 8.33688 13.0244 8.22436C13.1369 8.11184 13.2001 7.95923 13.2001 7.8001C13.2001 7.64097 13.1369 7.48836 13.0244 7.37583C12.9118 7.26331 12.7592 7.2001 12.6001 7.2001H7.8001ZM7.8001 10.8001C7.64097 10.8001 7.48836 10.8633 7.37583 10.9758C7.26331 11.0884 7.2001 11.241 7.2001 11.4001C7.2001 11.5592 7.26331 11.7118 7.37583 11.8244C7.48836 11.9369 7.64097 12.0001 7.8001 12.0001H12.6001C12.7592 12.0001 12.9118 11.9369 13.0244 11.8244C13.1369 11.7118 13.2001 11.5592 13.2001 11.4001C13.2001 11.241 13.1369 11.0884 13.0244 10.9758C12.9118 10.8633 12.7592 10.8001 12.6001 10.8001H7.8001ZM7.8001 14.4001C7.64097 14.4001 7.48836 14.4633 7.37583 14.5758C7.26331 14.6884 7.2001 14.841 7.2001 15.0001C7.2001 15.1592 7.26331 15.3118 7.37583 15.4244C7.48836 15.5369 7.64097 15.6001 7.8001 15.6001H10.2001C10.3592 15.6001 10.5118 15.5369 10.6244 15.4244C10.7369 15.3118 10.8001 15.1592 10.8001 15.0001C10.8001 14.841 10.7369 14.6884 10.6244 14.5758C10.5118 14.4633 10.3592 14.4001 10.2001 14.4001H7.8001Z"
                  fill="#BF13BF"
                />
              </svg>
              <span className="text-[#BF13BF]">{"  "}Send Invoice</span>
            </div>
          </div>
        </div>
        <div>
          <img src={DashImg} alt="" />
        </div>
      </div>
    </div>
  );
}
