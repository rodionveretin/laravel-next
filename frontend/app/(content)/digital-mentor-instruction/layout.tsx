import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Как задать вопрос Цифровому наставнику?',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
