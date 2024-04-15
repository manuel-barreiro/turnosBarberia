import React from 'react'
import { useTurno } from '../context/TurnoProvider'

function ConfirmarTurno() {

  const { date, time } = useTurno()

  return (
    <div className='flex flex-col items-center gap-5'>
      <h3>Confirmá tu turno</h3>

      <div>
        {date?.toDateString()}
      </div>

      <div>
        {time}
      </div>

      

    </div>
  )
}

export default ConfirmarTurno