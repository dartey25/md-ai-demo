import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import { TypographyBlockquote } from "@/components/ui/blockquote"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { EURresponse } from "./eur-search"
import { EURSkeleton } from "./result-skeleton"

interface SearchResultsProps {
  data: EURresponse | null
}

interface SourceDocsProps {
  source: EURresponse["source"]
}

function SourceDocs({ source }: SourceDocsProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="ml-4 mt-4 w-[96%] space-y-2"
    >
      <div className="flex items-center space-x-2 px-4">
        <CollapsibleTrigger asChild>
          <p className={`${!isOpen ? 'text-muted-foreground' : ''} cursor-pointer text-sm`}>
            {!isOpen ? 'Показати' : 'Сховати'} джерела
          </p>
        </CollapsibleTrigger>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Джерело</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {source &&
              source.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="text-muted-foreground">{index + 1}</TableCell>
                    <TableCell>{item.content}</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function SearchResult({ data }: SearchResultsProps) {
  console.log(data)
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Open AI</CardTitle>
      </CardHeader>
      <CardContent>
        {data && (
          <>
            <TypographyBlockquote>
              {data.answer ? data.answer : "Не вдалося отримати відповідь"}
            </TypographyBlockquote>
            <SourceDocs source={data.source} />
          </>
        )}
        {!data && <EURSkeleton />}
      </CardContent>
    </Card>
  )
}
