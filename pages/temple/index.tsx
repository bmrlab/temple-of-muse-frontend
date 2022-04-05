import clsx from 'clsx'
import type { NextLayoutPage } from 'next'
import { useEffect, useState, useRef, useCallback } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import renderWebGL from '@/components/temple/render-webgl'

const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const ProgressCover = function({ progress }: { progress: number }) {
  let [loadingProgress, setLoadingProgress] = useState(progress)
  const prevProgress = usePrevious(progress)

  const updateProgress = useCallback((prev: number, current: number, elapsed: number) => {
    const newProgress = prev + elapsed
    if (newProgress <= 100 && newProgress <= current && newProgress >= loadingProgress) {
      setLoadingProgress(newProgress)
      window.requestAnimationFrame(() => updateProgress(prev, current, elapsed + 1))
    }
  }, [loadingProgress])
  useEffect(() => updateProgress(prevProgress || 0, progress, 0))

  const slowUpdateProgress = useCallback((progress: number) => {
    if (progress <= 100 && progress >= loadingProgress) {
      setLoadingProgress(progress)
      setTimeout(() => slowUpdateProgress(progress + 1), 1000)
    }
  }, [loadingProgress])
  useEffect(() => slowUpdateProgress(progress), [progress, slowUpdateProgress])

  return (
    <div className={clsx(
      'absolute left-0 top-0 w-full h-full',
      'text-9xl text-grandslang bg-black',
      'flex items-center justify-center',
       'transition-all duration-1000 ease-in-out',
       {'opacity-0 invisible': progress >= 100}
    )}>{loadingProgress}%</div>
  )
}

const Temple: NextLayoutPage = () => {
  let [loadingProgress, setProgress] = useState(0)

  useEffect(() => {
    renderWebGL((progress: number) => setProgress(Math.floor(progress * 100)))
  }, [])

  return (
    <div className='relative'>
      <canvas id='unity-canvas'></canvas>
      <ProgressCover progress={loadingProgress}/>
    </div>
  )
}


Temple.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Temple
