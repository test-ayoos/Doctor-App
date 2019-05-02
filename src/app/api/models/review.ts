/* tslint:disable */
import { Reply } from './reply';
export interface Review {
  id?: number;
  replies?: Array<Reply>;
  review?: string;
}
