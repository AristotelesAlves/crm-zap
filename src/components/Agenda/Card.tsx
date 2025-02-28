import { IcardCalendar } from "./util/interface";

export default function Card(props: IcardCalendar){
    return (
        <div className="w-full h-full bg-green-100 text-green-500 z-0 flex flex-col justify-between pl-3">
                <span className="text-xs  h-full w-full text-ellipsis overflow-hidden">
                    {props.title}
                </span>
                
                {props.time < 60 ? null : (
                    <span className="">
                        {props.inicio} - {props.fim}
                    </span>
                )}
        </div>
        
    )
}