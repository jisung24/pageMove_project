import type { Storage } from "./Storage"
export interface BreadCrumbDataProps {
  breadCrumbData : Storage[] | null;
  onClick : (pageNumber: number) => void
}