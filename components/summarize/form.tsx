"use client"

import * as React from "react"
import { useRef } from "react"
import Link from "next/link"
import { Loader2, Settings } from "lucide-react"

import { showCaseConfig } from "@/config/showcase"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface SummarizeFormProps {
  onSubmit: (id: number) => void
  query: string
  setQuery: (query: string) => void
  loading?: number
  id: number
}

export function SummarizeForm({
  onSubmit,
  query,
  setQuery,
  loading,
  id,
}: SummarizeFormProps) {
  const btnRef = useRef<React.Ref<HTMLButtonElement> | undefined>(undefined)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{showCaseConfig[id].title}</CardTitle>
        <CardDescription>{showCaseConfig[id].description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Оберіть який документ підсумувати:</p>
        <div className="ml-4 mt-2 flex flex-col space-y-2">
          <div className="flex w-3/4 flex-row items-center justify-between space-x-2">
            <Link
              href="https://www.mdoffice.com.ua/ua/aMDODoc.FindHelpAdv?p_file=11_19790"
              target="_blank"
              className="text-muted-foreground text-sm"
            >
              <p>
                Про затвердження Порядку заповнення митних декларацій за формою
                єдиного адміністративного документа
              </p>
            </Link>
            <Button
              variant="outline"
              disabled={!!loading}
              onClick={() => onSubmit(1)}
            >
              {loading === 1 ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Settings className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="flex w-3/4 flex-row items-center justify-between space-x-2">
            <Link
              href="https://www.understandingwar.org/backgrounder/russian-offensive-campaign-assessment-february-8-2023"
              target="_blank"
              className="text-muted-foreground text-sm"
            >
              Репорт про ситуацію в Україні
            </Link>
            <Button
              variant="outline"
              disabled={!!loading}
              onClick={() => onSubmit(2)}
            >
              {loading === 2 ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Settings className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
