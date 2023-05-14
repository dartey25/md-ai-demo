import { Skeleton } from "@/components/ui/skeleton"

export function TableSkeleton() {
  return (
    <div className="mt-3 flex items-center space-x-4">
      <div className="w-full space-y-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  )
}
