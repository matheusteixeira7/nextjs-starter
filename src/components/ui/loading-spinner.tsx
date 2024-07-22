import { cn } from '@/lib/utils'

type LoadingSpinner = {
  className?: string
  height?: number
  width?: number
}

export const LoadingSpinner = ({
  className,
  height = 24,
  width = 24,
}: LoadingSpinner) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('animate-spin', className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}
