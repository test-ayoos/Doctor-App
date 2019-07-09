/* tslint:disable */
import { Symptom } from './symptom';
export interface ConsultationInfo {
  age?: number;
  height?: number;
  id?: number;
  symptoms?: Array<Symptom>;
  weight?: number;
}
