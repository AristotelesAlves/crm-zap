import { Barricade } from "@phosphor-icons/react/dist/ssr";

export default function Page(){
    return(
        <section className="flex w-full h-full">
            <nav className="w-80 border-r p-2 flex flex-col h-full">
                <h1 className="text-2xl font-semibold p-2">
                    Kanban CRM
                </h1>
                <div className="flex-1 flex flex-col justify-between h-full w-full p-2">
                    <ul>
                        <li className="p-2 rounded-md border-b  hover:bg-white">
                            Perfil
                        </li>
                        <li className="p-2 rounded-md border-b  hover:bg-white">
                            API Whatsapp
                        </li>
                        <li className="p-2 rounded-md border-b  hover:bg-white">
                            Segunrança
                        </li>
                        <li className="p-2 rounded-md border-b  hover:bg-white">
                            Modelos de mensagem
                        </li>
                        <li className="p-2 rounded-md border-b  hover:bg-white">
                            Kanban
                        </li>
                    </ul>

                    <button className="text-start p-2 rounded-md border-b  hover:bg-white">
                        Desconectar
                    </button>
                </div>
            </nav>
            <div className="flex-1 bg-white flex items-center justify-center flex-col">
                <img src="https://i.pinimg.com/originals/5e/66/97/5e6697eeca64506902d3ac98171f2e8f.gif" alt="" />
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-2xl text-azul font-semibold">
                        Página em construção
                    </h1>
                    <p className="text-zinc-500">
                        Ainda não temos previsão para concluir esse modulo!
                    </p>
                </div>
            </div>
        </section>
    )
}