
import { Skeleton } from "@/components/ui/skeleton"

export function EURSkeleton() {
  return (
    <div className="mt-3 flex flex-col items-start space-y-2">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-4 w-1/4" />
    </div>
  )
}
