import { useCallback } from 'react'

export default function useLocalStorage() {
  
  const getItem = useCallback((key : string) => {
    if(localStorage.getItem(key) !== null) {
      return JSON.parse(localStorage.getItem(key) as string);
    }else {
      return null;
    }
  }, [])

  const setItem = useCallback((key : string) => { 
    if(getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify([{ id : 1, title : '1번 페이지' }]))
    }else {
      const length = getItem(key).length;
      const newValue = { id : length + 1, title : `${length + 1}번 페이지`}
      const added = getItem(key)
      added.push(newValue);
      localStorage.setItem(key, JSON.stringify(added));
    }
  }, [])

  const lastPage = (key : string) => {
    if(getItem(key) !== null) {
      return getItem(key)[getItem(key).length - 1];
    }else {
      return;
    }
  }


  return {
    getItem,
    setItem,
    lastPage,
  }
}
