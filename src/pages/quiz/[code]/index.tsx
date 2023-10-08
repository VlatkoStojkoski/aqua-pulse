import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TIMER_PER_QUESTION = 30000;

interface Question {
	question: string;
	answers: {
		content: string;
		isCorrect: boolean;
	}[];
}

const questions: Question[] = [
	{
		question: 'How much of the Earth’s surface is covered by ocean?',
		answers: [
			{
				content: '51%',
				isCorrect: false
			}, {
				content: '68%',
				isCorrect: false
			}, {
				content: '75%',
				isCorrect: false
			}, {
				content: '71%',
				isCorrect: true
			}
		]
	},
	{
		question: 'The only current that makes an uninterrupted circle around the entire Earth without hitting land is the:',
		answers: [
			{
				content: 'Gulf Stream',
				isCorrect: false
			}, {
				content: 'Antarctic Circumpolar Current',
				isCorrect: true
			}, {
				content: 'Japan Current',
				isCorrect: false
			}, {
				content: 'California Current',
				isCorrect: false
			}
		]
	},
]

export default function SolveQuizPage () {
	const router = useRouter();
	const [leftTime, setLeftTime] = useState(0);
	const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
	const [questionIdx, setQuestionIdx] = useState<number>(0);
	const [question, setQuestion] = useState<Question | null>(null);

	const resetState = () => {
		setLeftTime(0);
		setTimerInterval(null);
		setSelectedAnswer(null);
		setQuestionIdx(0);
		setQuestion(null);
		setNewQuestion();
		newTimer(TIMER_PER_QUESTION);
	}

	const setNewQuestion = () => {
		const queryQuestionIdx = router.query.q;
		
		if(!queryQuestionIdx || Array.isArray(queryQuestionIdx))
			return;

		const currQuestion = questions[+queryQuestionIdx];
		setQuestionIdx(+queryQuestionIdx);

		if(!currQuestion)
			return;
		
		setQuestion(currQuestion);
	}

	useEffect(() => {
		setNewQuestion();
	}, [router]);

	const newTimer = (ms: number, callback?: () => void) => {
		if(timerInterval) clearInterval(timerInterval);
		setLeftTime(ms);

		const interval = setInterval(() => {
			setLeftTime(_leftTime => {
				if(_leftTime <= 1000) {
					if(callback) callback();
					clearInterval(interval);
				}
				return _leftTime - 1000;
			});
		}, 1000);
		
		setTimerInterval(interval);

		return interval;
	}

	useEffect(() => {
		const questionTimer = newTimer(TIMER_PER_QUESTION);

		return () => {
			clearInterval(questionTimer);
		};
	}, []);

	return (
		<div className="flex flex-col px-6 gap-12 justify-center items-center w-full min-h-screen bg-neutral-900">
			<div className="flex justify-center">
				<div className="relative z-30">
					<svg
						width="56"
						height="56"
						viewBox="0 0 59 64"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M56 15.2105L49.7647 9.10526M21.7059 3H34.1765M27.9412 61C14.1665 61 3 50.0664 3 36.5789C3 23.0916 14.1665 12.1579 27.9412 12.1579C41.7159 12.1579 52.8824 23.0916 52.8824 36.5789C52.8824 50.0664 41.7159 61 27.9412 61Z"
							stroke="#0071BC"
							strokeWidth="5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<div
						className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white"
						id="counter"
					>
						{leftTime/1000}
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center">
				<h3 className="text-2xl text-white text-center font-extrabold mb-6 max-w-[25ch]">
					{question?.question}
				</h3>

				<Image src='/assets/img/world-map.png' alt='World Map' width='314' height='197' />
			</div>

			<div className="grid grid-cols-2 gap-3 w-full max-w-xs">
				{
					question?.answers.map((answer, answerIdx) => (
						<button
							key={answerIdx}
							className={`p-3 rounded-md ${
								(() => {
									const colors = {
										correct: 'bg-green-500 hover:bg-green-600',
										incorrect: 'bg-red-500 hover:bg-red-600',
										default: 'bg-neutral-200 hover:bg-neutral-400'
									}

									if(selectedAnswer === null)
										return colors.default;

									if(selectedAnswer === answerIdx && !answer.isCorrect)
										return colors.incorrect;

									if(answer.isCorrect)
										return colors.correct;

									return colors.default;
								})()} transition-colors text-xl font-extrabold`
							}
							onClick={() => {
								setSelectedAnswer(answerIdx);
								if(timerInterval)
									clearInterval(timerInterval);
							}}
							disabled={selectedAnswer !== null}
						>
							{answer.content}
						</button>
					))
				}
			</div>
			
			{
				selectedAnswer !== null ?
					<button className="transition-all bg-primary hover:bg-primary-dark text-white rounded-lg px-4 py-2" onClick={() => {
						resetState();

						if(questionIdx+1 >= questions.length) {
							router.push('/quiz/finish')
								.catch(console.error);
						}

						router.push({ query: { ...router.query, q: `${questionIdx+1}` } }, undefined, { shallow: true })
							.catch(console.error);
					}}>
						Next Question →
					</button> :
					<></>
			}
		</div>
	)
}