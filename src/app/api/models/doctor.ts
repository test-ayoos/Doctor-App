/* tslint:disable */
import { ContactInfo } from './contact-info';
import { DoctorSettings } from './doctor-settings';
import { PaymentSettings } from './payment-settings';
import { Qualification } from './qualification';
import { ReservedSlot } from './reserved-slot';
import { Review } from './review';
import { UserRating } from './user-rating';
import { WorkPlace } from './work-place';
export interface Doctor {
  phoneNumber?: number;
  contactInfo?: ContactInfo;
  doctorSettings?: DoctorSettings;
  email?: string;
  firstName?: string;
  id?: number;
  image?: string;
  imageContentType?: string;
  paymentSettings?: PaymentSettings;
  doctorId?: string;
  practiceSince?: string;
  qualifications?: Array<Qualification>;
  registerNumber?: string;
  reservedSlots?: Array<ReservedSlot>;
  reviews?: Array<Review>;
  specialization?: string;
  totalRating?: number;
  userRatings?: Array<UserRating>;
  workPlaces?: Array<WorkPlace>;
}
