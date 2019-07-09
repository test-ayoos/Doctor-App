/* tslint:disable */
import { Doctor } from './doctor';
import { Status } from './status';
export interface ReservedSlot {
  date?: string;
  doctor?: Doctor;
  endTime?: number;
  id?: number;
  startTime?: number;
  statuses?: Array<Status>;
}
