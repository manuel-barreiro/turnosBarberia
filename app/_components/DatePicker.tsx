'use client'

import React, { useContext, useEffect } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { subDays, addDays, addMonths  } from "date-fns"
import { es } from 'date-fns/locale';
import { useTurno } from '../context/TurnoProvider';

function DatePicker() {
  const { date, setDate } = useTurno()

  useEffect(() => console.log(date), [date])

  return (
    <div className='flex flex-col items-center gap-5'>
     <h3 className='font-bold text-xl'>Seleccioná la fecha</h3>
      

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) =>
          date < subDays(new Date(), 1) || date > addDays(new Date(), 21)
        }
        locale={es}
        fromMonth={new Date()}
        toMonth={addMonths(new Date(), 1)}
        required
        className="rounded-md border"
      />
      
    </div>
  )
}

export default DatePicker