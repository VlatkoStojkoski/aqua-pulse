import { type GetServerSideProps } from "next"

export default function HomePage() {
	return (
		<></>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	await new Promise(resolve => setTimeout(resolve, 50));

	return {
		redirect: {
			permanent: false,
			destination: '/map'
		}
	}
}