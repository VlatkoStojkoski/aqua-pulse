import { set } from "firebase/database";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";
import { realtime } from "~/utils/firebase";

export default function QuizStartPage() {
	const [roomCode, setRoomCode] = useState('a1b2c3');
	
	return (
		<div className="px-8 sm:px-12 bg-neutral-900">
			<div
				className="flex flex-col text-center flex-center gap-7 h-screen mx-auto w-full max-w-sm"
			>
				<Link href='/quiz/a1b2c3?q=0'
					className="py-4 px-3 w-full rounded-md bg-primary text-white text-2xl font-black"
				>
					Solve Quiz
				</Link>
				<h2 className="text-white text-2xl font-extrabold">Or...</h2>
				<input
					type="text"
					placeholder="Room Code"
					value={roomCode}
					onChange={(ev) => setRoomCode(ev.target.value)}
					className="py-3 px-3 w-full rounded-md"
				/>
				<div className="grid grid-cols-2 gap-3 w-full">
					<Link href={`/quiz/${roomCode}?q=0`} className="py-2 px-3 w-full bg-primary text-white font-bold rounded-md">
						Join Room
					</Link>
					<Link href={`/quiz/${roomCode}?q=0`} className="py-2 px-3 w-full font-bold rounded-md bg-neutral-200">
						Create Room
					</Link>
				</div>
			</div>
		</div>
	)
}