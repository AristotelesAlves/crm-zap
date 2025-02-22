import { useState } from "react";
import { timeDay, } from "./util/data";
import Card from "./Card";

interface IweekDay{
    day: number,
    week: string  
}

interface Iprops{
    openModal: () => void
}


export default function Month(props: Iprops){

    const [weekDays, setWeekDays] = useState<IweekDay[]>([])
    const [redBarTime, setRedBarTime] = useState(0)
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
        <div>
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
                                            props.openModal()
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
                                                    <Card 
                                                      time={(evento.fim - evento.inicio) * 120} 
                                                      title={evento.tittle} 
                                                      fim={evento.fim} 
                                                      inicio={evento.inicio} 
                                                    />
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
    )
}