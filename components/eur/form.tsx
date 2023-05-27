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

interface EURSearchFormProps {
  onSubmit: (e?: React.FormEvent<HTMLFormElement>, q?: string) => void
  query: string
  setQuery: (query: string) => void
  loading: boolean
  id: number
}

export function EURSearchForm({
  onSubmit,
  query,
  setQuery,
  loading,
  id
}: EURSearchFormProps) {
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
                placeholder="Як отримати сертифікат?"
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
                title="Как получить сертификат?"
                onClick={() => {
                  setQuery("Как получить сертификат?")
                  onSubmit(undefined, "Как получить сертификат?")
                }}
                disabled={loading}
              >
                Приклад 1
              </Button>
              <Button
                variant="outline"
                title="Як заповнити графу 9?"
                onClick={() => {
                  setQuery("Як заповнити графу 9?")
                  onSubmit(undefined, "Як заповнити графу 9?")
                }}
                disabled={loading}
              >
                Приклад 2
              </Button>
              <Button
                variant="outline"
                title="Права та обов'язки експортера"
                onClick={() => {
                  setQuery("Права та обов'язки експортера")
                  onSubmit(undefined, "Права та обов'язки експортера")
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
