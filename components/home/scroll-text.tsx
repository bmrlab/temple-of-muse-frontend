import { useRef, RefObject } from 'react'
import clsx from 'clsx'
import styles from './scroll-text.module.css'

function initScroll(spanEl: RefObject<HTMLSpanElement>, dir: number) {
  let lastTime = (new Date()).valueOf()
  let offset = 0
  const move = () => {
    window.requestAnimationFrame(move)
    if (spanEl && spanEl.current) {
      const widthSpan = spanEl.current.offsetWidth
      const widthWindow = window.innerWidth
      const totalDis = widthSpan + widthWindow + 20
      const elapsed = (new Date()).valueOf() - lastTime
      const step = elapsed * totalDis / 15000
      lastTime += elapsed
      offset += step * dir
      if (Math.abs(offset) > (widthWindow + 10)) {
        offset = -(widthSpan + 10) * dir
      }
      spanEl.current.style.transform = `translate3d(${offset}px, 0, 0)`
    }
  }
  move()
}

export default function ScrollText() {
  const spanL = useRef<HTMLSpanElement>(null)
  const spanR = useRef<HTMLSpanElement>(null)
  if (typeof window !== 'undefined') {
    initScroll(spanL, 1)
    initScroll(spanR, -1)
  }
  return (
    <div className={clsx(
      'my-1 sm:my-4 md:my-8',
      'text-grandslang',
      'text-3xl sm:text-6xl md:text-9xl'
    )}>
      <div className='pt-4 pb-1 px-4 text-left border-b border-white/30 overflow-hidden'>
        <span ref={spanL} className='relative block whitespace-nowrap'>WEB3 TECH x DESIGN</span>
      </div>
      <div className='pt-4 pb-1 px-4 text-right border-b border-white/30 overflow-hidden'>
        <span ref={spanR} className='relative block whitespace-nowrap'>CREATED BY BMRLAB</span>
      </div>
    </div>
  )
}
