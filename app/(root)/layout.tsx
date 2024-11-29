import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = { firstName: "Priyansh", lastName: "Yadav" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={LoggedIn} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image
            src="/icons.logo.svg"
            width={30}
            height={30}
            alt="menu icons"
          />
          <div className="">
            <MobileNav user={LoggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
