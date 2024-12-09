import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 11999,
  login: '4tnQ@Qpz\\Fl-6\\z-W',
};

export const sampleWithPartialData: IUser = {
  id: 11376,
  login: 'f',
};

export const sampleWithFullData: IUser = {
  id: 17521,
  login: '88I.q@T\\QBqj\\97mbG\\zC3',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
