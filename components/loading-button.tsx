import { ButtonHTMLAttributes, forwardRef } from "react"
import { Loader2 } from "lucide-react"

import { Button, ButtonProps } from "@/components/ui/button"

interface ButtonLoadingProps extends ButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean
  
}

const ButtonLoading = forwardRef<HTMLButtonElement, ButtonLoadingProps>(
  ({ loading, children, ...rest }, ref) => {

    return (
      <Button ref={ref} disabled={loading} {...rest}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Button>
    )
  }
)

ButtonLoading.displayName = 'ButtonLoading';

export default ButtonLoading
