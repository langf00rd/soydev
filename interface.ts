export interface Question {
  q: string;
  a?: any;
  options?: any;
  isMultiChoice: boolean;
}

export interface Result {
  createdAt: string;
  fullName: string;
  id: string;
  percentage: number;
  photo: string;
  role: string;
  uid: string;
}
