export class Movies {
    _id: string;
    actors: {
        _id: string;
        name: string;
    }[];
    name: string;
    producer: {
        _id: string;
        name: string;
    };
    created_at: string;
    updated_at: string;
    __v: number;
    year_of_release: number;
    poster: string;
    plot?: String;
}