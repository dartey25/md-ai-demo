import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TypographyBlockquote } from "@/components/ui/blockquote"
import { Summarizeresponse } from "./summarize"

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
        <TypographyBlockquote>
          {data && data.answer ? data.answer : "Не вдалося отримати відповідь"}
        </TypographyBlockquote>
      </CardContent>
    </Card>
  )
}
