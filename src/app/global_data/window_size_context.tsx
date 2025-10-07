"use client";

import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

type WindowWidthType = {
  windowWidth: number; 
  setWindowWidth: Dispatch<SetStateAction<number>> 
};

const WindowWidthContext = createContext <WindowWidthType | null>(null);

export function WindowWidthProvider({ children } : {children: React.ReactNode}) {
  const [windowWidth, setWindowWidth] = useState <number> (-1);

  return (
    <WindowWidthContext.Provider value={{ windowWidth, setWindowWidth }}>
      {children}
    </WindowWidthContext.Provider>
  );
}

export function useWindowWidth() {
  return useContext(WindowWidthContext);
}