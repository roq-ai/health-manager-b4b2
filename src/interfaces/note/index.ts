import { TherapistInterface } from 'interfaces/therapist';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface NoteInterface {
  id?: string;
  content: string;
  therapist_id?: string;
  client_id?: string;
  created_at?: any;
  updated_at?: any;

  therapist?: TherapistInterface;
  client?: ClientInterface;
  _count?: {};
}

export interface NoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  therapist_id?: string;
  client_id?: string;
}
