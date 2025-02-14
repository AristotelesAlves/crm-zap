import Colum from "@/components/Kanban/Colum";
import { exemplekanban } from "@/exemple/exemplekanban";

export default function Home() {
    return (
      <div className="w-full h-full flex flex-col p-4">
        <h1 className="text-2xl font-semibold pb-2">
          Kanban CRM
        </h1>
        <Colum colums={exemplekanban}/>
      </div>
    );
  }