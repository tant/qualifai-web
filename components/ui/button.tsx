import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Button variants following visual guideline
const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-base font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 min-h-[40px] min-w-[40px]",
  {
    variants: {
      variant: {
        primary:
          "bg-[#00C853] text-white shadow-sm hover:bg-[#00B34A] active:bg-[#009B3A] focus:bg-[#00C853]",
        secondary:
          "bg-transparent border border-[#0A2540] text-[#0A2540] shadow-none hover:bg-[#F6F9FC] active:bg-[#E0E7EF] focus:bg-[#F6F9FC]",
        tertiary:
          "bg-transparent text-[#0A2540] hover:text-[#00C853] active:text-[#009B3A] shadow-none",
      },
      size: {
        default: "h-10 px-5 py-2 text-base",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
