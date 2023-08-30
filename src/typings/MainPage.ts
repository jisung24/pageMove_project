import type { Storage } from "./Storage";
import type { HeaderProps } from "./Header";
import type { FooterProps } from "./Footer";
export interface MainPageProps extends HeaderProps, FooterProps{
  movePageInBreadCrumb : (pageNumber : number) => void;
  lastPage: Storage
  breadCrumbData : Storage[] | null;
  currentPage : Storage | undefined;
}

