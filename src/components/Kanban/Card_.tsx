import { DotsThree } from "@phosphor-icons/react/dist/ssr";
import { CardInterface } from "./typeKanban";


interface Iprops {
    card: CardInterface
}

export default function Card({card} : Iprops){
    return (
        <div className="rounded-lg bg-white shadow-lg">
            <header className="flex items-center justify-between border-b-2 border-zinc-300 px-2">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-800"></div>
                    <span className="text-sm">
                        {card.status_priority}
                    </span>
                </div>
                <button>
                    <DotsThree size={25}/>
                </button>
            </header>
            <div className="w-full flex items-start p-2">
                <div className="flex gap-2 item w-full flex-1">
                    <img src={card.url_profile} className="w-12 h-12 flex-1 rounded-full"/>
                    <div className="w-full">
                        <h2 className="font-semibold">
                            {card.name_or_number}
                        </h2>
                        <p className="w-36 text-nowrap text-sm text-zinc-600 overflow-hidden text-ellipsis">
                            {card.last_message}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-end pl-2 gap-1">
                    <span className="text-sm">
                        {card.time_last_message}
                    </span>
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-600"> 
                        <span className="text-white font-semibold text-xs text-center">
                            {card.total_message}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}