import Avatar from "../../../images/userAvatar.png";

export default function SideBar(props) {
  return (
    <div className="grid place-items-start">
      <div className="text-center">
        <img src={Avatar} alt="" className="rounded-full w-20" />
        <span className="font-normal text-base text-[#333333]">
          Abhijeet Mohapatra
        </span>
        <br />
        <span className="font-normal text-2xl text=[#333333]">
          @abhijeeeeeeet
        </span>
      </div>
      <hr className="text-[#DADADA] w-full my-3" />
      <div className="grid gap-5 grid-cols-1 grid-row-5">
        <div
          className={`flex items-center p-2 rounded-2xl ${
            props.value === 0 ? "bg-[#DBD3EB] bg-opacity-50 " : ""
          } cursor-pointer`}
          onClick={() => props.update("detail")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2C8.93913 2 7.92172 2.42143 7.17157 3.17157C6.42143 3.92172 6 4.93913 6 6C6 7.06087 6.42143 8.07828 7.17157 8.82843C7.92172 9.57857 8.93913 10 10 10C11.0609 10 12.0783 9.57857 12.8284 8.82843C13.5786 8.07828 14 7.06087 14 6C14 4.93913 13.5786 3.92172 12.8284 3.17157C12.0783 2.42143 11.0609 2 10 2ZM5.009 11C4.74564 10.9989 4.48466 11.0499 4.24102 11.1499C3.99739 11.2499 3.7759 11.3971 3.58926 11.5829C3.40261 11.7687 3.25448 11.9895 3.15337 12.2327C3.05225 12.4759 3.00013 12.7366 3 13C3 14.691 3.833 15.966 5.135 16.797C6.417 17.614 8.145 18 10 18C11.855 18 13.583 17.614 14.865 16.797C16.167 15.967 17 14.69 17 13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11H5.009Z"
              fill="#333333"
            />
          </svg>

          <span
            className={`ml-2 ${
              props.value === 0 ? "font-bold" : "font-normal"
            } text-base`}
          >
            My Details
          </span>
        </div>

        <div className="flex items-center p-2 rounded-2xl">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 5.87407C10.2212 5.87407 10.4332 5.78626 10.5895 5.62995C10.7458 5.47363 10.8336 5.26163 10.8336 5.04057C10.8336 4.81952 10.7458 4.60751 10.5895 4.4512C10.4332 4.29489 10.2212 4.20707 10.0001 4.20707C9.77904 4.20707 9.56703 4.29489 9.41072 4.4512C9.25441 4.60751 9.1666 4.81952 9.1666 5.04057C9.1666 5.26163 9.25441 5.47363 9.41072 5.62995C9.56703 5.78626 9.77904 5.87407 10.0001 5.87407ZM16.0001 13.3401V8.00007H16.0921C16.9851 8.00007 17.3521 6.85207 16.6221 6.33507L10.7721 2.18307C10.5466 2.02285 10.2768 1.93677 10.0001 1.93677C9.72344 1.93677 9.45363 2.02285 9.2281 2.18307L3.3761 6.33507C2.6481 6.85207 3.0131 7.99907 3.9061 7.99907H4.0001V13.3391C3.3991 13.7251 3.0001 14.3991 3.0001 15.1661V16.4991C3.0001 16.6317 3.05277 16.7589 3.14654 16.8526C3.24031 16.9464 3.36749 16.9991 3.5001 16.9991H16.5001C16.6327 16.9991 16.7599 16.9464 16.8536 16.8526C16.9474 16.7589 17.0001 16.6317 17.0001 16.4991V15.1661C17.0001 14.3991 16.6021 13.7251 16.0001 13.3401ZM9.8061 2.99907C9.86237 2.95921 9.92963 2.93779 9.9986 2.93779C10.0676 2.93779 10.1348 2.95921 10.1911 2.99907L15.8301 6.99907H4.1681L9.8071 2.99907H9.8061ZM14.9981 7.99907V13.0051C14.9429 13.001 14.8875 12.999 14.8321 12.9991H12.9981V8.00007H14.9981V7.99907ZM5.0001 13.0051V8.00007H7.0001V13.0001H5.1661C5.1101 13.0001 5.0541 13.0021 4.9991 13.0061L5.0001 13.0051ZM5.1671 13.9991H14.8341C15.4781 13.9991 16.0001 14.5211 16.0001 15.1661V15.9991H4.0001V15.1661C4.0001 14.5211 4.5231 13.9991 5.1671 13.9991ZM9.5001 12.9991H8.0001V8.00007H9.5001V13.0001V12.9991ZM10.5001 12.9991V8.00007H12.0001V13.0001H10.5001V12.9991Z"
              fill="#333333"
            />
          </svg>

          <span className={`ml-2 font-normal text-base`}>My Bank Accounts</span>
        </div>

        <div
          className={`flex items-center p-2 rounded-2xl ${
            props.value === 2 ? "bg-[#DBD3EB] bg-opacity-50 " : ""
          } cursor-pointer`}
          onClick={() => props.update("card")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 13C13.3674 13 13.2402 13.0527 13.1464 13.1464C13.0527 13.2402 13 13.3674 13 13.5C13 13.6326 13.0527 13.7598 13.1464 13.8536C13.2402 13.9473 13.3674 14 13.5 14H15.5C15.6326 14 15.7598 13.9473 15.8536 13.8536C15.9473 13.7598 16 13.6326 16 13.5C16 13.3674 15.9473 13.2402 15.8536 13.1464C15.7598 13.0527 15.6326 13 15.5 13H13.5ZM2 6.5C2 5.83696 2.26339 5.20107 2.73223 4.73223C3.20107 4.26339 3.83696 4 4.5 4H15.5C16.163 4 16.7989 4.26339 17.2678 4.73223C17.7366 5.20107 18 5.83696 18 6.5V13.5C18 14.163 17.7366 14.7989 17.2678 15.2678C16.7989 15.7366 16.163 16 15.5 16H4.5C3.83696 16 3.20107 15.7366 2.73223 15.2678C2.26339 14.7989 2 14.163 2 13.5V6.5ZM3 13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15H15.5C15.8978 15 16.2794 14.842 16.5607 14.5607C16.842 14.2794 17 13.8978 17 13.5V9H3V13.5ZM17 6.5C17 6.10218 16.842 5.72064 16.5607 5.43934C16.2794 5.15804 15.8978 5 15.5 5H4.5C4.10218 5 3.72064 5.15804 3.43934 5.43934C3.15804 5.72064 3 6.10218 3 6.5V8H17V6.5Z"
              fill="#333333"
            />
          </svg>

          <span
            className={`ml-2 ${
              props.value === 2 ? "font-bold" : "font-normal"
            } text-base`}
          >
            My Cards
          </span>
        </div>

        <div className="flex p-2 rounded-2xl items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 8.99999C11.5002 9.31031 11.4041 9.61305 11.225 9.86648C11.0459 10.1199 10.7926 10.3115 10.5 10.415V12.5C10.5 12.6326 10.4473 12.7598 10.3536 12.8535C10.2598 12.9473 10.1326 13 10 13C9.86739 13 9.74021 12.9473 9.64645 12.8535C9.55268 12.7598 9.5 12.6326 9.5 12.5V10.415C9.24076 10.3233 9.0117 10.1622 8.83786 9.94915C8.66401 9.73612 8.55206 9.4794 8.51425 9.20704C8.47644 8.93469 8.51422 8.65719 8.62345 8.40485C8.73269 8.15252 8.90919 7.93506 9.13365 7.77625C9.35812 7.61744 9.62192 7.52339 9.89623 7.50437C10.1705 7.48534 10.4448 7.54208 10.689 7.66839C10.9333 7.7947 11.1381 7.98571 11.2811 8.22055C11.4241 8.45539 11.4999 8.72502 11.5 8.99999ZM10.277 2.08399C10.1949 2.02938 10.0986 2.00024 10 2.00024C9.90143 2.00024 9.80506 2.02938 9.723 2.08399C7.83513 3.35668 5.68312 4.18446 3.429 4.50499C3.3099 4.52207 3.20096 4.58153 3.12216 4.67245C3.04336 4.76338 2.99998 4.87967 3 4.99999V9.49999C3 13.391 5.307 16.23 9.82 17.967C9.93584 18.0117 10.0642 18.0117 10.18 17.967C14.693 16.23 17 13.39 17 9.49999V4.99999C17 4.87952 16.9565 4.76311 16.8775 4.67216C16.7985 4.58122 16.6893 4.52185 16.57 4.50499C14.3162 4.18431 12.1646 3.35654 10.277 2.08399ZM4 5.42799C5.98102 5.09246 7.88094 4.3861 9.6 3.34599L10 3.09699L10.4 3.34599C12.1191 4.3861 14.019 5.09246 16 5.42799V9.49999C16 12.892 14.032 15.363 10 16.963C5.968 15.363 4 12.892 4 9.49999V5.42799Z"
              fill="#333333"
            />
          </svg>

          <span className={`ml-2 font-normal text-base`}>Security</span>
        </div>

        <div className="flex items-center p-2 rounded-2xl">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25001 7.30696C9.09001 7.49096 9.00001 7.74496 9.00001 7.99996C9.00001 8.13257 8.94733 8.25974 8.85356 8.35351C8.75979 8.44728 8.63262 8.49996 8.50001 8.49996C8.3674 8.49996 8.24022 8.44728 8.14645 8.35351C8.05269 8.25974 8.00001 8.13257 8.00001 7.99996C8.00001 7.52696 8.16101 7.02996 8.50001 6.64596C8.84701 6.25196 9.36001 5.99996 10 5.99996C10.64 5.99996 11.153 6.25196 11.5 6.64596C11.839 7.03096 12 7.52596 12 7.99996C12 8.48996 11.884 8.86996 11.698 9.18996C11.535 9.46896 11.322 9.68996 11.153 9.86696L11.111 9.90996C10.925 10.105 10.782 10.264 10.677 10.464C10.577 10.655 10.5 10.908 10.5 11.293C10.5 11.4256 10.4473 11.5527 10.3536 11.6465C10.2598 11.7403 10.1326 11.793 10 11.793C9.8674 11.793 9.74022 11.7403 9.64645 11.6465C9.55269 11.5527 9.50001 11.4256 9.50001 11.293C9.50001 10.761 9.61001 10.346 9.79101 9.99996C9.96801 9.66296 10.201 9.41596 10.389 9.21896L10.411 9.19596C10.599 8.99896 10.733 8.85896 10.834 8.68596C10.929 8.52296 11 8.31696 11 7.99996C11 7.74496 10.911 7.48996 10.75 7.30696C10.597 7.13396 10.36 6.99996 10 6.99996C9.64001 6.99996 9.40301 7.13396 9.25001 7.30696ZM10 14.212C10.0941 14.2155 10.1879 14.2001 10.2759 14.1665C10.3639 14.133 10.4442 14.082 10.512 14.0167C10.5798 13.9514 10.6338 13.8731 10.6706 13.7864C10.7075 13.6998 10.7265 13.6066 10.7265 13.5125C10.7265 13.4183 10.7075 13.3251 10.6706 13.2385C10.6338 13.1518 10.5798 13.0735 10.512 13.0082C10.4442 12.9429 10.3639 12.892 10.2759 12.8584C10.1879 12.8249 10.0941 12.8094 10 12.813C9.81436 12.813 9.63631 12.8867 9.50503 13.018C9.37376 13.1493 9.30001 13.3273 9.30001 13.513C9.30001 13.6986 9.37376 13.8767 9.50503 14.0079C9.63631 14.1392 9.81436 14.213 10 14.213V14.212ZM2.00001 9.99996C2.00045 8.25178 2.5735 6.55187 3.63153 5.16021C4.68956 3.76856 6.17431 2.76178 7.8587 2.29386C9.54309 1.82593 11.3344 1.92263 12.9586 2.56915C14.5829 3.21567 15.9506 4.37643 16.8527 5.87389C17.7548 7.37135 18.1415 9.12307 17.9537 10.8611C17.766 12.5992 17.0141 14.2279 15.813 15.4982C14.612 16.7685 13.0279 17.6104 11.3031 17.8951C9.57824 18.1799 7.80762 17.8918 6.26201 17.075L2.62201 17.985C2.53823 18.006 2.45043 18.005 2.36716 17.982C2.28389 17.9591 2.20799 17.9149 2.14686 17.8539C2.08573 17.7929 2.04146 17.717 2.01835 17.6338C1.99524 17.5506 1.99409 17.4628 2.01501 17.379L2.92501 13.738C2.3157 12.5863 1.9981 11.3028 2.00001 9.99996ZM10 2.99996C8.77839 2.99958 7.57794 3.31892 6.51796 3.92622C5.45799 4.53353 4.57541 5.40766 3.95792 6.46173C3.34044 7.51581 3.00957 8.71313 2.99818 9.9347C2.98679 11.1563 3.29529 12.3596 3.89301 13.425C3.95578 13.5361 3.97367 13.667 3.94301 13.791L3.18701 16.813L6.20901 16.057C6.33292 16.0263 6.46386 16.0442 6.57501 16.107C7.50827 16.6298 8.54894 16.9317 9.61709 16.9897C10.6852 17.0476 11.7525 16.86 12.7368 16.4412C13.7211 16.0223 14.5964 15.3835 15.2953 14.5737C15.9943 13.7639 16.4983 12.8047 16.7688 11.7697C17.0392 10.7347 17.0689 9.65154 16.8555 8.60333C16.642 7.55511 16.1912 6.56975 15.5376 5.72293C14.884 4.8761 14.045 4.19034 13.085 3.71831C12.1251 3.24628 11.0697 3.00054 10 2.99996Z"
              fill="#333333"
            />
          </svg>

          <span className={`ml-2 font-normal text-base`}>Help</span>
        </div>
      </div>
      <hr className="text-[#DADADA] w-full my-3" />
      <div className="grid gap-5 grid-cols-1 grid-row-2 ">
        <div className="flex items-center p-2 rounded-2xl">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 14.5C17 15.163 16.7366 15.7989 16.2678 16.2678C15.7989 16.7366 15.163 17 14.5 17H5.5C4.83696 17 4.20107 16.7366 3.73223 16.2678C3.26339 15.7989 3 15.163 3 14.5V5.5C3 4.83696 3.26339 4.20107 3.73223 3.73223C4.20107 3.26339 4.83696 3 5.5 3H14.5C15.163 3 15.7989 3.26339 16.2678 3.73223C16.7366 4.20107 17 4.83696 17 5.5V14.5ZM16 14.5V5.5C16 5.10218 15.842 4.72064 15.5607 4.43934C15.2794 4.15804 14.8978 4 14.5 4H5.5C5.10218 4 4.72064 4.15804 4.43934 4.43934C4.15804 4.72064 4 5.10218 4 5.5V14.5C4 14.8978 4.15804 15.2794 4.43934 15.5607C4.72064 15.842 5.10218 16 5.5 16H14.5C14.8978 16 15.2794 15.842 15.5607 15.5607C15.842 15.2794 16 14.8978 16 14.5ZM14 6.5C14 6.61703 13.959 6.73036 13.8841 6.82026C13.8092 6.91016 13.7051 6.97094 13.59 6.992L13.5 7H6.5C6.37505 7.00023 6.25455 6.95367 6.16222 6.86949C6.06988 6.78531 6.01241 6.66961 6.00112 6.54518C5.98984 6.42074 6.02554 6.29659 6.10122 6.19717C6.1769 6.09775 6.28705 6.03026 6.41 6.008L6.5 6H13.5C13.6326 6 13.7598 6.05268 13.8536 6.14645C13.9473 6.24021 14 6.36739 14 6.5ZM14 10C14 10.117 13.959 10.2304 13.8841 10.3203C13.8092 10.4102 13.7051 10.4709 13.59 10.492L13.5 10.5H6.5C6.37505 10.5002 6.25455 10.4537 6.16222 10.3695C6.06988 10.2853 6.01241 10.1696 6.00112 10.0452C5.98984 9.92074 6.02554 9.79659 6.10122 9.69717C6.1769 9.59775 6.28705 9.53026 6.41 9.508L6.5 9.5H13.5C13.6326 9.5 13.7598 9.55268 13.8536 9.64645C13.9473 9.74021 14 9.86739 14 10ZM14 13.5C14 13.617 13.959 13.7304 13.8841 13.8203C13.8092 13.9102 13.7051 13.9709 13.59 13.992L13.5 14H6.5C6.37505 14.0002 6.25455 13.9537 6.16222 13.8695C6.06988 13.7853 6.01241 13.6696 6.00112 13.5452C5.98984 13.4207 6.02554 13.2966 6.10122 13.1972C6.1769 13.0977 6.28705 13.0303 6.41 13.008L6.5 13H13.5C13.6326 13 13.7598 13.0527 13.8536 13.1464C13.9473 13.2402 14 13.3674 14 13.5Z"
              fill="#333333"
            />
          </svg>

          <span className="ml-2 font-normal text-base">Legals</span>
        </div>
        <div className="flex items-center p-2 rounded-2xl">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.492 8.91C10.4697 8.78705 10.4023 8.6769 10.3028 8.60122C10.2034 8.52554 10.0793 8.48983 9.95482 8.50112C9.83039 8.51241 9.71469 8.56988 9.63051 8.66222C9.54633 8.75455 9.49977 8.87505 9.5 9V13.502L9.508 13.592C9.53026 13.7149 9.59775 13.8251 9.69717 13.9008C9.79659 13.9765 9.92074 14.0122 10.0452 14.0009C10.1696 13.9896 10.2853 13.9321 10.3695 13.8398C10.4537 13.7475 10.5002 13.6269 10.5 13.502V9L10.492 8.91ZM10.799 6.75C10.799 6.55109 10.72 6.36032 10.5793 6.21967C10.4387 6.07902 10.2479 6 10.049 6C9.85009 6 9.65932 6.07902 9.51867 6.21967C9.37802 6.36032 9.299 6.55109 9.299 6.75C9.299 6.94891 9.37802 7.13968 9.51867 7.28033C9.65932 7.42098 9.85009 7.5 10.049 7.5C10.2479 7.5 10.4387 7.42098 10.5793 7.28033C10.72 7.13968 10.799 6.94891 10.799 6.75ZM18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10ZM3 10C3 9.08075 3.18106 8.1705 3.53284 7.32122C3.88463 6.47194 4.40024 5.70026 5.05025 5.05025C5.70026 4.40024 6.47194 3.88463 7.32122 3.53284C8.1705 3.18106 9.08075 3 10 3C10.9193 3 11.8295 3.18106 12.6788 3.53284C13.5281 3.88463 14.2997 4.40024 14.9497 5.05025C15.5998 5.70026 16.1154 6.47194 16.4672 7.32122C16.8189 8.1705 17 9.08075 17 10C17 11.8565 16.2625 13.637 14.9497 14.9497C13.637 16.2625 11.8565 17 10 17C8.14348 17 6.36301 16.2625 5.05025 14.9497C3.7375 13.637 3 11.8565 3 10Z"
              fill="#333333"
            />
          </svg>

          <span className="ml-2 font-normal text-base">About Vep</span>
        </div>
      </div>
    </div>
  );
}
