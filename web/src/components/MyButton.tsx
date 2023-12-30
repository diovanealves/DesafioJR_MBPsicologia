import { ReactNode, forwardRef } from 'react'
import { Button } from './ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  onClick?: () => void
  mobile?: boolean
  mobileText?: string
}

const MyButton = forwardRef<HTMLButtonElement, MyButtonProps>(function MyButton(
  { children, className, onClick, mobile, mobileText, ...rest }: MyButtonProps,
  ref,
) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button ref={ref} onClick={onClick} className={className} {...rest}>
            {children}
          </Button>
        </TooltipTrigger>

        {mobile && (
          <TooltipContent>
            <p>{mobileText}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
})

export default MyButton
