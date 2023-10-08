import { type Prisma } from "@prisma/client";
import { type GetServerSideProps, type InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { db } from "~/server/db"

export default function QuizPage ({
	quizzes
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<div className='bg-neutral-900 w-full min-h-screen p-6 pt-24'>
				<div className='flex flex-col w-full max-w-lg gap-4 text-center mx-auto'>
					{
						quizzes.map((quiz) => (
							<Link key={quiz.id} href={`/quiz/start?code=${quiz.slug}`}>
								<div className='card-lg bg-quiz bg-cover-center' style={{
									backgroundImage: `linear-gradient(to top, rgba(10, 10, 10, 0.8) 50%, rgba(10, 10, 10, 0.5)), url(/assets/img/quiz-${quiz.cover ?? 'ocean'}.jpg)`
								}}>
									<h2 className="text-white font-bold text-4xl">{quiz.title}</h2>
								</div>
							</Link>
						))
					}
				</div>
			</div>
		</>
	)
}

interface QuizPageProps {
	quizzes: Prisma.QuizGetPayload<Record<string, never>>[];
}

export const getServerSideProps: GetServerSideProps<QuizPageProps> = async () => {
	const quizzes = await db.quiz.findMany();

	return {
		props: {
			quizzes
		}
	}
}