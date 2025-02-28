"use client";

import { useEffect, useRef, useState } from "react";
import AgentamentoModal from "../modal/agenda/AgentamentoModal";
import { timeDay, Weeks } from "./util/data";
import Month from "./Month";
import Day from "./Day";

interface IEvent{
    title: string,
    date: string,
    start: string,
    end: string,
    cliente: string
    observation: string
    cor: string
}

interface IweekDay{
    day: number,
    week: string  
}

interface Iprops {
    date: Date
    formatSchedule: string
}

export default function Agenda({date, ...props}: Iprops) {

    const [closeModalAgendamento, setCloseModalAgendamento] = useState(false)

    console.log({
        pag: 'index',
        props: props.formatSchedule
    })
            
    function newEvent(data: IEvent) {
        console.log(data)
    }

    return (
        <div className="flex items-start rounded-md w-full h-full ">
            {
                closeModalAgendamento && (
                    <AgentamentoModal handleData={(data) => newEvent(data)} closed={() => setCloseModalAgendamento(false)}/>
                )
            }
            {
                props.formatSchedule === 'mes' ? (<div>
                    Página em construção
                </div>) :
                props.formatSchedule === 'semana' ?  <Month openModal={() => setCloseModalAgendamento(true)} date={date}/> : 
                <Day openModal={() => setCloseModalAgendamento(true)} date={date}/>
            }
             
        </div>
    );
}
