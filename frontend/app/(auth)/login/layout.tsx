import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Логин',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
