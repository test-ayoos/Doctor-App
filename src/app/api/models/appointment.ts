/* tslint:disable */
import { ConsultationInfo } from './consultation-info';
import { Status } from './status';
import { Timing } from './timing';
export interface Appointment {
  id?: number;
  appointmentDateAndTime?: string;
  chronicDiseaseRef?: string;
  consultationInfo?: ConsultationInfo;
  doctorId?: string;
  appointmentId?: string;
  note?: string;
  patientId?: string;
  status?: Status;
  timing?: Timing;
  trackingId?: string;
}
