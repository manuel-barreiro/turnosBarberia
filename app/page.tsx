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
import { useState } from "react";


export default function Home() {

  const [step, setStep] = useState(0)

  function nextStep(): void {
    setStep(step + 1)
  }

  function prevStep(): void {
    setStep(step - 1)
  }


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
                <Button onClick={() => setStep(1)}>Agendá tu turno</Button>
              )}

              {/* Elegir día */}
              {step === 1 && (
                <div>Elegir fecha</div>
              ) }

              {/* Elegir horario */}
              {step === 2 && (
                <div>Elegir horario</div>
              ) }

              {/* Confirmar */}
              {step === 3 && (
                <div>Confirmar</div>
              ) }

              {/* Gracias */}
              {step === 4 && (
                <div>Gracias</div>
              ) }
    
            </CardContent>
            {step !== 0 && <CardFooter className="flex justify-between">
              <Button onClick={prevStep}>Anterior</Button>
              <Button onClick={nextStep} variant="outline">Siguiente</Button>
            </CardFooter>}
          </Card>
        </main>
  );
}
