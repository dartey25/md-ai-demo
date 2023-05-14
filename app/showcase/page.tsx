"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { showCaseConfig } from "@/config/showcase"
import { Button } from "@/components/ui/button"
import { CodeSearch } from "@/components/code-search/code-search"
import { EURSearch } from "@/components/eur/eur-search"
import { Summarize } from "@/components/summarize/summarize"
import { SupportBot } from "@/components/support-bot/support-bot"

export default function ShowcasePage() {
  const [pageIndex, setPageIndex] = useState<number>(
    Number(typeof localStorage !== "undefined" && localStorage.getItem("pageIndex")) || 0
  )
  

  useEffect(() => {
    localStorage.setItem("pageIndex", pageIndex.toString())
  }, [pageIndex])

  return (
    <>
      <div className="flex max-w-full flex-row gap-2">
        {pageIndex !== 0 && (
          <Button
            variant="secondary"
            className="w-48"
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            <ChevronLeft className="mr-auto h-4 w-4" />
            <div className="w-full text-center">
            {showCaseConfig[pageIndex - 1].title}
            </div>
          </Button>
        )}
        {pageIndex < showCaseConfig.length - 1 && (
          <Button
            variant="secondary"
            className="ml-auto w-48"
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            <div className="w-full text-center">
            {showCaseConfig[pageIndex + 1].title}
            </div>
            <ChevronRight className="ml-auto h-4 w-4" />
          </Button>
        )}
      </div>
      <div>
        {pageIndex === 0 && <CodeSearch id={pageIndex} />}
        {pageIndex === 1 && <EURSearch id={pageIndex} />}
        {pageIndex === 2 && <Summarize id={pageIndex} />}
        {pageIndex === 3 && <SupportBot id={pageIndex} />}
      </div>
    </>
  )
}
