"use client"

import * as React from "react"
import { SupportForm } from "./form"


interface SupportBotProps {
    id: number
}

export function SupportBot({id}: SupportBotProps) {

  return (
    <>
        <SupportForm id={id} />
    </>
  )
}
