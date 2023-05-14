
import { Skeleton } from "@/components/ui/skeleton"

export function SumSkeleton() {
  return (
    <div className="mt-3 flex flex-col items-start space-y-2">
        <Skeleton className="h-16 w-full" />
    </div>
  )
}