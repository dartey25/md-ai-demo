import { Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function DevAlert() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Не так швидко!</AlertTitle>
      <AlertDescription>
        Блок знаходиться в етапі розробки.
      </AlertDescription>
    </Alert>
  )
}
