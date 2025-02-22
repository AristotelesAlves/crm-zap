import { exemplekanban } from "@/exemple/exemplekanban"
import Colum from "./Colum"

export default function Kanban(){
    return (
        <>
            <Colum colums={exemplekanban}/>
        </>
    )
}