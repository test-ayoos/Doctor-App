/* tslint:disable */
import { Doctor } from './doctor';
export interface SessionInfo {
  date?: string;
  doctor?: Doctor;
  fromTime?: number;
  id?: number;
  interval?: number;
  sessionName?: string;
  toTime?: number;
  weekDay?: number;
}
