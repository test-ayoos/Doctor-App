/* tslint:disable */
import { Doctor } from './doctor';
import { Reply } from './reply';
export interface Review {
  doctor?: Doctor;
  id?: number;
  replies?: Array<Reply>;
  review?: string;
  reviewedOn?: string;
  userName?: string;
}
