"use client"

import * as React from "react"

import { SummarizeForm } from "./form"
import { SearchResult } from "./result-card"

import axios from "@/lib/axios"

export type Summarizeresponse = {
  answer: string
}

interface SummarizeProps {
  id: number
}

export function Summarize({ id }: SummarizeProps) {
  const [query, setQuery] = React.useState<string>("")
  const [loading, setLoading] = React.useState<number| undefined>(undefined)
  const [result, setResult] = React.useState<Summarizeresponse | null>(null)

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const handleSubmit = async (id: number) => {
    setLoading(id)
    setResult(null)
    try{
      await wait(1500)
      const {data} = await axios.get(`/summarize?doc=${id}`)
      console.log(data)
      setResult(data)
    }catch(err){
      console.log(err)
        setResult(null)
    }
    setLoading(undefined)
    // setTimeout(() => {
    //   setResult(fakeData)
    //   setLoading(undefined)
    // }, 3000)
  }

  return (
    <>
      <SummarizeForm
        onSubmit={handleSubmit}
        query={query}
        setQuery={setQuery}
        loading={loading}
        id={id}
      />
      {(result || loading) && <SearchResult data={result} />}
    </>
  )
}

const fakeData: Summarizeresponse = { answer: "" }
