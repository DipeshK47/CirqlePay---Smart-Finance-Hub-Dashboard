import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import MobileNav from '@/components/MobileNav'; // Corrected the import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = { firstName: 'Dipesh', lastName: 'Kuar' };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex w-full flex-col"> {/* Fixed the typo from fkex-col to flex-col */}
        <div className="root-layout flex justify-between items-center p-4 bg-white shadow-md">
          <Image src="/icons/logo.png" width={30} height={30} alt="menu-icon" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}