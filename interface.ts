import { ReactNode } from "react";

export interface Question {
  q: string;
  a?: any;
  options?: any;
  isMultiChoice: boolean;
}

export interface Result {
  createdAt: string;
  name: string;
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
  isComingSoon?: boolean;
}

export interface ProgressFooterProps {
  selectedRole: string;
  checkedItems: string[];
  percentage: number;
  progressColor: string;
}

export interface JobTypeButtonProps extends JobType {
  selectedRole: string;
  onSelect: (title: string) => void;
}
