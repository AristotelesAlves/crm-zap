
import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";
import { Fingerprint } from "@phosphor-icons/react/dist/ssr";


import { ActiveLink } from "@/components/ActiveLink";

export const metadata: Metadata = {
  title: "ZAP-ZAP",
  description: "Gerenciar chamados",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased h-screen bg-azul flex w-full overflow-auto`}
      >
        <aside className=" flex flex-col justify-between p-2 h-screen">
          <ul className=" text-white flex flex-col gap-2 w-full">
            <ActiveLink name="Conversas" nameIcon="Headset" router="conversas"/>
            <ActiveLink name="Kanban" nameIcon="Kanban" router="kanban"/>
            <ActiveLink name="Agenda" nameIcon="CalendarDots" router="agenda"/>
            <ActiveLink name="Contatos" nameIcon="AddressBook" router="Contatos"/>
            <ActiveLink name="Configuração" nameIcon="GearSix" router="configuracao"/>
          </ul>
          <h1 className="text-white text-xl w-full p-2 border-t border-white">
            <Link className="flex items-center gap-1" href="https://aristoteles.dev.br">
              <div className="bg-white text-black p-2 rounded-full">
                <Fingerprint size={25}/>
              </div>
              Aristóteles.Dev
            </Link>
          </h1>
        </aside>
        <section className="w-full flex-1 h-full overflow-hidden bg-[#f5f5f5] rounded-l-2xl">
          {children}
        </section>
      </body>
    </html>
  );
}
