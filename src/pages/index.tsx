import { type GetServerSideProps } from "next"

export default function HomePage() {
	return (
		<></>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	await new Promise(res => res);

	return {
		redirect: {
			permanent: false,
			destination: '/map'
		}
	}
}