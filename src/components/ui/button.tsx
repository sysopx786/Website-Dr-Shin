import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[color,background-color,box-shadow,transform] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        default: "bg-forest text-paper hover:bg-forest-deep",
        outline:
          "border border-forest bg-transparent text-forest hover:bg-paper-deep",
        ghost: "bg-transparent text-forest hover:bg-paper-deep",
        paper: "bg-surface text-ink shadow-border hover:bg-paper",
      },
      size: {
        default: "min-h-12 px-5 text-base",
        lg: "min-h-14 px-6 text-lg",
        sm: "min-h-11 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
