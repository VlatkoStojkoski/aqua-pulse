import Image from "next/image";

export default function ProfilePage() {
	return (

    <div
      className="flex flex-col justify-center items-center pt-24 gap-12 h-screen bg-neutral-900"
    >
      <Image src="/assets/img/profile-icon.png" alt="Profile picture" width={128} height={128} />
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex flex-row gap-2">
            <h3 className="text-xl">Macedonia</h3>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.59372 12.6316H7.28346L0.0723267 13.3071C0.214042 14.6141 0.566685 15.8576 1.09377 17.0045L7.61902 13.8315L9.59372 12.6316Z"
                fill="#DB2727"
              />
              <path
                d="M11.3274 13.156L8.31917 14.9837L2.4917 19.3168C4.22725 21.569 6.74327 23.1884 9.63691 23.766L11.3274 14.4049V13.156H11.3274Z"
                fill="#DB2727"
              />
              <path
                d="M11.3274 10.7587V9.50966L9.65188 0.231567C6.77567 0.80223 4.2716 2.40158 2.53448 4.62941L8.31929 8.93104L11.3274 10.7587Z"
                fill="#DB2727"
              />
              <path
                d="M9.59333 11.2831L7.61904 10.0838L1.1256 6.92639C0.592435 8.06721 0.233763 9.30597 0.0831299 10.6086L7.28347 11.2833H9.59333V11.2831Z"
                fill="#DB2727"
              />
              <path
                d="M9.59372 12.6316L10.7031 11.9573L9.59331 11.2829H7.28345L0.0831146 10.6084C0.0302689 11.0654 0.00012207 11.5291 0.00012207 12.0003C0.00012207 12.4421 0.0257089 12.8777 0.0723226 13.3069L7.28345 12.6316H9.59372Z"
                fill="#FDE73D"
              />
              <path
                d="M11.3274 13.156V12.6316H9.5937L7.619 13.8313L1.09375 17.0043C1.47345 17.8298 1.94298 18.6047 2.49186 19.3168L8.31927 14.9838L11.3274 13.156Z"
                fill="#FDE73D"
              />
              <path
                d="M11.3273 12.6316V13.156L12.0017 12.7464L11.8129 12.6316H11.3273Z"
                fill="#FDE500"
              />
              <path
                d="M12.6758 11.2832V10.7587L12.0017 11.1683L12.1904 11.2832H12.6758Z"
                fill="#FDE500"
              />
              <path
                d="M13.3002 11.9573L14.4105 11.2832H12.6758V11.5782L13.3002 11.9573Z"
                fill="#FDE500"
              />
              <path
                d="M10.703 11.9573L9.59369 12.6316H11.3274V12.3366L10.703 11.9573Z"
                fill="#FDE500"
              />
              <path
                d="M12.6758 11.5782V11.2832H12.1904L12.6758 11.5782Z"
                fill="#FDE500"
              />
              <path
                d="M11.3273 12.3367V12.6317H11.8129L11.3273 12.3367Z"
                fill="#FDE500"
              />
              <path
                d="M9.5933 11.2832H11.3274V10.7587L8.31913 8.93102L2.53433 4.62939C1.98297 5.33615 1.50888 6.10558 1.12543 6.92638L7.61881 10.0838L9.5933 11.2832Z"
                fill="#FDE73D"
              />
              <path
                d="M12.0016 12.7464L12.6758 13.156V12.6316H12.1907L12.0016 12.7464Z"
                fill="#FDE500"
              />
              <path
                d="M12.0017 11.1683L11.3273 10.7587V11.2832H11.8129L12.0017 11.1683Z"
                fill="#FDE500"
              />
              <path
                d="M12.6758 12.3366V12.6316H14.4097L13.3001 11.9573L12.6758 12.3366Z"
                fill="#FDE500"
              />
              <path
                d="M11.3273 11.2832H9.59326L10.703 11.9573L11.3273 11.5782V11.2832Z"
                fill="#FDE500"
              />
              <path
                d="M12.1907 12.6317H12.6758V12.3367L12.1907 12.6317Z"
                fill="#FDE500"
              />
              <path
                d="M11.8129 11.2832H11.3273V11.5782L11.8129 11.2832Z"
                fill="#FDE500"
              />
              <path
                d="M11.8129 12.6316L12.0017 12.7464L12.1908 12.6316H11.8129Z"
                fill="#FDE500"
              />
              <path
                d="M12.1904 11.2832L12.0017 11.1683L11.8129 11.2832H12.1904Z"
                fill="#FDE500"
              />
              <path
                d="M12.6758 12.3366L13.3001 11.9573L12.6758 11.5781V12.3366Z"
                fill="#FDE500"
              />
              <path
                d="M11.3273 11.5781L10.703 11.9573L11.3273 12.3366V11.5781Z"
                fill="#FDE500"
              />
              <path
                d="M12.1904 11.2832H11.8129L11.3273 11.5782V12.3367L11.8129 12.6317H12.1907L12.6758 12.3367V11.5782L12.1904 11.2832Z"
                fill="#FDE500"
              />
              <path
                d="M16.8336 11.263L23.9171 10.6087C23.7669 9.30647 23.4085 8.06827 22.8754 6.92725L16.7389 9.92075C16.7707 10.3927 16.8228 10.7849 16.8336 11.263Z"
                fill="#CD2027"
              />
              <path
                d="M16.5179 8.31029L21.4671 4.6307C19.7304 2.40343 17.2273 0.80352 14.3515 0.2323L14.1809 1.23667C15.4887 2.64278 16.1367 5.28684 16.5179 8.31029Z"
                fill="#CD2027"
              />
              <path
                d="M16.8022 14.026L22.9072 17.0027C23.4337 15.8563 23.7865 14.6137 23.9279 13.3065L16.8339 12.6522C16.824 13.1312 16.8329 13.553 16.8022 14.026Z"
                fill="#CD2027"
              />
              <path
                d="M14.2147 22.9233L14.3669 23.7655C17.2594 23.1867 19.7746 21.5672 21.5098 19.3152L16.4861 15.5735C16.1112 18.6193 15.5264 21.5017 14.2147 22.9233Z"
                fill="#CD2027"
              />
              <path
                d="M11.9998 24C12.8102 24 13.6015 23.9185 14.3667 23.7658L14.1651 22.6316C13.5349 23.3146 12.8466 24 11.9998 24Z"
                fill="#FDE500"
              />
              <path
                d="M14.181 1.23648L14.3516 0.232106C13.591 0.0807125 12.8051 0 11.9998 0C12.8407 0.000202668 13.5533 0.562353 14.181 1.23648Z"
                fill="#FDE500"
              />
              <path
                d="M23.9171 10.6088L16.8337 11.263C16.8445 11.727 16.7801 12.1723 16.7704 12.6367L23.9277 13.3065C23.9743 12.8771 23.9999 12.4419 23.9999 12.0001C23.9999 11.5296 23.97 11.0658 23.9171 10.6088Z"
                fill="#FDE500"
              />
              <path
                d="M16.7389 9.92083L22.8754 6.92732C22.4921 6.10692 22.0184 5.33744 21.4672 4.63074L16.5968 8.26295C16.666 8.81452 16.7001 9.35072 16.7389 9.92083Z"
                fill="#FDE500"
              />
              <path
                d="M16.5809 15.6524L21.5098 19.3153C22.0583 18.6033 22.5279 17.8283 22.9072 17.0027L16.8022 14.026C16.7648 14.5974 16.6489 15.0995 16.5809 15.6524Z"
                fill="#FDE500"
              />
              <path
                d="M16.3844 10.0837L14.4105 11.2831H16.7203L16.9609 11.2605C16.9501 10.7825 16.9291 10.3062 16.8973 9.83435L16.3844 10.0837Z"
                fill="#DB2727"
              />
              <path
                d="M16.7355 8.14943C16.3543 5.12602 15.5094 2.46864 14.2017 1.06238L12.6758 9.50983V10.7588L15.6841 8.93096L16.7355 8.14943Z"
                fill="#DB2727"
              />
              <path
                d="M14.4097 12.6316L16.3844 13.8313L16.9024 14.0829C16.9331 13.61 16.9536 13.1329 16.9631 12.6541L16.7204 12.6316H14.4097Z"
                fill="#DB2727"
              />
              <path
                d="M12.6758 13.156V14.405L14.2145 22.9235C15.5265 21.5017 16.3694 18.818 16.7448 15.7724L15.6841 14.9836L12.6758 13.156Z"
                fill="#DB2727"
              />
              <path
                d="M14.2147 22.9234L12.676 14.4049V13.1559L12.0017 12.7462L11.3273 13.1559V14.4049L9.63684 23.766C10.401 23.9189 11.1907 23.9998 11.9997 23.9998C12.8465 24 13.584 23.6066 14.2147 22.9234Z"
                fill="#FDE73D"
              />
              <path
                d="M11.3274 9.5098V10.7588L12.0017 11.1684L12.676 10.7588V9.5098L14.2018 1.06235C13.5741 0.38802 12.8407 0.000366211 12 0.000366211C11.1962 0.000366211 10.4116 0.0810787 9.65179 0.231712L11.3274 9.5098Z"
                fill="#FDE73D"
              />
              <path
                d="M14.4104 11.2831L13.3003 11.9575L14.4096 12.6318H16.7203L16.963 12.6543C16.9726 12.1903 16.9715 11.7248 16.9607 11.2607L16.7201 11.2833H14.4104V11.2831Z"
                fill="#FDE73D"
              />
              <path
                d="M16.8973 9.83415C16.8588 9.26384 16.8048 8.70073 16.7354 8.14917L15.684 8.93091L12.6758 10.7586V11.283H14.4102L16.3842 10.0836L16.8973 9.83415Z"
                fill="#FDE73D"
              />
              <path
                d="M14.4097 12.6316H12.676V13.156L15.6841 14.9837L16.7447 15.7723C16.8128 15.219 16.8651 14.6544 16.9024 14.0829L16.3843 13.8313L14.4097 12.6316Z"
                fill="#FDE73D"
              />
              <path
                d="M12.0005 16.3275C14.3899 16.3275 16.3269 14.3905 16.3269 12.001C16.3269 9.61158 14.3899 7.67456 12.0005 7.67456C9.61103 7.67456 7.67401 9.61158 7.67401 12.001C7.67401 14.3905 9.61103 16.3275 12.0005 16.3275Z"
                fill="#DB2727"
              />
              <path
                d="M12.0005 15.4747C13.919 15.4747 15.4742 13.9194 15.4742 12.001C15.4742 10.0825 13.919 8.52722 12.0005 8.52722C10.082 8.52722 8.52673 10.0825 8.52673 12.001C8.52673 13.9194 10.082 15.4747 12.0005 15.4747Z"
                fill="#FDE500"
              />
            </svg>
          </div>
          <p className="font-light px-10 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ipsa dignissimos velit nisi minus ullam nam nostrum.
          </p>
        </div>
      </div>
      <div className="px-3 py-3 w-full bg-primary rounded flex-grow">
        <div className="px-3 py-2 bg-neutral-200 rounded-md flex-grow flex mt-5">
          <div className="text-center w-1/2 text-neutral-900">
            <h2 className="font-semibold text-xl">Level</h2>
            <h3 className="font-medium text-lg">10</h3>
          </div>

          <div>
            <svg
              width="3"
              height="60"
              viewBox="0 0 3 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="3" height="84" rx="1.5" fill="#121212" />
            </svg>
          </div>

          <div className="text-center w-1/2 text-neutral-900">
            <h2 className="font-semibold text-xl">Games</h2>
            <h3 className="font-medium text-lg">101</h3>
          </div>
        </div>

        <div className="text-white font-extrabold text-2xl">
          <h1 className="mt-6">Statistics</h1>
          <div className="flex mt-8 justify-between">
						<div className="relative w-[56%]">
              <h3 className="absolute text-sm font-normal left-1/2 -translate-x-1/2 -top-6 text-center">Wins</h3>
              <div className="w-full h-2 bg-neutral-200 rounded-md"></div>
							<h3 className="absolute text-sm font-normal left-1/2 -translate-x-1/2 top-3 text-center">57%</h3>
            </div>

						<div className="relative w-[6%]">
              <h3 className="absolute text-sm font-normal left-1/2 -translate-x-1/2 -top-6 text-center">Draws</h3>
              <div className="w-full h-2 bg-neutral-700 rounded-md"></div>
							<h3 className="absolute text-sm font-normal left-1/2 -translate-x-1/2 top-3 text-center">7%</h3>
            </div>
        
            <div className="relative w-[35%]">
              <h3 className="absolute text-sm font-normal left-1/2 -translate-x-1/2 -top-6 text-center">Losses</h3>
              <div className="w-full h-2 bg-neutral-900 rounded-md"></div>
							<h3 className="absolute text-sm font-normal left-1/2 -translate-x-1/2 top-3 text-center">36%</h3>
            </div>

          </div>
        </div>
      </div>
    </div>
	)
}