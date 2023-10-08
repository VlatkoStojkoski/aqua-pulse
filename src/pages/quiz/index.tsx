import { type Prisma } from "@prisma/client";
import { type GetServerSideProps, type InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db"

// export default function QuizPage ({
// 	quizzes
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
export default function QuizPage () {
	return (
		<>
			<div className='bg-neutral-900 w-full min-h-screen p-6 pt-24'>
				<div className='flex flex-col items-center w-full max-w-lg gap-4 text-center mx-auto'>
					<Link href={`/quiz/start?code=a1b2c3`} className="relative flex items-center justify-center w-[364px] h-[245px] px-6 rounded-[37px] overflow-hidden">
						<Image src='/assets/img/quiz-oceans.png' width={364} height={245} alt='Oceans Quiz Cover' className="absolute top-0 left-0" />
						<div className="absolute top-0 left-0 bg-[#101010] bg-opacity-50 w-full h-full z-[5]"></div>
						<h2 className="text-white font-black text-4xl z-10">OCEANS QUIZ</h2>
					</Link>
					<Link href={`/quiz/start?code=a1b2c3`} className="relative flex items-center justify-center w-[364px] h-[245px] px-6 rounded-[37px] overflow-hidden">
						<Image src='/assets/img/quiz-turtle.png' width={364} height={245} alt='Oceans Quiz Cover' className="absolute top-0 left-0" />
						<div className="absolute top-0 left-0 bg-[#101010] bg-opacity-50 w-full h-full z-[5]"></div>
						<h2 className="text-white font-black text-4xl z-10">ENDANGERED SPECIES QUIZ</h2>
					</Link>
				</div>
			</div>
		</>
	)
}

// interface QuizPageProps {
// 	quizzes: Prisma.QuizGetPayload<Record<string, never>>[];
// }

// export const getServerSideProps: GetServerSideProps<QuizPageProps> = async () => {
// 	const quizzes = await db.quiz.findMany();

// 	return {
// 		props: {
// 			quizzes
// 		}
// 	}
// }