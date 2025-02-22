import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Card from "./Card";
import { columInterface } from "./typeKanban";

interface Iprops {
    colums: columInterface[];
}

export default function Colum({ colums }: Iprops) {
    return (
        <div className="
            flex gap-2 h-full overflow-y-hidden overflow-x-auto
            [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full 
            [&::-webkit-scrollbar]:h-1  [&::-webkit-scrollbar-track]:bg-zinc-200 [&::-webkit-scrollbar-track]:bg-opacity-80
             [&::-webkit-scrollbar-thumb]:bg-gray-300 pb-2
        ">
            {colums?.map((colum, index) => {
                return(
                <div key={index} className="w-72 min-w-72 flex flex-col gap-2">
                    <div className="w-full bg-azul text-white rounded-lg flex justify-between p-2">
                        <div className="flex gap-2 items-center">
                            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
                                <p className="text-azul font-semibold text-sm text-center">
                                    {colum.cards.length}
                                </p>
                            </div>
                            <h1>{colum.name}</h1>
                        </div>
                        <button>
                            <MagnifyingGlass size={25} />
                        </button>
                    </div>
                    <div className={`
                            flex flex-col w-full px-1 gap-2 h-full overflow-auto 
                            [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full 
                            [&::-webkit-scrollbar]:w-1  [&::-webkit-scrollbar-track]:bg-zinc-200 [&::-webkit-scrollbar-track]:bg-opacity-80
                             [&::-webkit-scrollbar-thumb]:bg-gray-300
                        `}>
                        {colum.cards.map((card, index) => (
                            <Card key={index} card={card} />
                        ))}
                    </div>
                </div>
                )
            })}
        </div>
    );
}
