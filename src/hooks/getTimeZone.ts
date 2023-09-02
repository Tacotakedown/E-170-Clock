import { find } from 'geo-tz';

export const getTimeZone = (lat: number, lng: number) => {
	find(lat, lng);
};
