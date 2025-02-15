'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { CalendarDots, GearSix, Headset, Kanban } from '@phosphor-icons/react/dist/ssr';

type ActiveLinkProps = {
  router: string,
  name: string,
  nameIcon: 'Headset' | 'Kanban' | 'CalendarDots' | 'GearSix',
};


export function ActiveLink(props: ActiveLinkProps) {
    const pathname = usePathname();
    const isActive = pathname.replace('/','') === props.router;

    const icon = {
        Headset: <Headset size={18} className={isActive ? "text-white" : "text-black"}/>,
        Kanban: <Kanban size={18} className={isActive ? "text-white" : "text-black"}/>,
        CalendarDots: <CalendarDots size={18} className={isActive ? "text-white" : "text-black"}/>,
        GearSix: <GearSix size={18} className={isActive ? "text-white" : "text-black"}/>
    }

  return (
    <li className={`w-full ${isActive ? 'bg-white text-black' : 'text-white'} p-2 rounded-lg hover:bg-gray-100 hover:bg-opacity-20 hover:text-black transition-colors duration-150`}>
        <a className="flex items-center gap-1 font-semibold" 
        href={props.router}>
            <div className={`p-2 rounded-full  ${isActive ? "bg-azul" : "text-white bg-white"}`}>
                {icon[props.nameIcon]}
            </div>
            {props.name}
        </a>
    </li>
  );
}
