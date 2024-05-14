import React from 'react'
import { useTurno } from '../context/TurnoProvider'

function ConfirmarTurno() {

  const { date, time } = useTurno()

  return (
    <div className='flex flex-col items-center gap-5'>
      <h3 className='font-bold text-xl'>Confirmá tu turno</h3>

      <p className='font-bold text-xl'>
        {date?.toDateString()}
      </p>

      <p className='font-bold text-xl'>
        {time}
      </p>

      

    </div>
  )
}

export default ConfirmarTurno