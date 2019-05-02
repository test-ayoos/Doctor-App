/* tslint:disable */
import { Qualification } from './qualification';
import { ContactInfo } from './contact-info';
import { Review } from './review';
import { UserRating } from './user-rating';
import { WorkPlace } from './work-place';
export interface Doctor {
  qualifications?: Array<Qualification>;
  contactInfo?: ContactInfo;
  id?: number;
  image?: string;
  imageContentType?: string;
  practiceSince?: string;
  doctorId?: string;
  registerNumber?: string;
  review?: Review;
  specialization?: string;
  totalRating?: number;
  userRating?: UserRating;
  workPlaces?: Array<WorkPlace>;
}
