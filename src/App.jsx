import { useEffect, useState } from "react"

const FollowCursor = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 960, y: 560 })

  useEffect(() => {
    console.log("Effect", { enabled })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h3>Project 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        Follow Cursor: {enabled ? "ON" : "OFF"}
      </button>
    </>
    
  )

}

function App() {
  return (
    <main>
      <FollowCursor/>
    </main>
  )
}

export default App
