import React from 'react';

// TS any가 많음 ? -> 이 부분 해결해보기
const useSessionStorage = (key: string, initialValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    // window가 undefinde일 있으려나?  if(type of window ) 제거
    const item = window.sessionStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
};

export default useSessionStorage;
