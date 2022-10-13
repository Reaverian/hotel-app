import { Image } from "src/pages/HotelList/HotelList.types"

export type HotelRoomData = {
    rooms: HotelRoom[],
    ratePlans: {}
}

export interface HotelRoom {
    name: string,
    occupancy: Occupancy,
    longDescription: string,
    id: string,
    images?: Image[],
    bedConfiguration: string,
    disabledAccess: boolean,
}

interface Occupancy {
    maxAdults: number,
    maxChildren: number,
    maxOverall: number
}