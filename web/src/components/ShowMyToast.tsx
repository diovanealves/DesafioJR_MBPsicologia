import { toast } from './ui/use-toast'

function ShowMyToast(description: string, variant: 'default' | 'destructive') {
  toast({ description, variant, duration: 4500 })
}

export default ShowMyToast
