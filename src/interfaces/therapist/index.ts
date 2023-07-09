import { NoteInterface } from 'interfaces/note';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TherapistInterface {
  id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  note?: NoteInterface[];
  user?: UserInterface;
  _count?: {
    note?: number;
  };
}

export interface TherapistGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
