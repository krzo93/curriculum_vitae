import { useState, useEffect } from 'react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

// Module-level singleton so the engine is only initialized once
let engineInitialized = false
let initializationPromise = null

export function useParticlesEngine() {
  const [ready, setReady] = useState(engineInitialized)

  useEffect(() => {
    if (engineInitialized) {
      setReady(true)
      return
    }

    if (!initializationPromise) {
      initializationPromise = initParticlesEngine(async (engine) => {
        await loadSlim(engine)
      }).then(() => {
        engineInitialized = true
      })
    }

    initializationPromise.then(() => {
      setReady(true)
    })
  }, [])

  return ready
}
