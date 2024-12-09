import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '95910ba9-6229-4e71-900a-6cc8713eadec',
};

export const sampleWithPartialData: IAuthority = {
  name: '5883dd9b-cec5-4652-a1be-5a21441c6461',
};

export const sampleWithFullData: IAuthority = {
  name: '7e433191-f175-4a0a-a722-5d2e1d62cb64',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
