"use client"
import { CassetteTape, ChatTeardropDots, DotsThree, File, Funnel, Image, Lightning, MagnifyingGlass, Microphone, PaperPlaneTilt, Plus, Robot } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function Home() {

  const [openTool, setOpenTool] = useState(false)

  const openOrCloseTool = () => {
    setOpenTool(!openTool)
  }
  
  return (
    <section className="flex h-full">
      <div className="w-96 border-r p-2 flex flex-col gap-2 border-b">
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

          <div className="rounded-lg bg-white hover:shadow-lg hover:bg-opacity-80 w-full flex flex-col">
            {/* <header className="flex w-full items-center justify-between border-b-2 border-zinc-300 px-2">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <span className="text-sm">
                        Doido
                    </span>
                </div>
                <button>
                    <DotsThree size={25}/>
                </button>
            </header> */}
            <div className="flex items-center gap-1 w-full border-b px-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <p className="text-sm">
                Primeiro contato
              </p>
            </div>
            <div className="w-full flex items-start p-2">
                <div className="flex gap-2 item w-full flex-1 text-start">
                    <img src='https://i.pinimg.com/736x/22/1a/3e/221a3e854dfabe2053e9a13731420dff.jpg' className="w-12 h-12 flex-1 rounded-full"/>
                    <div className="w-full">
                        <h2 className="font-semibold">
                            ari
                        </h2>
                        <p className="w-36 text-nowrap text-sm text-zinc-600 overflow-hidden text-ellipsis">
                            Boa noite, tudo bem ?
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-end pl-2 gap-1">
                    <span className="text-sm">
                        10:30
                    </span>
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-600"> 
                        <span className="text-white font-semibold text-xs text-center">
                            2
                        </span>
                    </div>
                </div>
            </div>
          </div>

          <div className="rounded-lg bg-white hover:shadow-lg hover:bg-opacity-80 w-full flex flex-col">
            {/* <header className="flex w-full items-center justify-between border-b-2 border-zinc-300 px-2">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <span className="text-sm">
                        Doido
                    </span>
                </div>
                <button>
                    <DotsThree size={25}/>
                </button>
            </header> */}
            <div className="flex items-center gap-1 w-full border-b px-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <p className="text-sm">
                Primeiro contato
              </p>
            </div>
            <div className="w-full flex items-start p-2">
                <div className="flex gap-2 item w-full flex-1 text-start">
                    <img src='https://i.pinimg.com/736x/22/1a/3e/221a3e854dfabe2053e9a13731420dff.jpg' className="w-12 h-12 flex-1 rounded-full"/>
                    <div className="w-full">
                        <h2 className="font-semibold">
                            ari
                        </h2>
                        <p className="w-36 text-nowrap text-sm text-zinc-600 overflow-hidden text-ellipsis">
                            Boa noite, tudo bem ?
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-end pl-2 gap-1">
                    <span className="text-sm">
                        10:30
                    </span>
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-600"> 
                        <span className="text-white font-semibold text-xs text-center">
                            2
                        </span>
                    </div>
                </div>
            </div>
          </div>

          <div className="rounded-lg bg-white hover:shadow-lg hover:bg-opacity-80 w-full flex flex-col">
            {/* <header className="flex w-full items-center justify-between border-b-2 border-zinc-300 px-2">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <span className="text-sm">
                        Doido
                    </span>
                </div>
                <button>
                    <DotsThree size={25}/>
                </button>
            </header> */}
            <div className="flex items-center gap-1 w-full border-b px-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <p className="text-sm">
                Primeiro contato
              </p>
            </div>
            <div className="w-full flex items-start p-2">
                <div className="flex gap-2 item w-full flex-1 text-start">
                    <img src='https://i.pinimg.com/736x/22/1a/3e/221a3e854dfabe2053e9a13731420dff.jpg' className="w-12 h-12 flex-1 rounded-full"/>
                    <div className="w-full">
                        <h2 className="font-semibold">
                            ari
                        </h2>
                        <p className="w-36 text-nowrap text-sm text-zinc-600 overflow-hidden text-ellipsis">
                            Boa noite, tudo bem ?
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-end pl-2 gap-1">
                    <span className="text-sm">
                        10:30
                    </span>
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-600"> 
                        <span className="text-white font-semibold text-xs text-center">
                            2
                        </span>
                    </div>
                </div>
            </div>
          </div>

          <div className="rounded-lg bg-white hover:shadow-lg hover:bg-opacity-80 w-full flex flex-col">
            {/* <header className="flex w-full items-center justify-between border-b-2 border-zinc-300 px-2">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <span className="text-sm">
                        Doido
                    </span>
                </div>
                <button>
                    <DotsThree size={25}/>
                </button>
            </header> */}
            <div className="flex items-center gap-1 w-full border-b px-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <p className="text-sm">
                Primeiro contato
              </p>
            </div>
            <div className="w-full flex items-start p-2">
                <div className="flex gap-2 item w-full flex-1 text-start">
                    <img src='https://i.pinimg.com/736x/b6/ac/05/b6ac05d713fc6ac4481a2f8e3aace8dc.jpg' className="w-12 h-12 flex-1 rounded-full"/>
                    <div className="w-full">
                        <h2 className="font-semibold">
                            Clienton
                        </h2>
                        <p className="w-36 text-nowrap text-sm text-zinc-600 overflow-hidden text-ellipsis">
                            Gostaria de uma demonstração
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-end pl-2 gap-1">
                    <span className="text-sm">
                        10:30
                    </span>
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-600"> 
                        <span className="text-white font-semibold text-xs text-center">
                            2
                        </span>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex-1 relative">
          <div className={`flex-col gap-2 rounded-md overflow-hidden bg-white absolute bottom-4 left-2 ${openTool ? 'flex' : 'hidden'} duration-200 transition-all`}>
              <button className="flex items-center gap-1 p-1 bg-white hover:bg-zinc-200">
                <File weight="fill" size={20}/>
                Documentos
              </button>
              <button className="flex items-center gap-1 p-1 bg-white hover:bg-zinc-200">
                <Image weight="fill" size={20}/>
                Imagens
              </button>
              <button className="flex items-center gap-1 p-1 bg-white hover:bg-zinc-200">
                <ChatTeardropDots weight="fill" size={20}/>
                Mensagens
              </button>
              <button className="flex items-center gap-1 p-1 bg-white hover:bg-zinc-200">
                <CassetteTape weight="fill" size={20}/>
                Audios
              </button>
              <button className="flex items-center gap-1 p-1 bg-white hover:bg-zinc-200">
                <Robot weight="fill" size={20}/>
                DeepSeek
              </button>
            </div>
        </div>
        <div className="flex gap-2 items-center p-2 bg-white w-full">
          <div className="relative">
            <button className={`p-2 rounded-lg transition-colors duration-200 ${openTool ? 'bg-azul text-white hover:bg-opacity-95 font-semibold' : 'hover:bg-zinc-100 '}`}
              onClick={openOrCloseTool}>
              <Plus className={`${openTool ? 'rotate-[135deg]' : null} duration-200 transition-transform`} size={25}/>
            </button>
          </div>
          <input onClick={() => setOpenTool(false)} className="w-full rounded-lg outline-none p-2 bg-zinc-100 border-none border-white" placeholder="Digite uma mensagem" type="text" name="" id="" />
          <button className="p-2 rounded-lg hover:bg-zinc-100 transition-colors duration-150">
            <Microphone size={25}/>
          </button>
          <button className="p-2 rounded-lg bg-azul text-white">
            <PaperPlaneTilt size={25  }/>
          </button>
        </div>
      </div>
    </section>
  );
}