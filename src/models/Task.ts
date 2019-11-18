import { Category } from '@/models/Category';

export default interface Task {
  id: string;
  name: string;
  detail: string;
  categories: Category[];
  status: Status;
}

export enum Status {
  WAITING,
  WORKING,
  DONE,
}
