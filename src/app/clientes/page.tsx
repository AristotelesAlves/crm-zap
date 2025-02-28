import TableContacts from "@/components/TableContacts/Index";
import { MagnifyingGlass, UserCircleCheck, UserPlus, UserSwitch } from "@phosphor-icons/react/dist/ssr";

export default function page(){

    const top = ['Leads', 'Reciclado', 'Clientes']

    return (
        <div className="w-full h-full p-3 flex flex-col gap-2">
            <h1 className="text-2xl">
                Gestão de Contatos
            </h1>
            <div className="w-full flex gap-2 items-center py-1">
                {top.map((t, index) => {
                    return (
                        <div key={index} className="bg-white w-full rounded-lg shadow-md border p-4">
                            <span className="text-sm text-zinc-500">
                                {t}
                            </span>
                            <div className="flex items-center justify-between">
                                <strong className="text-4xl">
                                    10
                                </strong>
                                <div className="">
                                    {
                                        t == 'Leads' ? <UserPlus size={32} /> :
                                        t == 'Reciclado' ? <UserSwitch size={32} /> :
                                        <UserCircleCheck size={32} />
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                    <div className="w-full max-w-[500px] flex items-center bg-white px-2 py-1 rounded-lg">
                        <input type="text" className="w-full bg-transparent p-1 outline-none" />
                        <MagnifyingGlass size={25}/>
                    </div>
                    <button className="p-2 rounded-lg bg-azul text-white font-semibold">
                        Novo Contato
                    </button>
                </div>
                <ul className="flex gap-3 items-center">
                    <li className="px-1 border-b-2 border-azul">
                        Todos
                    </li>
                    {top.map((t, index) => {
                        return (
                            <li key={index} className="px-1 border-b-2 border-transparent">
                                {t}
                            </li>
                        )
                    })}
                </ul>
                <TableContacts/>
            </div>
        </div>
    )
}