import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter, Koulen } from 'next/font/google';

import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const koulen = Koulen({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-koulen',
});
const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
			<Navbar />
			<div className={`${inter.variable} ${koulen.variable} font-body`}>
				<Component {...pageProps} />
			</div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
