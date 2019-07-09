/* tslint:disable */
import { Doctor } from './doctor';
export interface UserRating {
  doctor?: Doctor;
  id?: number;
  ratedOn?: string;
  rating?: number;
  userName?: string;
}
