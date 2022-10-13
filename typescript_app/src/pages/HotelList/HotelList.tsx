import React, { useEffect, useState } from 'react'

import { HotelListData } from './HotelList.types';
import Styled from './HotelList.styled';
import { ApiRoutes } from 'src/api/config';
import { getData } from 'src/api';
import { HotelElement } from 'src/pages/HotelList/HotelElement/HotelElement';
import { Star } from 'src/assets/icons/Star';
import { decrementHandler, incrementHandler } from 'src/pages/HotelList/HotelList.helpers';

export const HotelList: React.FC = () => {

	const [hotelListData, updateHotelListData] = useState<HotelListData>(undefined);
	const [starRating, updateStateRating] = useState(3);
	const [roomFilterAdultsAmount, updateRoomFilterAdultsAmount] = useState(2);
	const [roomFilterChildrenAmount, updateRoomFilterChildrenAmount] = useState(0);

	useEffect(() => {
		getData(updateHotelListData, ApiRoutes.hotels);
	}, []);

	useEffect(() => {
		console.log('starRating', starRating);
	}, [starRating]);


	return (
		<div>
			<h1>Hotel List</h1>

			<Styled.Filters>
				<Styled.StarRandingFilter>
					<Star onClick={() => updateStateRating(1)} fill={starRating > 0} />
					<Star onClick={() => updateStateRating(2)} fill={starRating > 1} />
					<Star onClick={() => updateStateRating(3)} fill={starRating > 2} />
					<Star onClick={() => updateStateRating(4)} fill={starRating > 3} />
					<Star onClick={() => updateStateRating(5)} fill={starRating > 4} />
				</Styled.StarRandingFilter>
				<div>
					Adults
					<button
						onClick={() => incrementHandler(roomFilterAdultsAmount, updateRoomFilterAdultsAmount)}>
						+
					</button>
					<span style={{ minWidth: '30px', textAlign: 'center' }}>{roomFilterAdultsAmount}</span>
					<button onClick={() => decrementHandler(roomFilterAdultsAmount, updateRoomFilterAdultsAmount)}>-</button>
				</div>
				<div>
					Children
					<button
						onClick={() => incrementHandler(roomFilterChildrenAmount, updateRoomFilterChildrenAmount)}>
						+
					</button>
					<span style={{ minWidth: '30px', textAlign: 'center' }}>{roomFilterChildrenAmount}</span>
					<button onClick={() => decrementHandler(roomFilterChildrenAmount, updateRoomFilterChildrenAmount)}>-</button>
				</div>
				<div>

				</div>
			</Styled.Filters>

			{!!hotelListData ? (
				<Styled.Wrapper>{
					hotelListData.map((hotel) => {

						const filteredHotel = parseInt(hotel.starRating) >= starRating
							&& <HotelElement
								hotel={hotel}
								roomFilterAdultsAmount={roomFilterAdultsAmount}
								roomFilterChildrenAmount={roomFilterChildrenAmount} 
							/>

						return filteredHotel
					})
				}</Styled.Wrapper>
			) : (
				<div>nie ma hoteli</div>
			)}
		</div>
	)
}