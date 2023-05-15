'use client'

import { useEffect, useState } from 'react'

export function Timer() {
  const [sec, setSec] = useState(0)

  useEffect(() => {
    let ignore = false
    const intervalId = setInterval(() => {
      if (!ignore) {
        setSec(pSec => pSec + 1)
      }
    }, 1000)

    return () => {
      ignore = true
      clearInterval(intervalId)
    }
  }, [])

  return <div>Time used: {sec}s</div>
}
