export const WEDDING_DAY = new Date("2027-08-14");

const WEDDING_DAY_DATE_STRING = WEDDING_DAY.toISOString().slice(0, 10);

const makeWeddingDayTime = (time: string) => new Date(`${WEDDING_DAY_DATE_STRING}T${time}+02:00`);

export const MEETING_TIME = makeWeddingDayTime("11:00:00");
export const TRAUUUNG_TIME = makeWeddingDayTime("15:00:00");
export const FOOD_TIME = makeWeddingDayTime("19:00:00");
export const PARTY_TIME = makeWeddingDayTime("22:00:00");
