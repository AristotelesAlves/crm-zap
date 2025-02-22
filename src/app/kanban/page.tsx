import Kanban from "@/components/Kanban";


export default function Home() {
    return (
      <div className="w-full h-full flex flex-col p-4">
        <h1 className="text-2xl font-semibold pb-2">
          Kanban CRM
        </h1>
          <Kanban/>
      </div>
    );
  }