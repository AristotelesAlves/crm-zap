import { AddressBook, Kanban, TagSimple, XCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

interface Iprops{
    url_profile: string,
    name_or_number: string,
    closed: () => void
}

export default function HeaderChat({closed, ...props}: Iprops){
    return (
        <div className="w-full bg-white py-2 px-4 justify-between flex items-center gap-4 shadow-md">
            <div className="flex items-center gap-2">
                <Image
                    alt="foto de perfil" 
                    width={40}  
                    height={40} 
                    src={props.url_profile}
                    className="rounded-full"
                />
                <h2 className="text-lg font-semibold">
                    {props.name_or_number}
                </h2>
            </div>
            <div>
                <ul className="flex gap-4 items-center">
                    <li>
                        <button>
                            <TagSimple size={25} weight="fill" />
                        </button>
                    </li>
                    <li>
                        <button>
                            <Kanban size={25} weight="fill" />
                        </button>
                    </li>
                    <li>
                        <button>
                            <AddressBook size={25} weight="fill" />
                        </button>
                    </li>
                    <li className="pl-2">
                         <button
                             onClick={closed}
                         >
                             <XCircle  size={25} />
                         </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}