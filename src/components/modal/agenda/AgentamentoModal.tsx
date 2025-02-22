import { useState } from 'react';
import { X } from "@phosphor-icons/react/dist/ssr";
import LayoutModal from "../LayoutModal";

interface Iprops {
    closed: () => void;
    handleData: (data: IEvent) => void;
}

const days = [
    "Seg 17", "Ter 18", "Qua 19", "Qui 20", "Sex 21", "Sáb 22", "Dom 23",
    "Seg 24", "Ter 25", "Qua 26", "Qui 27", "Sex 28"
];

const coresPastel = ['#FFB6C1', '#FFDAB9', '#E6E6FA', '#F5DEB3', '#D8BFD8'];

interface IEvent {
    title: string;
    date: string;
    start: string,
    end: string,
    cliente: string;
    observation: string;
    cor: string;
}

export default function AgendamentoModal(props: Iprops) {
    const [formData, setFormData] = useState<IEvent>({
        title: '',
        date: '',
        start: '',
        end: '',
        cliente: '',
        observation: '',
        cor: coresPastel[0]
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        props.handleData(formData);
        props.closed();
    };

    return (
        <LayoutModal>
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Agendamento</h2>
                    <button onClick={props.closed}>
                        <X size={25} />
                    </button>
                </div>

                <div className="flex flex-col w-[400px] gap-2 py-2">
                    <input
                        type="text"
                        className="outline-none px-2 py-1 border-b w-full"
                        placeholder="Adicionar Título"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <select
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    >
                        <option value="">Selecione uma data</option>
                        {days.map((day, index) => (
                            <option key={index} value={day}>{day}</option>
                        ))}
                    </select>
                    <input
                        type="time"
                        name="start"
                        value={formData.start}
                        onChange={handleChange}
                    />
                    <input
                        type="time"
                        name="end"
                        value={formData.end}
                        onChange={handleChange}
                    />
                    <select
                        name="cliente"
                        value={formData.cliente}
                        onChange={handleChange}
                    >
                        <option value="">Selecione um cliente</option>
                        <option value="Cliente A">Cliente A</option>
                        <option value="Cliente B">Cliente B</option>
                        <option value="Cliente C">Cliente C</option>
                        <option value="Cliente D">Cliente D</option>
                    </select>
                    <textarea
                        className="h-24 w-full border-2 rounded-md"
                        name="observation"
                        placeholder="Observações"
                        value={formData.observation}
                        onChange={handleChange}
                    />
                </div>

                {/* Seletor de Cores */}
                <div className="flex gap-2 items-center">
                    {coresPastel.map((cor, index) => (
                        <button
                            key={index}
                            className={`w-10 h-10 rounded-full border-2 ${formData.cor === cor ? 'border-black' : 'border-transparent'}`}
                            style={{ backgroundColor: cor }}
                            onClick={() => setFormData(prevState => ({ ...prevState, cor }))}
                        />
                    ))}
                </div>

                <div className="flex gap-2 items-center justify-end mt-3">
                    <button onClick={props.closed} className="px-2 py-1 rounded-md border border-azul text-azul">
                        Descartar
                    </button>
                    <button onClick={handleSave} className="px-2 py-1 rounded-md bg-azul text-white">
                        Salvar
                    </button>
                </div>
            </div>
        </LayoutModal>
    );
}
