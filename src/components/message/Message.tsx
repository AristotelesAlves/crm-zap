
interface Iprops {
    url_profile: string,
    message: string,
    from: 'my'| 'client',
    type: 'message'|'audio'
}

export default function Message(props: Iprops){
    return (
        <div>
            <img src="" alt="" />
            <div>
                <p>
                    
                </p>
            </div>
        </div>
    )
}