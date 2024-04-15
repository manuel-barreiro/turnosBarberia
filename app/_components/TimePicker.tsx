'use client'
import React, { useEffect } from 'react'
import { useTurno } from '../context/TurnoProvider'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

function TimePicker() {
  const { time, setTime } = useTurno()

  useEffect(() => {
    console.log(time)
  } , [time])
  
  const turnosDisponibles = ['12:00', '12:30', '13:00', '13:30', '14:00', '15:00', '15:30', '16:00', '16:30']
  
  return (
    <div className='flex flex-col items-center gap-5'>
      <h2>Elegí una hora</h2>

      <Carousel 
        opts={
          {
            dragFree: true
          }
        }
        orientation="vertical"
        className='my-12 w-full max-w-sm'
      >
        <CarouselContent className='-ml-1 h-44'>

          {turnosDisponibles.map((hora, index) => 
            <CarouselItem key={index} className='pl-1 basis-1/3'>
              <Button variant="secondary" className='text-xl font-bold p-6' onClick={() => setTime(hora)}>{hora}</Button>
            </CarouselItem>
          )}
          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>

    
  )
}

export default TimePicker