import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { TableSkeleton } from "./result-skeleton"

interface SearchResultsProps {
  data: any[] | null
}

export function SearchResult({ data }: SearchResultsProps) {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Результати пошуку</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Вірогідність</TableHead>
              <TableHead>Код</TableHead>
              <TableHead>Назва</TableHead>
            </TableRow>
          </TableHeader>
          {data && (
            <TableBody>
              {data.length > 0 ? (
                data.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {item.similarity.toFixed(4) * 100}%
                      </TableCell>
                      <TableCell>{item.code}</TableCell>
                      <TableCell>{item.name}</TableCell>
                    </TableRow>
                  )
                })
              ) : (
                <TableRow><TableCell colSpan={3} className="text-muted-foreground">Нічого не знайдено.</TableCell></TableRow>
              )}
            </TableBody>
          )}
        </Table>
        {!data && <TableSkeleton />}
      </CardContent>
    </Card>
  )
}
