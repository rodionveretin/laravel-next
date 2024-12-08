import type { Metadata } from 'next';
import '../../public/assets/sass/globals.scss';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

export const metadata: Metadata = {
	title: 'Проект "Наставник"',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>
				<div className="wrapper">
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
