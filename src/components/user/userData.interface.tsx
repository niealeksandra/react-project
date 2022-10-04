export type UserInterface = {
    email: string;
    gender: string;
    cell: string;
    nat: string;
    picture: Picture;
    id: Id;
    phone: string;
    location: Location;
    name: Name;
}

export type Picture = {
    large: string;
    medium: string;
    thumbnail: string;
}

type Id = {
    name: string;
    value: string;
}

export type Location = {
    city: string;
    country: string;
    postcode: string;
    state: string;
    street: Street;

}

type Street = {
    name: string;
    number: string;
}

type Name = {
    first: string;
    last: string;
    title: string
}