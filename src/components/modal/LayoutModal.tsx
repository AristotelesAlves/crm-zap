import { ReactNode } from "react";

interface Iprops {
    children: ReactNode
}

export default function LayoutModal(props: Iprops){
    return (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-25 flex items-center justify-center z-50">
            <div className="bg-white p-2 rounded-lg">
                {props.children}
            </div>
        </div>
    )
}