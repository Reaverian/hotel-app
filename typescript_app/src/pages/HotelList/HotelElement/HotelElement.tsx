import React, { useEffect, useState } from 'react'
import { getData } from 'src/api';
import { RatingViewer } from 'src/components/RatingViewer/RatingViewer';
import { HotelRoom } from 'src/pages/HotelList/HotelElement/HotelElement.types';
import { HotelData } from 'src/pages/HotelList/HotelList.types'
import Styled from './HotelElement.styled';

export const HotelElement: React.FC<{ hotel: HotelData, roomFilterAdultsAmount: number, roomFilterChildrenAmount: number }> = ({
    hotel,
    roomFilterAdultsAmount,
    roomFilterChildrenAmount
}) => {

    // @ts-ignore
    const [roomListData, updateRoomListData] = useState<HotelRoomData>();

    const ROOM_URL = '/roomRates/OBMNG';

    useEffect(() => {
        getData(updateRoomListData, `${ROOM_URL}/${hotel.id}`);
    }, []);

    const images = hotel.images || [];

    console.log('roomListData', roomListData);

    const filteredRooms = roomListData
        && roomListData.rooms.length
        && roomListData.rooms
            .filter((room: HotelRoom) => room.occupancy.maxAdults >= roomFilterAdultsAmount)
            .filter((room: HotelRoom) => room.occupancy.maxChildren >= roomFilterChildrenAmount);

    return filteredRooms && filteredRooms.length ? (
        <div>
            <Styled.Wrapper>
                <div>
                    <Styled.Image imageUrl={images[0].url} />
                </div>
                <Styled.Data>
                    <h4>{hotel.name}</h4>
                    <div>{hotel.address1}</div>
                    <div>{hotel.address2}</div>
                </Styled.Data>
                <div>
                    <RatingViewer starRating={hotel.starRating} title={`${hotel.starRating} Star Hotel`} />
                </div>
            </Styled.Wrapper>
            <div>

                {filteredRooms
                && filteredRooms.length
                && filteredRooms.map((room: HotelRoom) => (
                    <Styled.RoomItemWrapper>
                        <div>
                            <h5>{room.name}</h5>
                            <div>Adults: {room.occupancy.maxAdults}</div>
                            <div>Children: {room.occupancy.maxChildren}</div>
                        </div>
                        <div>{room.longDescription}</div>
                    </Styled.RoomItemWrapper>
                ))}
            </div>
        </div>
  ) : <></>
}
