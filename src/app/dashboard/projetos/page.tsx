import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { WehandleLogo } from '@/components/ui/wehandle-logo'

export default function Projetos() {
  return (
    <>
      <WehandleLogo height={128} className="animate-bounce" />
      <LoadingSpinner />
    </>
  )
}
