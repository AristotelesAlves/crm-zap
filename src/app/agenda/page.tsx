'use client'
import Schedule from "@/components/Agenda/Index";
import { months, weeksAbbreviation } from "@/components/Agenda/util/data";
import { CaretDown, CaretUp } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef, useState } from "react";

interface InumberCalender{
    week: string,
    date: Date
}

export default function Page() {

    const containerCalendar = useRef<HTMLDivElement  | null>(null);
    const [numbersCalender, setNumbersCalender]= useState<InumberCalender[]>([])
    const [selectDate, setSelectDate] = useState(new Date())
    const [selectDay, setSelectDay] = useState(new Date())
    const [formatSchedule, setFormatSchedule] = useState('semana')
    
    const categorys = ['Mensagem agendada','Visita','Entrar em contato','Promoção','Proposta']

    function getNumbersCalender(month: number){
        let runningDaysMonth = [];

        let firstDayMonth = new Date(2025, month, 1);
        const weekDay = firstDayMonth.getDay(); 
        
        if(weekDay > 0 ){
            firstDayMonth.setDate(firstDayMonth.getDate() - weekDay);
        }

        for(let i = 0 ; i <= 41 ; i++){
            const newDate = new Date(firstDayMonth)
            newDate.setDate(firstDayMonth.getDate() + i)
            runningDaysMonth.push({
                week: weeksAbbreviation[newDate.getDay()],
                date: newDate
            })
        }

        setNumbersCalender(runningDaysMonth)

    }

    function upOrDownDate(up: boolean) {
        const newDate = new Date(selectDate); 
        newDate.setMonth(newDate.getMonth() + (up ? 1 : -1)); 

        setSelectDate(newDate); 
        getNumbersCalender(newDate.getMonth())
    }
    
    function scrollRealTimeRedBar(){
        const y = (new Date().getHours() * 120) + (new Date().getMinutes() * 2)
        if(containerCalendar){
            containerCalendar.current?.scrollTo(0, y - 100);
        }
    }

    useEffect(() => {
        scrollRealTimeRedBar()
        getNumbersCalender(selectDate.getMonth())
    },[])


    return (
        <div className="flex h-full w-full flex-col p-4 gap-2">
            
            <div className="flex h-full">
                <div className="w-fit h-full pr-4 flex flex-col gap-2">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-2xl font-semibold">
                            Agenda
                        </h1>
                        <select 
                          value={formatSchedule}
                          onChange={(e) => setFormatSchedule(e.target.value)}
                          className="bg-white rounded-lg border outline-none p-1 " 
                        >
                            <option value='dia'>Dia</option>
                            <option value='semana'>Semana</option>
                            <option value='mes'>Mês</option>
                        </select>
                    </div>
                    <div className="pt-1 pb-2 flex justify-between items-center">
                        <h1 className="text-lg">
                            {months[selectDate.getMonth()]}
                        </h1>
                        <div className="flex gap-2 items-center">
                            <button onClick={() => upOrDownDate(true)}>
                                <CaretUp size={25} weight="fill" />
                            </button>
                            <button onClick={() => upOrDownDate(false)}>
                                <CaretDown size={25} weight="fill" />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full min-w-52 ">
                        <div className="grid grid-cols-7 gap-1">
                            {weeksAbbreviation.map((week, index) => {
                                return (
                                    <div key={index}>
                                        <p className=" flex justify-center items-center">
                                            {week.toLocaleUpperCase()}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="grid grid-cols-7 justify-center items-center gap-1">
                            {numbersCalender.map((calender, index) => {
                                const correntDay = new Date()
                                return (
                                    <button 
                                    key={index} 
                                    onClick={() => {
                                        calender.date.getMonth() != selectDate.getMonth() ? 
                                        upOrDownDate(calender.date.getMonth() > selectDate.getMonth() ? true : false) : null
                                        setSelectDay(new Date(calender.date))
                                    }}
                                    className={`
                                        w-7 h-7 rounded-full flex items-center justify-center  
                                        ${correntDay && calender.date && 
                                            correntDay.getDate() === calender.date.getDate() && 
                                            correntDay.getMonth() === calender.date.getMonth() &&
                                            correntDay.getFullYear() === calender.date.getFullYear() ? 'bg-azul text-white' : null}
                                        ${selectDay && calender.date && 
                                            selectDay.getDate() === calender.date.getDate() &&
                                            selectDay.getMonth() === calender.date.getMonth() &&
                                            selectDay.getFullYear() === calender.date.getFullYear() ? 'border-2 border-azul' : null}
                                        ${calender.date.getMonth() != selectDate.getMonth() ? 'text-zinc-400' : null}
                                    `}
                                    >
                                    <span>
                                        {calender.date.getDate()}
                                    </span>
                                    </button>

                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">
                            Categorias
                        </h2>
                        <ul className="flex flex-col gap-2 pl-2 pb-1">
                            {categorys.map((category, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-2 align-middle">
                                        <input type="checkbox" name="" id="" />
                                        <span className="text-sm align-middle">
                                            {category}
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div>

                </div>
                <div ref={containerCalendar} 
                className="[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full 
                            [&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar-track]:bg-zinc-200 [&::-webkit-scrollbar-track]:bg-opacity-80
                        [&::-webkit-scrollbar-thumb]:bg-gray-300 w-full h-full overflow-auto rounded-xl border"
                >
                    <Schedule date={selectDay} formatSchedule={formatSchedule}/>
                </div>
            </div>
        </div>
    );
}
