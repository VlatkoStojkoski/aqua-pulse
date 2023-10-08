import Confetti from 'react-confetti';
import { useWindowSize } from "@uidotdev/usehooks";

import BronzeTrophy from "./bronze-trophy";
import GoldTrophy from "./gold-trophy";
import SilverTrophy from "./silver-trophy";

export default function QuizFinishPage () {
	const { width, height } = useWindowSize();

	return (
		<div className="flex flex-col w-full min-h-screen bg-neutral-900 text-white">
			{
				width && height && (
					<Confetti width={width ?? 1000} height={height ?? 1000} className='fixed top-0 left-0 !-z-0 opacity-50' />
				)
			}
			<div className="flex flex-grow items-center justify-center">
				<h1 className='text-5xl font-extrabold font-heading'>CONGRATULATIONS!</h1>
			</div>
			<div className="h-[55dvh] w-full max-w-lg mx-auto grid grid-cols-3 gap-2 place-items-end">
				<div className="relative w-full h-[80%] bg-primary rounded-t-lg">
					<h2 className="absolute -top-2 left-0 w-full -translate-y-full text-2xl font-bold text-center px-2">John Doe</h2>
					<div className="w-full text-center pt-4 px-2">
						<p className="text-5xl font-black">2</p>
						<p className="text-lg sm:text-xl font-bold">5 out of 10</p>
						<p>500 points</p>
					</div>
					<SilverTrophy className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%]" />
				</div>
				<div className="relative w-full h-full bg-primary rounded-t-lg">
					<h2 className="absolute -top-2 left-0 w-full -translate-y-full text-2xl font-bold text-center">Jane Doe</h2>
					<div className="w-full text-center pt-4 px-2">
						<p className="text-5xl font-black">1</p>
						<p className="text-lg sm:text-xl font-bold">9 out of 10</p>
						<p>900 points</p>
					</div>
					<GoldTrophy className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%]" />
				</div>
				<div className="relative w-full h-[60%] bg-primary rounded-t-lg">
					<h2 className="absolute -top-2 left-0 w-full -translate-y-full text-2xl font-bold text-center">Roger Doe</h2>
					<div className="w-full text-center pt-4 px-2">
						<p className="text-5xl font-black">3</p>
						<p className="text-lg sm:text-xl font-bold">4 out of 10</p>
						<p>400 points</p>
					</div>
					<BronzeTrophy className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%]" />
				</div>
			</div>
		</div>
	)
}