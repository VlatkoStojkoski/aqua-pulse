import { type GetServerSideProps } from "next"

export default function HomePage() {
	return (
		<></>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		redirect: {
			permanent: false,
			destination: '/map'
		}
	}
}