/* tslint:disable */
import { PatientInfo } from './patient-info';
export interface AppointmentDetails {
  appointmentDateAndTime?: string;
  appointmentID?: string;
  cachable?: boolean;
  patientInfo?: PatientInfo;
  status?: string;
  trackingID?: string;
  typeName?: string;
}
