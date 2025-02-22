"use client";

import { useEffect, useRef, useState } from "react";
import AgentamentoModal from "../modal/agenda/AgentamentoModal";
import { timeDay, Weeks } from "./util/data";

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

export default function Agenda() {

    const [closeModalAgendamento, setCloseModalAgendamento] = useState(false)


    
    const [weekDays, setWeekDays] = useState<IweekDay[]>([])


            
    function newEvent(data: IEvent) {
        setEventos([...eventos, {
            day: data.date,
            inicio: Number(data.start),
            fim: Number(data.end),
            tittle: data.title,
            observation: data.observation,
            cor: data.cor
        }]);
        console.log(eventos, data)
    }

    const [redBarTime, setRedBarTime] = useState(0)

    function getCorrentWeekDay(){
        const arrayWeekDayTemp = []
        const week = new Date().getDay();
        let correntDay = new Date()
        
        
        if(week > 0){
            correntDay.setDate(new Date().getDate() - week);
        }
        
        for (let i = 0; i <= 6; i++) {
            const currentDate = new Date(correntDay);
            currentDate.setDate(correntDay.getDate() + i);
            arrayWeekDayTemp.push({
                day: currentDate.getDate(),
                week: Weeks[currentDate.getDay()]
            })
        }
        setWeekDays(arrayWeekDayTemp)
    }

    useEffect(() => {
        setRedBarTime((new Date().getHours() * 120) + (new Date().getMinutes() * 2))
        getCorrentWeekDay()
    },[])

    const containerCalendar = useRef<HTMLDivElement  | null>(null);

    const [eventos, setEventos] = useState(        
        [
            {
                day: new Date().getDate() + 1, 
                inicio: 7,
                fim: 9.3,
                tittle: "Reunião",
                observation: '',
                cor: "bg-[#E9CBA7]"
            },
            {
                day: new Date().getDate(), 
                inicio: 4,
                fim: 4.40,
                tittle: "Reunião de colabordores virgens com intuito de sabugar uma prostituda de pinta",
                observation: '',
                cor: "bg-[#F1FAEE]"
            },
            {
                day: new Date().getDate() ,
                inicio: 10,
                fim: 10.2,
                tittle: "Visita loja B",
                observation: '',
                cor: "bg-[#A8DADC]"
            },
            {
                day: new Date().getDate() + 1,
                inicio: 14,
                fim: 15,
                tittle: "Almoço",
                observation: '',
                cor: "bg-[#D4E157]"
            },
            {
                day: "Seg 17",
                inicio: 16,
                fim: 17,
                tittle: "Apresentação",
                observation: '',
                cor: "bg-[#F1FAEE]"
            }
        ]
    )
    
    return (
        <div className="flex items-start rounded-md w-full h-full ">
            {
                closeModalAgendamento && (
                    <AgentamentoModal handleData={(data) => newEvent(data)} closed={() => setCloseModalAgendamento(false)}/>
                )
            }
            <div className="flex flex-col">
                <div className="h-14 border-b"></div>
                {timeDay.map((hora) => (
                    <div key={hora} className="h-[120px] w-10 border-b text-center flex  justify-center">
                        {hora}
                    </div>
                ))}
            </div>
            <div className="flex gap w-full">
                <div className="flex w-full">
                    {weekDays.map((weekDay, index) => (
                        <div key={index} className="flex flex-col w-full">
                            <div className={`p-2 border h-14 min-w-32 flex  ${weekDay.day == new Date().getDate() ? 'text-azul  border-t-4 border-t-azul w-52' : null}  flex-col items-center justify-center  sticky top-0 z-30 bg-white`}>
                                <h3 className={`text-lg font-semibold  }`}>
                                    {weekDay.week}
                                </h3>
                                <span>
                                    {weekDay.day}
                                </span>
                            </div>
                            <div className="relative"
                                ref={containerCalendar}
                            >
                                {
                                    new Date().getDate() > weekDay.day ? (
                                        <div className={`absolute w-[98%] h-1 border-t-4 border-dotted px-10 border-red-500 z-20 `} style={{ top: redBarTime }} ></div>
                                    ) : new Date().getDate() == weekDay.day ? (
                                        <div className={`absolute rounded-r-lg w-full h-1 bg-red-500 z-20 `} style={{ top: redBarTime }} ></div>
                                    ) : null
                                }
                                {timeDay.map((hora, index_) => (
                                    <div
                                        key={index_}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCloseModalAgendamento(true)
                                        }}
                                        className="relative min-h-[120px] w-full border"
                                    >
                                        {eventos.map((evento) =>
                                            evento.day === weekDay.day &&
                                            Math.floor(evento.inicio) === Math.floor(Number(hora)) ? (
                                                <div
                                                    key={evento.tittle}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.alert(evento.tittle)
                                                    }}
                                                    className={`w-full rounded-b-xl absolute shadow-lg z-20 flex`}
                                                    style={{
                                                        height: `${(evento.fim - evento.inicio) * 120}px`, 
                                                    }}
                                                >   
                                                    <div className="w-2 h-full bg-green-500 rounded-lg z-10">

                                                    </div>
                                                    <div className="w-full h-full bg-green-100 text-green-500 -ml-2 z-0 flex flex-col justify-between pl-3">
                                                        <span className="text-xs  h-full w-full text-ellipsis overflow-hidden">
                                                            {evento.tittle}
                                                        </span>
                                                        
                                                        {
                                                            ((evento.fim - evento.inicio) * 120) < 60 ? null : (
                                                                <span className="">
                                                                    {evento.fim} - {evento.inicio}
                                                                </span>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            ) : null
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
