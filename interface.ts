import { ReactNode } from "react";

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
  rank?: number;
}

export interface Checklist {
  label: string;
  hasChildren: boolean;
  children?: string[];
  childrenLabel?: string;
}

export interface JobType {
  id: number;
  title: string;
  icon: ReactNode;
}
