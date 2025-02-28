import Image from "next/image"

export default function TableContacts(){
    const colName = ['Nome', 'Cidade - UF','Data de cadastro', 'Marcação' ,'Situação',]
    const exempleData = [
        {
            name: 'Aristoteles Alves De Oliveira',
            number: '(87) 98115-2947',
            profile_url: 'https://i.pinimg.com/736x/27/e1/8d/27e18d961ba7c47086c6862f1465e63a.jpg',
            city: 'Crato - CE',
            created_at:'23/02/2025',
            tag: 'Lead',
            status: 'Primeiro Contato'
        },
        {
            name: 'Joaquim das dores',
            number: '(87) 98415-2947',
            profile_url: 'https://i.pinimg.com/736x/0e/7f/e7/0e7fe7fe117f9c748d7f293b90cd3ffd.jpg',
            city: 'Crato - CE',
            created_at:'23/02/2025',
            tag: 'Cliente',
            status: 'Contratado'
        },
    ]

    const tag = {
        Lead: '',
        Cliente: '',
        Reciclado:''
    }

    return (
        <table className="w-full text-sm text-left rtl:text-right bg-white rounded-lg overflow-hidden border shadow-lg">
            <thead className="text-xs uppercase bg-zinc-200">
                <tr>
                    <th className="flex items-center p-4">
                        <input type="checkbox" name="" id="" className="w-5 h-5 rounded-sm " />
                    </th>
                    {
                        colName.map((col, index) => {
                            return (
                                <th className={`text-start`} 
                                  scope="col" 
                                  key={index}>
                                    {col}
                                </th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody >
                {exempleData.map((data, index) => {
                    return(
                        <tr className="hover:bg-zinc-100 cursor-pointer rounded-md">
                            <td className="p-4">
                                <div className="flex items-center">
                                    <input type="checkbox" className="w-5 h-5 rounded-sm"/>
                                </div>
                            </td>
                            <th className="flex items-center gap-2 p-1">
                                <Image className="rounded-full"
                                width={40} 
                                height={40} 
                                alt="Profile" 
                                src={data.profile_url}
                                />
                                <div className="flex flex-col items-start">
                                    <h3>{data.name}</h3>
                                    <span className="text-xs">
                                        {data.number}
                                    </span>
                                </div>
                            </th>
                            <td>
                                {data.city}
                            </td>
                            <td>
                                {data.created_at}
                            </td>
                            <td>
                                {data.tag}
                            </td>
                            <td>
                                {data.status}
                            </td>
                        </tr> 
                    )
                })}
            </tbody>
        </table>
    )
}