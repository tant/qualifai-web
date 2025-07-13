import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  success?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, success, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          ref={ref}
          className={cn(
            // Base styles
            "block w-full rounded-[4px] border px-4 py-2 text-base font-normal text-[#333333] placeholder:italic placeholder:text-[#A0AEC0] placeholder:font-normal bg-white min-h-[40px] focus:outline-none transition-all duration-200 ease-in-out",
            // Border color by state
            error
              ? "border-[#D32F2F] focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F]"
              : success
              ? "border-[#00C853] focus:border-[#00C853] focus:ring-2 focus:ring-[#00C853]"
              : "border-[#F6F9FC] focus:border-[#00C853] focus:ring-2 focus:ring-[#00C853]",
            // Shadow on focus
            "focus:shadow-[0_0_0_2px_rgba(0,200,83,0.15)]",
            // Disabled state
            props.disabled && "opacity-50 cursor-not-allowed bg-[#F6F9FC]",
            className
          )}
          {...props}
        />
        {/* Error or success icon/message */}
        {error && (
          <div className="flex items-center gap-1 mt-1 text-[#D32F2F] text-sm">
            <svg width="16" height="16" fill="none" stroke="#D32F2F" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
            <span>{error}</span>
          </div>
        )}
        {success && !error && (
          <div className="flex items-center gap-1 mt-1 text-[#00C853] text-sm">
            <svg width="16" height="16" fill="none" stroke="#00C853" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
            <span>{success}</span>
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
