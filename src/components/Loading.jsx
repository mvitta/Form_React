import { DotSpinner } from '@uiball/loaders'
export function Loading() {
  return (
    <div className='loading'>
      <DotSpinner size={120} speed={0.5} color='brown' />
    </div>
  )
}
