import './globals.css';
import type { Metadata } from 'next';
import Container from '@/components/Container';
import HamburgerNavbar from '@/components/DesignSystem/navbar/HamburgerNavbar';

export const metadata: Metadata = {
  title: 'Code challenge',
  description: 'Some starter code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <head>
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body>
          <div className="flex flex-col gap-y-10">
            <HamburgerNavbar
              SiteName = 'Logo text'
            />
            <Container>
                {children}
            </Container>
          </div>
        </body>
    </html>
  )
}
