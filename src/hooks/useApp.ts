import { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import type { Storage } from '../typings/Storage';


export const LOCALSTORAGE_KEY = 'prac1';

export default function useApp() {
  const [currentPage, setCurrentPage] = useState<Storage>()
  const { getItem, setItem, lastPage } = useLocalStorage();

  // 앞으로가기
  const goForward = () => {
    const cntOfPages = getItem(LOCALSTORAGE_KEY);
    if(cntOfPages.length < 20) {
      setItem(LOCALSTORAGE_KEY);
      // const lastPages = getItem(LOCALSTORAGE_KEY);
      // const length = lastPages.length;
      setCurrentPage(cntOfPages[cntOfPages.length - 1]);
    }else{
      alert('페이지가 너무 많습니다!');
    }
  }

  // 뒤로가기
  const goBack = () => {
    const storageItem = getItem(LOCALSTORAGE_KEY)
    if(storageItem === null || storageItem.length <= 1) {
      alert('뒤로가기 불가!');
    }else{
      const value = [...storageItem];
      value.pop();
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(value));
      setCurrentPage(lastPage(LOCALSTORAGE_KEY))
    }
  }

  // breadcrumbs에서 페이지 click이동 
  const movePageInBreadCrumb = (pageNumber : number) => {
    const value = getItem(LOCALSTORAGE_KEY)
    const newValue = value.slice(0, pageNumber)
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newValue))
    setCurrentPage(lastPage(LOCALSTORAGE_KEY))
  }

  // 가장 첫 번째 페이지로 이동
  const moveHomePage = () => {
    if(getItem(LOCALSTORAGE_KEY) !== null) {
      const value = getItem(LOCALSTORAGE_KEY)
      const newValue = value.slice(0, 1)
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newValue))
      setCurrentPage(lastPage(LOCALSTORAGE_KEY))
    }
  }

  const resetPage = () => {
    localStorage.clear()
    setCurrentPage(lastPage(LOCALSTORAGE_KEY))
  }
  useEffect(() => {
    if(getItem(LOCALSTORAGE_KEY) !== null){
      setCurrentPage(getItem(LOCALSTORAGE_KEY)[getItem(LOCALSTORAGE_KEY).length - 1])
    }
  }, [])
  return {
    goForward,
    goBack,
    movePageInBreadCrumb,
    moveHomePage,
    currentPage,
    resetPage,
  }
}

