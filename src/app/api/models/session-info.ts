/* tslint:disable */
import { WorkPlace } from './work-place';
export interface SessionInfo {
  date?: string;
  fromTime?: number;
  id?: number;
  interval?: number;
  sessionName?: string;
  toTime?: number;
  weekDay?: number;
  workPlace?: WorkPlace;
}
