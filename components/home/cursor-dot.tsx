import { useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './cursor-dot.module.css'

export default function CursorDot() {
  const mouseCircle = useRef<HTMLDivElement>(null)
  if (typeof document !== 'undefined') {
    let mousePosX = 0, mousePosY = 0
    document.onmousemove = (e) => {
      setTimeout(() => {
        if (mouseCircle.current) {
          mouseCircle.current.style.display = 'block'
        }
      }, 100)
      mousePosX = e.pageX
      mousePosY = e.pageY
    }
    let delay = 2, revisedMousePosX = 0, revisedMousePosY = 0
    const delayMouseFollow = () => {
      window.requestAnimationFrame(delayMouseFollow)
      revisedMousePosX += (mousePosX - revisedMousePosX) / delay
      revisedMousePosY += (mousePosY - revisedMousePosY) / delay
      if (mouseCircle.current) {
        mouseCircle.current.style.top = revisedMousePosY + 'px'
        mouseCircle.current.style.left = revisedMousePosX + 'px'
      }
    }
    delayMouseFollow()
  }

  return (
    <>
      <div
        ref={mouseCircle}
        className='fixed z-50 w-16 h-16 -mx-8 -my-8 rounded-full pointer-events-none'
        style={{
          'backgroundColor':'#420EFC',
          'display': 'none',
        }}
      ></div>
    </>
  )
}
