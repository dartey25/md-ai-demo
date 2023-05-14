import * as React from "react"

import { TypographyBlockquote } from "@/components/ui/blockquote"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Summarizeresponse } from "./summarize"
import { SumSkeleton } from "./result-skeleton"

// import { TableSkeleton } from "./result-skeleton"

interface SearchResultsProps {
  data: Summarizeresponse | null
}

export function SearchResult({ data }: SearchResultsProps) {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Open AI</CardTitle>
      </CardHeader>
      <CardContent>
        {data ? (
          <TypographyBlockquote>
            {data.answer ? data.answer : "Не вдалося отримати відповідь"}
          </TypographyBlockquote>
        ) : (
          <SumSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
