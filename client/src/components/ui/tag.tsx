import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-sm transition-all duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
