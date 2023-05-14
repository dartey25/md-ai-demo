"use client"

import * as React from "react"

import { showCaseConfig } from "@/config/showcase"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DevAlert } from "@/components/development-alert"

interface SupportFormProps {
  id: number
}

export function SupportForm({
  id,
}: SupportFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{showCaseConfig[id].title}</CardTitle>
        <CardDescription>{showCaseConfig[id].description}</CardDescription>
      </CardHeader>
      <CardContent>
        <DevAlert />
      </CardContent>
    </Card>
  )
}
