import { useEffect, useRef } from 'react'
import styles from './NeuralBackground.module.css'

const ACCENT = '0, 255, 136'
const LINK_DIST = 140
const MOUSE_DIST = 180
const SPEED = 0.25

function createNodes(width, height) {
  // Density scales with area: ~40 nodes on phones, ~80 on desktop.
  const count = Math.round(Math.min(80, Math.max(30, (width * height) / 16000)))
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * SPEED * 2,
    vy: (Math.random() - 0.5) * SPEED * 2,
    r: Math.random() * 1.5 + 1,
  }))
}

export default function NeuralBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let width = 0
    let height = 0
    let nodes = []
    let frameId = null
    let visible = true
    const mouse = { x: -9999, y: -9999 }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      const widthChanged = rect.width !== width
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Height-only changes (mobile address bar) keep the existing nodes.
      if (widthChanged || nodes.length === 0) {
        nodes = createNodes(width, height)
      } else {
        for (const n of nodes) n.y = Math.min(n.y, height)
      }
      draw()
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(${ACCENT}, ${(1 - dist / LINK_DIST) * 0.18})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const md = Math.hypot(n.x - mouse.x, n.y - mouse.y)
        const boost = md < MOUSE_DIST ? 1 - md / MOUSE_DIST : 0
        ctx.fillStyle = `rgba(${ACCENT}, ${0.35 + boost * 0.55})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + boost * 1.5, 0, Math.PI * 2)
        ctx.fill()

        if (boost > 0) {
          ctx.strokeStyle = `rgba(${ACCENT}, ${boost * 0.3})`
          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }
      draw()
      frameId = requestAnimationFrame(step)
    }

    function start() {
      if (frameId === null && visible && !document.hidden && !reducedMotion.matches) {
        frameId = requestAnimationFrame(step)
      }
    }

    function stop() {
      if (frameId !== null) {
        cancelAnimationFrame(frameId)
        frameId = null
      }
    }

    function onVisibility() {
      document.hidden ? stop() : start()
    }

    function onMotionChange() {
      stop()
      draw()
      start()
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      if (frameId === null) draw()
    }

    function onMouseLeave() {
      mouse.x = -9999
      mouse.y = -9999
      if (frameId === null) draw()
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      visible ? start() : stop()
    })

    const resizeObserver = new ResizeObserver(resize)
    const section = canvas.parentElement

    resize()
    start()
    observer.observe(canvas)
    resizeObserver.observe(canvas)
    document.addEventListener('visibilitychange', onVisibility)
    reducedMotion.addEventListener('change', onMotionChange)
    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)

    return () => {
      stop()
      observer.disconnect()
      resizeObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      reducedMotion.removeEventListener('change', onMotionChange)
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
}
