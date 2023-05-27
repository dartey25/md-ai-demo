"use client"

import * as React from "react"
import { useRef } from "react"

import { Button } from "@/components/ui/button"
import ButtonLoading from "@/components/loading-button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { showCaseConfig } from "@/config/showcase"

interface CodeSearchProps {
  onSubmit: (e?: React.FormEvent<HTMLFormElement>, query?: string) => void
  query: string
  setQuery: (query: string) => void
  loading: boolean,
  id: number
}

export function CodeSearchForm({
  onSubmit,
  query,
  setQuery,
  loading,
  id
}: CodeSearchProps) {
// @ts-ignore
  const btnRef = useRef<Ref<HTMLButtonElement> | undefined>(undefined)
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{showCaseConfig[id].title}</CardTitle>
        <CardDescription>
          {showCaseConfig[id].description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="flex max-w-full flex-row justify-between">
            <div className="flex w-1/2 flex-row space-x-1.5">
              <Input
                id="name"
                placeholder="Опис товару"
                onChange={(e) => setQuery(e.currentTarget.value)}
                value={query}
              />
              <ButtonLoading type="submit" className="ml-auto" loading={loading} ref={btnRef}>
                Пошук
              </ButtonLoading>
            </div>
            <div className="flex flex-row space-x-2">
              <Button
                variant="outline"
                title="машина мерседес бенз с класс"
                onClick={() => {
                  setQuery("машина мерседес бенз с класс")
                  //btnRef.current?.click()
                  onSubmit(undefined, "машина мерседес бенз с класс")
                }}
                disabled={loading}
              >
                Приклад 1
              </Button>
              <Button
                variant="outline"
                title="корм для собак со вкусом говядины"
                onClick={() => {
                  setQuery("корм для собак со вкусом говядины")
                  onSubmit(undefined, "корм для собак со вкусом говядины")
                }}
                disabled={loading}
              >
                Приклад 2
              </Button>
              <Button
                variant="outline"
                title="красный автомобиль с синими сидениями"
                onClick={() => {
                  setQuery("красный автомобиль с синими сидениями")
                  onSubmit(undefined, "красный автомобиль с синими сидениями")
                }}
                disabled={loading}
              >
                Приклад 3
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
