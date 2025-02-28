export interface CardInterface {
    id: number;
    url_profile: string;
    name_or_number: string;
    status_priority: string;
    last_message: string;
    time_last_message: string;
    total_message: number
}

export interface columInterface {
    name: string;
    cards: CardInterface[];
}[]

