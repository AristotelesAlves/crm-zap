import Message from "./Message";
import HeaderChat from "./HeaderChat";
import FooterChat from "./Footer";

interface Iprops{
    url_profile: string,
    name_or_number: string,
    closed: () => void,
    messages: {
        url_profile: string,
        from: string,
        message: string,
        respondingAuthor?: string,
        respondingMessage?: string,
    }[],
}
export default function ChatBox(props: Iprops){
    return (
        <div className="flex flex-col w-full">
            <HeaderChat 
            closed={props.closed} 
            name_or_number={props.name_or_number}
            url_profile={props.url_profile}
            />
            <div className="flex-1 relative w-full flex flex-col overflow-auto">
                <div className="p-2 flex flex-col">
                    {props.messages.map((chat, index) => (
                    <div key={index}>                         
                        <Message 
                        from={chat.from}
                        message={chat.message}
                        url_profile={chat.url_profile}
                        respondingAuthor={chat.respondingAuthor}
                        respondingMessage={chat.respondingMessage}
                        />
                    </div>
                    ))}
                </div>
            </div>
            <FooterChat/>
        </div>
    )
}