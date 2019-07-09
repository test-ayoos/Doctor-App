/* tslint:disable */
import { Appointment } from './appointment';
import { Sort } from './sort';
export interface PageOfAppointment {
  content?: Array<Appointment>;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
