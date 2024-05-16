import React from 'react'
import { useTurno } from '../context/TurnoProvider'
import { Button } from '@/components/ui/button'
import { CalendarCheck } from 'lucide-react'

function ConfirmarTurno() {

  const { date, time, nextStep } = useTurno()

  return (
    <div className='flex flex-col items-center gap-5'>
      <h3 className='font-bold text-xl'>Confirmá tu turno</h3>

      <p className='font-bold text-xl'>
        {date?.toDateString()}
      </p>

      <p className='font-bold text-xl'>
        {time}
      </p>

      <Button onClick={() => nextStep()} className='gap-2'>
        <CalendarCheck />
        Confirmar
      </Button>

      

    </div>
  )
}

export default ConfirmarTurno