export type HotelListData = HotelData[] | undefined;

export type HotelData = {
    id: string,
    name: string,
    description: string,
    address1: string,
    address2: string,
    starRating: string,
    images: Image[]
}

export type Image = {
    url: string;
    alt?: string;
}