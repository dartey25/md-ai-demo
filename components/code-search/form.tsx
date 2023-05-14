"use client"

import * as React from "react"
import { useRef } from "react"

import { Button } from "@/components/ui/button"
import {ButtonLoading} from "@/components/loading-button"
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
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
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

  const btnRef = useRef<React.Ref<HTMLButtonElement> | undefined>(undefined)
  
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
                onClick={() => {
                  setQuery("машина мерседес")
                  btnRef.current?.click()
                }}
                disabled={loading}
              >
                Приклад 1
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("система контроля уровня метала")
                  btnRef.current?.click()
                }}
                disabled={loading}
              >
                Приклад 2
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("корм для собак")
                  btnRef.current?.click()
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
