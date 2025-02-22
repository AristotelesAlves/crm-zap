import Image from "next/image"

interface Iprops {
    url_profile: string,
    message: string,
    from: 'my'| 'client' | string,
    respondingMessage? : string
    respondingAuthor? : string 

}

export default function Message(props: Iprops){
    return (
        <div className={`flex items-start gap-2 ${props.from == 'my' ? 'flex-row-reverse' : null }`}>
            {/* <Image width={30} height={30} src={props.url_profile} alt="" className="rounded-full" /> */}
            <div  className={`
              ${props.from == 'my' ? 'bg-azul text-white rounded-l-xl rounded-br-xl' : 'bg-white rounded-r-xl rounded-bl-xl' }
               p-2 shadow-md text-left max-w-72 w-fit flex flex-col mt-1 gap-1
            `}>
                {
                    props.respondingMessage && (
                        <div className={`w-full rounded-md ${props.from == 'my' ?  'bg-white text-black ' : 'bg-azul text-white'}  shadow-xl  p-2 flex flex-col text-xs  bg-opacity-95`}>
                            <p className="font-semibold">
                                {props.respondingAuthor}
                            </p>
                            <p className="font-light">
                                {props.respondingMessage} 
                            </p>
                        </div>
                    )
                }
                <p>
                    {props.message}
                </p>
                <span className="w-full text-xs text-end">
                    09:30
                </span>
            </div>
        </div>
    )
}