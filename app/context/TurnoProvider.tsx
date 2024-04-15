import React, { useState, useContext, createContext } from 'react'

type TurnoProviderProps = {
  children: React.ReactNode
}

interface TurnoContextType {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>
}

const TurnoContext = createContext<TurnoContextType | undefined>(undefined)

export function useTurno(): TurnoContextType {
  const context = useContext(TurnoContext);
  if (!context) {
    throw new Error('useTurno debe ser usado dentro de un TurnoProvider');
  }
  return context;
}
export function TurnoProvider({ children }: TurnoProviderProps): JSX.Element {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string>('');

  return (
    <TurnoContext.Provider value={{ date, setDate, time, setTime }}>
      {children}
    </TurnoContext.Provider>
  );
};


export default TurnoContext