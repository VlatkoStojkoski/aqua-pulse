import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isMenuDropped, setIsMenuDropped] = useState(false);

	return (
		<>
			<nav className="fixed bg-neutral-900 flex w-full h-16 items-center px-12 z-30">
				<div className="container mx-auto flex justify-between">
					<Link href="/">
						<svg
							width="42"
							height="42"
							viewBox="0 0 146 196"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M38.401 94.8542L24.6719 118.052H0.335327C4.19382 85.1909 48.8312 27.6811 72.9271 0.78125C97.0179 27.6811 141.655 85.1909 145.514 118.052L110.344 118.042C107.38 118.042 104.714 119.875 103.63 122.641L99.0885 134.161L84.9583 51.7188C84.3698 48.2656 81.3802 45.8333 77.8698 45.8333H77.8385C74.3385 45.8333 71.349 48.224 70.7292 51.6667L57.4896 125.104L51.6823 97.0573C51.0833 94.1406 48.7448 91.8906 45.8021 91.4011C42.8281 90.8958 39.9167 92.2917 38.401 94.8542Z"
								fill="#0071BC"
							/>
							<path
								d="M65.7864 195.021C68.1614 195.255 70.5364 195.375 72.927 195.38C75.3125 195.375 77.6875 195.255 80.0625 195.021C82.4375 194.781 84.7916 194.432 87.1354 193.964C89.4739 193.495 91.7812 192.917 94.0677 192.219C96.3489 191.526 98.5885 190.719 100.797 189.802C103 188.885 105.151 187.865 107.255 186.74C109.359 185.615 111.401 184.385 113.385 183.057C115.37 181.729 117.281 180.307 119.125 178.792C120.969 177.276 122.734 175.672 124.422 173.984C126.109 172.292 127.708 170.526 129.224 168.677C130.734 166.833 132.156 164.917 133.479 162.927C134.807 160.943 136.031 158.896 137.156 156.786C138.281 154.682 139.302 152.526 140.219 150.318C141.13 148.109 141.932 145.865 142.63 143.578C143.323 141.292 143.901 138.979 144.37 136.635C144.644 135.263 144.878 133.885 145.071 132.5L115.25 132.495L103.026 163.385C101.844 166.396 98.8333 168.219 95.5625 167.911C92.3541 167.568 89.7448 165.135 89.1927 161.943L77.6666 94.5886L65.0989 163.536C64.4844 166.948 61.5416 168.599 58.0833 168.599C58.0521 168.615 58.026 168.615 57.9948 168.615C54.5729 168.615 51.6094 167.089 50.9166 163.74L41.3281 117.839L35.0156 128.734C33.7187 130.943 31.3489 132.5 28.7968 132.5L0.776978 132.495C0.970527 133.881 1.20422 135.261 1.47912 136.635C1.94787 138.979 2.526 141.292 3.2187 143.578C3.91662 145.865 4.7187 148.109 5.63016 150.318C6.54683 152.526 7.56766 154.682 8.69266 156.786C9.81766 158.896 11.0416 160.943 12.3697 162.927C13.6927 164.917 15.1145 166.833 16.625 168.677C18.1406 170.526 19.7395 172.292 21.427 173.984C23.1145 175.672 24.8802 177.276 26.7239 178.792C28.5677 180.307 30.4791 181.729 32.4635 183.057C34.4479 184.385 36.4895 185.615 38.5937 186.74C40.6979 187.865 42.8489 188.885 45.052 189.802C47.2604 190.719 49.5 191.526 51.7812 192.219C54.0677 192.917 56.375 193.495 58.7135 193.964C61.0573 194.432 63.4114 194.781 65.7864 195.021Z"
								fill="#0071BC"
							/>
						</svg>
					</Link>
					<div className="py-2 cursor-pointer" onClick={() => setIsMenuDropped(!isMenuDropped)}>
						<svg
							width="30px"
							height="30px"
							viewBox="0 -2 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="wave" transform="translate(-2 -4)">
								<path
									id="primary"
									d="M21,11c-2.25,0-2.25,2-4.5,2s-2.25-2-4.5-2-2.25,2-4.5,2S5.25,11,3,11"
									fill="none"
									stroke="#0071BC"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								/>
								<path
									id="primary-2"
									data-name="primary"
									d="M3,5C5.25,5,5.25,7,7.5,7S9.75,5,12,5s2.26,2,4.51,2S18.75,5,21,5"
									fill="none"
									stroke="#0071BC"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								/>
								<path
									id="primary-3"
									data-name="primary"
									d="M21,17c-2.25,0-2.25,2-4.5,2s-2.25-2-4.5-2-2.25,2-4.5,2S5.25,17,3,17"
									fill="none"
									stroke="#0071BC"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								/>
							</g>
						</svg>
					</div>
				</div>
			</nav>

			<div className={`fixed top-16 left-0 z-30 w-full h-screen bg-neutral-900 bg-opacity-50 transition-all ${isMenuDropped ? 'translate-y-0' : '-translate-y-[calc(100%+4rem)]'}`}>
				<div className='absolute top-4 right-4 bg-neutral-900 w-fit px-6 py-6 rounded-xl flex flex-col gap-5 items-center justify-center'>
					<ul className="flex flex-col text-white font-extrabold text-2xl gap-5 text-center">
						<li>
							<Link href='/map' onClick={() => setIsMenuDropped(false)}>
								Map
							</Link>
						</li>
						<li>
							<Link href='/quiz' onClick={() => setIsMenuDropped(false)}>
								Quiz
							</Link>
						</li>
						<li>
							<Link href='/profile' onClick={() => setIsMenuDropped(false)}>
								Profile
							</Link>
						</li>
					</ul>

					<Link href='/get-started' className="px-5 py-2 rounded-md bg-primary text-white text-2xl font-black items-center justify-center cursor-pointer">
						Get Started
					</Link>
				</div>
			</div>
		</>
	);
}