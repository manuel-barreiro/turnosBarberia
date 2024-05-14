"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useTurno } from "./context/TurnoProvider"; 
import DatePicker from "./_components/DatePicker";
import TimePicker from "./_components/TimePicker";
import ConfirmarTurno from "./_components/ConfirmarTurno";

export default function Home() {

  const { step, prevStep, nextStep, date, time } = useTurno()

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Logo</CardTitle>
          <CardDescription>Agendá tu turno para cortarte el pelo.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">

          {/* Welcome */}
          {step === 0 && (
            <Button onClick={() => nextStep()}>Agendá tu turno</Button>
          )}

          {/* Elegir día */}
          {step === 1 && (
            <DatePicker />
          ) }

          {/* Elegir horario */}
          {step === 2 && (
            <TimePicker />
          ) }

          {/* Confirmar */}
          {step === 3 && (
            <ConfirmarTurno />
          ) }

          {/* Gracias */}
          {step === 4 && (
            <div>Gracias</div>
          ) }

        </CardContent>

        {step !== 0 &&        
        <CardFooter className="flex justify-between">
          <Button onClick={() => prevStep()}>Anterior</Button>
          {(step === 1 && !date) || (step === 2 && !time) ?
            <Button variant="outline" disabled>Siguiente</Button> :
            <Button onClick={() => nextStep()} variant="outline">Siguiente</Button>
          }
          
        </CardFooter>
        }
      </Card>
    </main>
  );
}
