"use client"
import { AddressBook, CassetteTape, ChatCircleDots, ChatTeardropDots, File, Funnel, ImageBroken, Kanban, MagnifyingGlass, Microphone, PaperPlaneTilt, Plus, Robot, Smiley, TagSimple, XCircle } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { exempleContacts } from "@/exemple/exempleContacts";
import { chatHistory } from "@/exemple/batepapo";
import ChatBox from "@/components/ChatBox/Index";




export default function Home() {

  const [openTool, setOpenTool] = useState(false)
  const [configChat, setConfigChat] = useState({
    open: false,
    name_or_number: '(88) 9 9144-2156',
    url_profile:''
  })

  const openOrCloseTool = () => {
    setOpenTool(!openTool)
  }

  const openChat = (name_or_number: string, url_profile: string) => {
    setConfigChat({
      open: true,
      name_or_number,
      url_profile
    })
  }

  const closeChat = () => {
    setConfigChat({
      open: false,
      name_or_number: '',
      url_profile: ''
    })
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeChat();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  
  return (
    <section className="flex h-full">
      <div className="w-96 min-w-96 border-r p-2 flex flex-col gap-2 border-b">
        <header className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold py-1">
            Conversas
          </h1>
          <div className="flex gap-2 items-center bg-white w-full p-1 rounded-lg shadow-sm border">
            <MagnifyingGlass/>
            <input className="outline-none bg-transparent " type="text" placeholder="Pesquisar"/>
          </div>
          <div className="flex justify-between w-full items-center">
            <ul className="flex gap-2 items-center">
              <li className="px-2 py-1 bg-azul text-white font-semibold rounded-md">
                Tudo
              </li>
              <li className="px-2 py-1 bg-azul text-white font-semibold rounded-md">
                Não lidas
              </li>
            </ul>
            <button className="p-1 bg-azul text-white font-semibold rounded-md">
              <Funnel size={20}/>
            </button>
          </div>
        </header>
        <div className=" w-full h-full flex-1  flex-col flex gap-2">

          {exempleContacts.map((contact, index) => {
            return (
              <div onClick={() => openChat(contact.name_or_number, contact.url_profile)} key={Number(index)} className="cursor-pointer rounded-lg bg-white hover:shadow-lg hover:bg-opacity-80 w-full flex flex-col">
                <div className="flex items-center gap-1 w-full border-b px-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <p className="text-sm">
                    {contact.status_priority}
                  </p>
                </div>
                <div className="w-full flex items-start p-2">
                    <div className="flex gap-2 item w-full flex-1 text-start">
                        <img src={contact.url_profile} className="w-12 h-12 flex-1 rounded-full"/>
                        <div className="w-full">
                            <h2 className="font-semibold">
                                {contact.name_or_number}
                            </h2>
                            <p className="w-36 text-nowrap text-sm text-zinc-600 overflow-hidden text-ellipsis">
                                {contact.last_message}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end pl-2 gap-1">
                        <span className="text-sm">
                            {contact.time_last_message}
                        </span>
                        {contact.total_message > 0 && (
                          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-600"> 
                              <span className="text-white font-semibold text-xs text-center">
                                  2
                              </span>
                          </div>
                        )}
                    </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {
        configChat.open ? 
            <ChatBox
              name_or_number={configChat.name_or_number} 
              url_profile={configChat.url_profile} 
              messages={chatHistory[configChat.name_or_number as keyof typeof chatHistory]}
              closed={closeChat}
            />
         : (
          <div className="flex items-center justify-center flex-col  w-full relative">
            <ChatCircleDots size={150} />
            <h1 className="z-10 font-semibold text-2xl">
              Selecione uma conversa
            </h1>
          </div>
        )
      }

    </section>
  );
}