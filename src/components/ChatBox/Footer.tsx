"use client"
import { CassetteTape, ChatTeardropDots, File, ImageBroken, Microphone, PaperPlaneTilt, Plus, Robot } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";



export default function FooterChat(){

    const [isOpenTool, setIsOpenTool] = useState(false)

    const openOrClosedTool = () => {
        setIsOpenTool(!isOpenTool)
    }

    return (
        <div className="flex gap-2 items-center p-2 bg-w  hite w-full">
            <div className="relative">
                <div className={`flex-col gap-2 p-1 rounded-md overflow-hidden shadow-xl bg-white absolute bottom-16 left-0 ${isOpenTool ? 'flex' : 'hidden'} duration-200 transition-all`}>
                    <button 
                    className="flex items-center gap-1 p-1 bg-white hover:bg-zinc-200">
                        <File weight="fill" size={20}/>
                        Documentos
                    </button>
                    <button 
                    className="flex items-center gap-1 p-1 bg-white hover:bg-zinc-200">
                        <ImageBroken weight="fill" size={20}/>
                        Imagens
                    </button>
                    <button 
                    className="flex items-center gap-1 p-1 bg-white hover:bg-zinc-200">
                        <ChatTeardropDots weight="fill" size={20}/>
                        Mensagens
                    </button>
                    <button 
                    className="flex items-center gap-1 p-1 bg-white hover:bg-zinc-200">
                        <CassetteTape weight="fill" size={20}/>
                        Audios
                    </button>
                    <button className="flex items-center gap-1 p-1 bg-white hover:bg-zinc-200">
                        <Robot weight="fill" size={20}/>
                        DeepSeek
                    </button>
                </div>
                <button className={`p-2 rounded-lg transition-colors duration-200 ${isOpenTool ? 'bg-azul text-white hover:bg-opacity-95 font-semibold' : 'hover:bg-zinc-100 '}`}
                    onClick={openOrClosedTool}>
                    <Plus className={`${isOpenTool ? 'rotate-[135deg]' : null} duration-200 transition-transform`} size={25}/>
                </button>
            </div>
            <input 
              onClick={() => setIsOpenTool(false)} 
              className="w-full rounded-lg outline-none p-2 bg-zinc-100 border-none border-white"
              placeholder="Digite uma mensagem" 
              type="text" 
              name="" 
              id=""
            />
            <button className="p-2 rounded-lg hover:bg-zinc-100 transition-colors duration-150">
                <Microphone size={25}/>
            </button>
            <button className="p-2 rounded-lg bg-azul text-white">
                <PaperPlaneTilt size={25  }/>
            </button>
        </div>
    )
} 