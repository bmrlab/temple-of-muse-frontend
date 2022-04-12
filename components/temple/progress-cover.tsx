import clsx from 'clsx'
import { useEffect, useState, useRef, useCallback, useMemo } from 'react'

export default function ProgressCover({ loadingProgress }: { loadingProgress: number }) {
  let [progress, setProgress] = useState(0)
  const progressMemo = useMemo(() => ({ value: 0 }), [])

  let requestId = useRef(0)
  const updateProgress = useCallback(() => {
    if (progressMemo.value < 100) {
      requestId.current = window.requestAnimationFrame(() => updateProgress())
    }
    if (progressMemo.value < loadingProgress) {
      progressMemo.value = progressMemo.value + 1
      setProgress(progressMemo.value)
    }
  }, [progressMemo, loadingProgress])
  useEffect(() => {
    updateProgress()
    return () => {
      requestId.current && window.cancelAnimationFrame(requestId.current)
    }
  }, [updateProgress, loadingProgress])

  return (
    <div className={clsx(
      'absolute left-0 top-0 w-full h-full',
      'text-9xl text-grandslang bg-black text-white',
      'flex items-center justify-center',
       'transition-all duration-1000 ease-in-out',
        {'opacity-0 invisible': progress >= 100}
    )}>{progress}%</div>
  )
}
